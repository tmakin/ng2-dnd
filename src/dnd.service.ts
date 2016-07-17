// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

import {Injectable, ElementRef, EventEmitter} from '@angular/core';

import {DragDropConfig} from './dnd.config';
import {isPresent} from './dnd.utils';

export interface DragDropData {
    dragData: any;
    mouseEvent: MouseEvent;
}

@Injectable()
export class DragDropService {
    public allowedDropZones: Array<string> = [];
    public onDragSuccessCallback: EventEmitter<DragDropData>;
    public dragData: any;
    public isDragged: boolean;

    /**
     * flag use to keep track of the current level of nesting inside a list container.
     * Should be reset to zero at start of new grag operation
     */
    public depth:number;

    public start(dragData:any, onDragSuccessCallback: EventEmitter<DragDropData> = null)
    {
        this.dragData = dragData;
        this.depth = 0;
        this.isDragged = true;
        this.onDragSuccessCallback = onDragSuccessCallback;
    }

    public end() {
        this.dragData = null;
        this.depth = 0;
        this.isDragged = false;
    }
}

@Injectable()
export class DragDropSortableService {
    index: number;
    sortableData: Array<any>;
    isDragged: boolean;

    private _elem: HTMLElement;
    public get elem(): HTMLElement {
        return this._elem;
    }

    constructor(private _config:DragDropConfig) {}

    markSortable(elem: HTMLElement) {
        if (isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    }
}