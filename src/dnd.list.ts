// Added by Tom Makin 15/07/16

import {ChangeDetectorRef, HostListener} from '@angular/core';
import {Directive, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {AbstractComponent} from './dnd.component';
import {DragDropConfig} from './dnd.config';
import {DragDropService} from './dnd.service';

@Directive({ selector: '[dnd-list-container]' })
export class ListContainer extends AbstractComponent {

    @Input("dragEnabled") set draggable(value:boolean) {
        this.dragEnabled = !!value;
    }

    private _listData: Array<any> = [];

    @Input() set listData(listData: Array<any>) {
        if(!listData) {
            throw "List data is not defined";
        }
        this._listData = listData;
        this.dropEnabled = (this._listData.length === 0);
        // console.log("collection is changed, drop enabled: " + this.dropEnabled);
    }
    get listData(): Array<any> {
        return this._listData;
    }

    @Input("dropZones") set dropzones(value:Array<string>) {
        this.dropZones = value;
    }

    constructor(elemRef: ElementRef, dragDropService: DragDropService, config:DragDropConfig, cdr:ChangeDetectorRef) {
        super(elemRef, dragDropService, config, cdr);
        this.dragEnabled = false;
    }

    public isDirty:boolean = true;

    ngAfterViewChecked() {
        // contentChild is updated after the content has been checked
        //console.log('List AfterViewChecked');
        this.isDirty = false;
    }

    private indexMap: Map<any, number> = new Map<any, number>()

    private rebuildIndexMap() {
        this.indexMap.clear();

        for(let i:number=0;i<this.listData.length;i++) {
            let item:any = this.listData[i];
            this.indexMap.set(item,i);
        }
    }

    public getIndex(item:any) : number {
        return this.indexMap.get(item) || -1;
    }

    _onDragEnterCallback(event: Event) {

        if(this._dragDropService.depth == 0)
        {
            this.rebuildIndexMap();
        }

        this._dragDropService.depth++;

        if(event.target != this._elem) {
            return;
        }

        if (this._dragDropService.isDragged) {
            let item:any = this._dragDropService.dragData;

            if(this.contains(item)) {
                return;
            }

            //console.log("item created");
            //add the item, this will cause the ng-for to rebuild
            this.listData.push(item);

            this.detectChanges();
        }
    }

    _onDragLeaveCallback(event: Event) {

        this._dragDropService.depth--;
        //console.log("container leave outer ", this._dragDropService.depth);

        if(this._dragDropService.depth > 0) {
            return;
        }

        let item:any = this._dragDropService.dragData;

        this.removeItem(item);
        //console.log("item zapped ", this._dragDropService.depth);
    }

    contains(item:any):boolean {

        if(item == null) {
            return false;
        }
        var index = this.listData.indexOf(item);

        return index >= 0;
    }

    removeItem(item:any) :boolean {
        if(item == null) {
            return false;
        }
        var index = this.listData.indexOf(item);

        if(index < 0) {
            return false;
        }
        this.isDirty = true;

        //console.log("Item removed :", item);
        this.listData.splice(index, 1);
        return true;
    }

    insertBefore(target:number, item:any) :boolean {
        if(item == null) {
            return false;
        }

        var index = this.listData.indexOf(target);

        if(index < 0) {
            index= this._listData.length;
        }

        this.listData.splice(index, 0, item);

        //console.log("item inserted at %d", index);
        return true;
    }

    insertItem(index:number, item:any) :boolean {
        if(item == null) {
            return false;
        }

        this.listData.splice(index, 0, item);

        this.isDirty = true;
        //console.log("item inserted at %d :", index);
        return true;
    }
}

@Directive({ selector: '[dnd-list-item]' })
export class ListItem extends AbstractComponent {

    @Input('listIndex') index: number;

    @Input("dragEnabled") set draggable(value:boolean) {
        this.dragEnabled = !!value;
    }

    @Input("dropEnabled") set droppable(value:boolean) {
        this.dropEnabled = !!value;
    }

    /**
     * The data that has to be dragged. It can be any JS object
     */
    @Input() dragData: any;

    /**
     * Drag allowed effect
     */
    @Input("effectAllowed") set effectallowed(value: string) {
        this.effectAllowed = value;
    }
    
    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     */
    @Output("onDragSuccess") onDragSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

    @Output("onDragStart") onDragStartCallback: EventEmitter<any> = new EventEmitter<any>();
    @Output("onDragOver") onDragOverCallback: EventEmitter<any> = new EventEmitter<any>();
    @Output("onDragEnd") onDragEndCallback: EventEmitter<any> = new EventEmitter<any>();
    @Output("onDropSuccess") onDropSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

    constructor(elemRef: ElementRef, dragDropService: DragDropService, config:DragDropConfig,
        private _listContainer: ListContainer,
        cdr:ChangeDetectorRef) {

        super(elemRef, dragDropService, config, cdr);

        this.dropZones = this._listContainer.dropZones;
        this.dragEnabled = true;
        this.dropEnabled = true;
    }

    _onDragStartCallback(event: Event) {

        this._dragDropService.start(this.dragData, this.onDragSuccessCallback);

        this.onDragStartCallback.emit(this.dragData);
    }

    _onDragOverCallback(event: Event) {
        if (this._dragDropService.isDragged) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    }

    _onDragEndCallback(event: Event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);

        this._dragDropService.end();

        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    }

    _onDragEnterCallback(event: Event) {

        if(this._listContainer.isDirty)
        {
            return;
        }

        if (this._dragDropService.isDragged) {
            //this._dragDropService.markSortable(this._elem);

            let item:any = this._dragDropService.dragData;

            if(item == null || item == this.dragData) {
                //console.log("drag enter blocked");
                return;
            }

            // Remove from parent list
            this._listContainer.removeItem(item);

            //add it back in
            this._listContainer.insertBefore(this.dragData, item);
        }
    }

    _onDropCallback (event: Event) {
        if (this._dragDropService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._listContainer.detectChanges();
        }
    }
}

@Directive({ selector: '[dnd-drag-handle]' })
export class DragHandle
{
    constructor(private _parent: ListItem) {
        _parent.dragEnabled = false;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this._parent.dragEnabled = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this._parent.dragEnabled = false;
    }

}

