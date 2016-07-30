// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

import {Injectable, ChangeDetectorRef} from '@angular/core';
import {Directive, Input, Output, EventEmitter, ElementRef} from '@angular/core';

import {AbstractComponent} from './dnd.component';
import {DragDropConfig, DragImage} from './dnd.config';
import {DragDropService, DragDropData} from './dnd.service';

@Directive({ selector: '[dnd-draggable]' })
export class DraggableComponent extends AbstractComponent {

    @Input("dragEnabled") set draggable(value:boolean) {
        this.dragEnabled = !!value;
    }

    /**
     * Clone the drag data before drag
     */
    @Input() clone:boolean;

    /**
     * Callback function called when the drag actions happened.
     */
    @Output() onDragStart: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();
    @Output() onDragEnd: EventEmitter<DragDropData> = new EventEmitter<DragDropData>();

    /**
     * The data that has to be dragged. It can be any JS object
     */
    @Input() dragData: any;

    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     */
    @Output("onDragSuccess") onDragSuccessCallback: EventEmitter<any> = new EventEmitter<any>();

    @Input("dropZones") set dropzones(value:Array<string>) {
        this.dropZones = value;
    }

    /**
     * Drag allowed effect
     */
    @Input("effectAllowed") set effectallowed(value: string) {
        this.effectAllowed = value;
    }

    /**
     * Here is the property dragImage you can use:
     * - The string value as url to the image
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="/images/simpler.png">
     * ...
     * - The DragImage value with Image and offset by x and y:
     *   let myDragImage: DragImage = new DragImage("/images/simpler1.png", 0, 0);
     * ...
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="myDragImage">
     * ...
     * - The custom function to return the value of dragImage programmatically:
     *   <div class="panel panel-default"
     *        dnd-draggable [dragEnabled]="true"
     *        [dragImage]="getDragImage(someData)">
     * ...
     *   getDragImage(value:any): string {
     *     return value ? "/images/simpler1.png" : "/images/simpler2.png"
     *   }
     */
    @Input() dragImage: string | DragImage | Function;

    constructor(elemRef: ElementRef, dragDropService: DragDropService, config:DragDropConfig,
        cdr:ChangeDetectorRef) {

        super(elemRef, dragDropService, config, cdr);
        this.dragEnabled = true;
    }

    _onDragStartCallback(event: MouseEvent) {

        var data = this.dragData;

        //clone data if required
        if(this.clone) {
            //console.log("clone enabled");
            data = DraggableComponent.cloneObject(data);
            if(data == this.dragData) {
                console.error("dragData is still equal after clone, consider wrapping in object", data);
                return;
            }
        }

        this._dragDropService.start(data, this.onDragSuccessCallback);
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({dragData: this.dragData, mouseEvent: event});
    }

    _onDragEndCallback(event: MouseEvent) {
        this._dragDropService.end();
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({dragData: this.dragData, mouseEvent: event});
    }

    private static cloneObject(obj:any) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        var temp = obj.constructor(); // give temp the original obj's constructor
        for (var key in obj) {
            temp[key] = DraggableComponent.cloneObject(obj[key]);
        }

        return temp;
    }

}