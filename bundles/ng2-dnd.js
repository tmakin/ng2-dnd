System.registerDynamic("src/dnd.draggable", ["@angular/core", "./dnd.component", "./dnd.config", "./dnd.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var core_2 = $__require('@angular/core');
  var dnd_component_1 = $__require('./dnd.component');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_service_1 = $__require('./dnd.service');
  var DraggableComponent = (function(_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this.onDragStart = new core_2.EventEmitter();
      this.onDragEnd = new core_2.EventEmitter();
      this.onDragSuccessCallback = new core_2.EventEmitter();
      this.dragEnabled = true;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
      set: function(value) {
        this.dragEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
      set: function(value) {
        this.dropZones = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
      set: function(value) {
        this.effectAllowed = value;
      },
      enumerable: true,
      configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function(event) {
      var data = this.dragData;
      if (this.clone) {
        data = DraggableComponent.cloneObject(data);
        if (data == this.dragData) {
          console.error("dragData is still equal after clone, consider wrapping in object", data);
          return;
        }
      }
      this._dragDropService.start(data, this.onDragSuccessCallback);
      this._elem.classList.add(this._config.onDragStartClass);
      this.onDragStart.emit({
        dragData: this.dragData,
        mouseEvent: event
      });
    };
    DraggableComponent.prototype._onDragEndCallback = function(event) {
      this._dragDropService.end();
      this._elem.classList.remove(this._config.onDragStartClass);
      this.onDragEnd.emit({
        dragData: this.dragData,
        mouseEvent: event
      });
    };
    DraggableComponent.cloneObject = function(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
      var temp = obj.constructor();
      for (var key in obj) {
        temp[key] = DraggableComponent.cloneObject(obj[key]);
      }
      return temp;
    };
    __decorate([core_2.Input("dragEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], DraggableComponent.prototype, "draggable", null);
    __decorate([core_2.Input(), __metadata('design:type', Boolean)], DraggableComponent.prototype, "clone", void 0);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DraggableComponent.prototype, "onDragStart", void 0);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DraggableComponent.prototype, "onDragEnd", void 0);
    __decorate([core_2.Input(), __metadata('design:type', Object)], DraggableComponent.prototype, "dragData", void 0);
    __decorate([core_2.Output("onDragSuccess"), __metadata('design:type', core_2.EventEmitter)], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([core_2.Input("dropZones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], DraggableComponent.prototype, "dropzones", null);
    __decorate([core_2.Input("effectAllowed"), __metadata('design:type', String), __metadata('design:paramtypes', [String])], DraggableComponent.prototype, "effectallowed", null);
    __decorate([core_2.Input(), __metadata('design:type', Object)], DraggableComponent.prototype, "dragImage", void 0);
    DraggableComponent = __decorate([core_2.Directive({selector: '[dnd-draggable]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef])], DraggableComponent);
    return DraggableComponent;
  }(dnd_component_1.AbstractComponent));
  exports.DraggableComponent = DraggableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.droppable", ["@angular/core", "./dnd.component", "./dnd.config", "./dnd.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var core_2 = $__require('@angular/core');
  var dnd_component_1 = $__require('./dnd.component');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_service_1 = $__require('./dnd.service');
  var DroppableComponent = (function(_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this.onDropSuccess = new core_2.EventEmitter();
      this.onDragEnter = new core_2.EventEmitter();
      this.onDragOver = new core_2.EventEmitter();
      this.onDragLeave = new core_2.EventEmitter();
      this.dropEnabled = true;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
      set: function(value) {
        this.dropEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
      set: function(value) {
        this.allowDrop = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
      set: function(value) {
        this.dropZones = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
      set: function(value) {
        this.effectAllowed = value;
      },
      enumerable: true,
      configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this._elem.classList.add(this._config.onDragEnterClass);
        this.onDragEnter.emit({
          dragData: this._dragDropService.dragData,
          mouseEvent: event
        });
      }
    };
    DroppableComponent.prototype._onDragOverCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this._elem.classList.add(this._config.onDragOverClass);
        this.onDragOver.emit({
          dragData: this._dragDropService.dragData,
          mouseEvent: event
        });
      }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this._elem.classList.remove(this._config.onDragOverClass);
        this._elem.classList.remove(this._config.onDragEnterClass);
        this.onDragLeave.emit({
          dragData: this._dragDropService.dragData,
          mouseEvent: event
        });
      }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this.onDropSuccess.emit({
          dragData: this._dragDropService.dragData,
          mouseEvent: event
        });
        if (this._dragDropService.onDragSuccessCallback) {
          this._dragDropService.onDragSuccessCallback.emit({
            dragData: this._dragDropService.dragData,
            mouseEvent: event
          });
        }
        this._elem.classList.remove(this._config.onDragOverClass);
        this._elem.classList.remove(this._config.onDragEnterClass);
      }
    };
    __decorate([core_2.Input("dropEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], DroppableComponent.prototype, "droppable", null);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DroppableComponent.prototype, "onDropSuccess", void 0);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DroppableComponent.prototype, "onDragEnter", void 0);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DroppableComponent.prototype, "onDragOver", void 0);
    __decorate([core_2.Output(), __metadata('design:type', core_2.EventEmitter)], DroppableComponent.prototype, "onDragLeave", void 0);
    __decorate([core_2.Input("allowDrop"), __metadata('design:type', Function), __metadata('design:paramtypes', [Function])], DroppableComponent.prototype, "allowdrop", null);
    __decorate([core_2.Input("dropZones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], DroppableComponent.prototype, "dropzones", null);
    __decorate([core_2.Input("effectAllowed"), __metadata('design:type', String), __metadata('design:paramtypes', [String])], DroppableComponent.prototype, "effectallowed", null);
    DroppableComponent = __decorate([core_2.Directive({selector: '[dnd-droppable]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef])], DroppableComponent);
    return DroppableComponent;
  }(dnd_component_1.AbstractComponent));
  exports.DroppableComponent = DroppableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.sortable", ["@angular/core", "./dnd.component", "./dnd.config", "./dnd.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var core_2 = $__require('@angular/core');
  var dnd_component_1 = $__require('./dnd.component');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_service_1 = $__require('./dnd.service');
  var SortableContainer = (function(_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this._sortableDataService = _sortableDataService;
      this._sortableData = [];
      this.dragEnabled = false;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
      set: function(value) {
        this.dragEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
      get: function() {
        return this._sortableData;
      },
      set: function(sortableData) {
        this._sortableData = sortableData;
        this.dropEnabled = this._sortableData.length === 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
      set: function(value) {
        this.dropZones = value;
      },
      enumerable: true,
      configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function(event) {
      if (this._sortableDataService.isDragged) {
        var item = this._sortableDataService.sortableData[this._sortableDataService.index];
        if (this._sortableData.indexOf(item) === -1) {
          this._sortableDataService.sortableData.splice(this._sortableDataService.index, 1);
          this._sortableData.push(item);
          this._sortableDataService.sortableData = this._sortableData;
          this._sortableDataService.index = 0;
        }
        this.detectChanges();
      }
    };
    __decorate([core_2.Input("dragEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], SortableContainer.prototype, "draggable", null);
    __decorate([core_2.Input(), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], SortableContainer.prototype, "sortableData", null);
    __decorate([core_2.Input("dropZones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], SortableContainer.prototype, "dropzones", null);
    SortableContainer = __decorate([core_2.Directive({selector: '[dnd-sortable-container]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef, dnd_service_1.DragDropSortableService])], SortableContainer);
    return SortableContainer;
  }(dnd_component_1.AbstractComponent));
  exports.SortableContainer = SortableContainer;
  var SortableComponent = (function(_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this._sortableContainer = _sortableContainer;
      this._sortableDataService = _sortableDataService;
      this.onDragSuccessCallback = new core_2.EventEmitter();
      this.onDragStartCallback = new core_2.EventEmitter();
      this.onDragOverCallback = new core_2.EventEmitter();
      this.onDragEndCallback = new core_2.EventEmitter();
      this.onDropSuccessCallback = new core_2.EventEmitter();
      this.dropZones = this._sortableContainer.dropZones;
      this.dragEnabled = true;
      this.dropEnabled = true;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
      set: function(value) {
        this.dragEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
      set: function(value) {
        this.dropEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
      set: function(value) {
        this.effectAllowed = value;
      },
      enumerable: true,
      configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function(event) {
      this._sortableDataService.isDragged = true;
      this._sortableDataService.sortableData = this._sortableContainer.sortableData;
      this._sortableDataService.index = this.index;
      this._sortableDataService.markSortable(this._elem);
      this._dragDropService.isDragged = true;
      this._dragDropService.dragData = this.dragData;
      this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
      this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function(event) {
      if (this._sortableDataService.isDragged && this._elem != this._sortableDataService.elem) {
        this._sortableDataService.sortableData = this._sortableContainer.sortableData;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        this.onDragOverCallback.emit(this._dragDropService.dragData);
      }
    };
    SortableComponent.prototype._onDragEndCallback = function(event) {
      this._sortableDataService.isDragged = false;
      this._sortableDataService.sortableData = null;
      this._sortableDataService.index = null;
      this._sortableDataService.markSortable(null);
      this._dragDropService.isDragged = false;
      this._dragDropService.dragData = null;
      this._dragDropService.onDragSuccessCallback = null;
      this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function(event) {
      if (this._sortableDataService.isDragged) {
        this._sortableDataService.markSortable(this._elem);
        if ((this.index !== this._sortableDataService.index) || (this._sortableDataService.sortableData != this._sortableContainer.sortableData)) {
          var item = this._sortableDataService.sortableData[this._sortableDataService.index];
          this._sortableDataService.sortableData.splice(this._sortableDataService.index, 1);
          this._sortableContainer.sortableData.splice(this.index, 0, item);
          this._sortableDataService.sortableData = this._sortableContainer.sortableData;
          this._sortableDataService.index = this.index;
        }
      }
    };
    SortableComponent.prototype._onDropCallback = function(event) {
      if (this._sortableDataService.isDragged) {
        this.onDropSuccessCallback.emit(this._dragDropService.dragData);
        if (this._dragDropService.onDragSuccessCallback) {
          this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
        }
        this._sortableContainer.detectChanges();
      }
    };
    __decorate([core_2.Input('sortableIndex'), __metadata('design:type', Number)], SortableComponent.prototype, "index", void 0);
    __decorate([core_2.Input("dragEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], SortableComponent.prototype, "draggable", null);
    __decorate([core_2.Input("dropEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], SortableComponent.prototype, "droppable", null);
    __decorate([core_2.Input(), __metadata('design:type', Object)], SortableComponent.prototype, "dragData", void 0);
    __decorate([core_2.Input("effectAllowed"), __metadata('design:type', String), __metadata('design:paramtypes', [String])], SortableComponent.prototype, "effectallowed", null);
    __decorate([core_2.Output("onDragSuccess"), __metadata('design:type', core_2.EventEmitter)], SortableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([core_2.Output("onDragStart"), __metadata('design:type', core_2.EventEmitter)], SortableComponent.prototype, "onDragStartCallback", void 0);
    __decorate([core_2.Output("onDragOver"), __metadata('design:type', core_2.EventEmitter)], SortableComponent.prototype, "onDragOverCallback", void 0);
    __decorate([core_2.Output("onDragEnd"), __metadata('design:type', core_2.EventEmitter)], SortableComponent.prototype, "onDragEndCallback", void 0);
    __decorate([core_2.Output("onDropSuccess"), __metadata('design:type', core_2.EventEmitter)], SortableComponent.prototype, "onDropSuccessCallback", void 0);
    SortableComponent = __decorate([core_2.Directive({selector: '[dnd-sortable]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, SortableContainer, dnd_service_1.DragDropSortableService, core_1.ChangeDetectorRef])], SortableComponent);
    return SortableComponent;
  }(dnd_component_1.AbstractComponent));
  exports.SortableComponent = SortableComponent;
  return module.exports;
});

System.registerDynamic("src/dnd.list", ["@angular/core", "./dnd.component", "./dnd.config", "./dnd.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var core_2 = $__require('@angular/core');
  var dnd_component_1 = $__require('./dnd.component');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_service_1 = $__require('./dnd.service');
  var ListContainer = (function(_super) {
    __extends(ListContainer, _super);
    function ListContainer(elemRef, dragDropService, config, cdr) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this._listData = [];
      this.isDirty = true;
      this.indexMap = new Map();
      this.dragEnabled = false;
    }
    Object.defineProperty(ListContainer.prototype, "draggable", {
      set: function(value) {
        this.dragEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ListContainer.prototype, "listData", {
      get: function() {
        return this._listData;
      },
      set: function(listData) {
        if (!listData) {
          throw "List data is not defined";
        }
        this._listData = listData;
        this.dropEnabled = (this._listData.length === 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ListContainer.prototype, "dropzones", {
      set: function(value) {
        this.dropZones = value;
      },
      enumerable: true,
      configurable: true
    });
    ListContainer.prototype.ngAfterViewChecked = function() {
      this.isDirty = false;
    };
    ListContainer.prototype.rebuildIndexMap = function() {
      this.indexMap.clear();
      for (var i = 0; i < this.listData.length; i++) {
        var item = this.listData[i];
        this.indexMap.set(item, i);
      }
    };
    ListContainer.prototype.getIndex = function(item) {
      return this.indexMap.get(item) || -1;
    };
    ListContainer.prototype._onDragEnterCallback = function(event) {
      if (this._dragDropService.depth == 0) {
        this.rebuildIndexMap();
      }
      this._dragDropService.depth++;
      if (event.target != this._elem) {
        return;
      }
      if (this._dragDropService.isDragged) {
        var item = this._dragDropService.dragData;
        if (this.contains(item)) {
          return;
        }
        this.listData.push(item);
        this.detectChanges();
      }
    };
    ListContainer.prototype._onDragLeaveCallback = function(event) {
      this._dragDropService.depth--;
      if (this._dragDropService.depth > 0) {
        return;
      }
      var item = this._dragDropService.dragData;
      this.removeItem(item);
    };
    ListContainer.prototype.contains = function(item) {
      if (item == null) {
        return false;
      }
      var index = this.listData.indexOf(item);
      return index >= 0;
    };
    ListContainer.prototype.removeItem = function(item) {
      if (item == null) {
        return false;
      }
      var index = this.listData.indexOf(item);
      if (index < 0) {
        return false;
      }
      this.isDirty = true;
      this.listData.splice(index, 1);
      return true;
    };
    ListContainer.prototype.insertBefore = function(target, item) {
      if (item == null) {
        return false;
      }
      var index = this.listData.indexOf(target);
      if (index < 0) {
        index = this._listData.length;
      }
      this.listData.splice(index, 0, item);
      return true;
    };
    ListContainer.prototype.insertItem = function(index, item) {
      if (item == null) {
        return false;
      }
      this.listData.splice(index, 0, item);
      this.isDirty = true;
      return true;
    };
    __decorate([core_2.Input("dragEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], ListContainer.prototype, "draggable", null);
    __decorate([core_2.Input(), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], ListContainer.prototype, "listData", null);
    __decorate([core_2.Input("dropZones"), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], ListContainer.prototype, "dropzones", null);
    ListContainer = __decorate([core_2.Directive({selector: '[dnd-list-container]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef])], ListContainer);
    return ListContainer;
  }(dnd_component_1.AbstractComponent));
  exports.ListContainer = ListContainer;
  var ListItem = (function(_super) {
    __extends(ListItem, _super);
    function ListItem(elemRef, dragDropService, config, _listContainer, cdr) {
      _super.call(this, elemRef, dragDropService, config, cdr);
      this._listContainer = _listContainer;
      this.onDragSuccessCallback = new core_2.EventEmitter();
      this.onDragStartCallback = new core_2.EventEmitter();
      this.onDragOverCallback = new core_2.EventEmitter();
      this.onDragEndCallback = new core_2.EventEmitter();
      this.onDropSuccessCallback = new core_2.EventEmitter();
      this.dropZones = this._listContainer.dropZones;
      this.dragEnabled = true;
      this.dropEnabled = true;
    }
    Object.defineProperty(ListItem.prototype, "draggable", {
      set: function(value) {
        this.dragEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ListItem.prototype, "droppable", {
      set: function(value) {
        this.dropEnabled = !!value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ListItem.prototype, "effectallowed", {
      set: function(value) {
        this.effectAllowed = value;
      },
      enumerable: true,
      configurable: true
    });
    ListItem.prototype._onDragStartCallback = function(event) {
      this._dragDropService.start(this.dragData, this.onDragSuccessCallback);
      this.onDragStartCallback.emit(this.dragData);
    };
    ListItem.prototype._onDragOverCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this.onDragOverCallback.emit(this._dragDropService.dragData);
      }
    };
    ListItem.prototype._onDragEndCallback = function(event) {
      this._dragDropService.end();
      this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    ListItem.prototype._onDragEnterCallback = function(event) {
      if (this._listContainer.isDirty) {
        return;
      }
      if (this._dragDropService.isDragged) {
        var item = this._dragDropService.dragData;
        if (item == null || item == this.dragData) {
          return;
        }
        this._listContainer.removeItem(item);
        this._listContainer.insertBefore(this.dragData, item);
      }
    };
    ListItem.prototype._onDropCallback = function(event) {
      if (this._dragDropService.isDragged) {
        this.onDropSuccessCallback.emit(this._dragDropService.dragData);
        if (this._dragDropService.onDragSuccessCallback) {
          this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
        }
        this._listContainer.detectChanges();
      }
    };
    __decorate([core_2.Input('listIndex'), __metadata('design:type', Number)], ListItem.prototype, "index", void 0);
    __decorate([core_2.Input("dragEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], ListItem.prototype, "draggable", null);
    __decorate([core_2.Input("dropEnabled"), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], ListItem.prototype, "droppable", null);
    __decorate([core_2.Input(), __metadata('design:type', Object)], ListItem.prototype, "dragData", void 0);
    __decorate([core_2.Input("effectAllowed"), __metadata('design:type', String), __metadata('design:paramtypes', [String])], ListItem.prototype, "effectallowed", null);
    __decorate([core_2.Output("onDragSuccess"), __metadata('design:type', core_2.EventEmitter)], ListItem.prototype, "onDragSuccessCallback", void 0);
    __decorate([core_2.Output("onDragStart"), __metadata('design:type', core_2.EventEmitter)], ListItem.prototype, "onDragStartCallback", void 0);
    __decorate([core_2.Output("onDragOver"), __metadata('design:type', core_2.EventEmitter)], ListItem.prototype, "onDragOverCallback", void 0);
    __decorate([core_2.Output("onDragEnd"), __metadata('design:type', core_2.EventEmitter)], ListItem.prototype, "onDragEndCallback", void 0);
    __decorate([core_2.Output("onDropSuccess"), __metadata('design:type', core_2.EventEmitter)], ListItem.prototype, "onDropSuccessCallback", void 0);
    ListItem = __decorate([core_2.Directive({selector: '[dnd-list-item]'}), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, ListContainer, core_1.ChangeDetectorRef])], ListItem);
    return ListItem;
  }(dnd_component_1.AbstractComponent));
  exports.ListItem = ListItem;
  var DragHandle = (function() {
    function DragHandle(_parent) {
      this._parent = _parent;
      _parent.dragEnabled = false;
    }
    DragHandle.prototype.onMouseEnter = function() {
      this._parent.dragEnabled = true;
    };
    DragHandle.prototype.onMouseLeave = function() {
      this._parent.dragEnabled = false;
    };
    __decorate([core_1.HostListener('mouseenter'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], DragHandle.prototype, "onMouseEnter", null);
    __decorate([core_1.HostListener('mouseleave'), __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], DragHandle.prototype, "onMouseLeave", null);
    DragHandle = __decorate([core_2.Directive({selector: '[dnd-drag-handle]'}), __metadata('design:paramtypes', [ListItem])], DragHandle);
    return DragHandle;
  }());
  exports.DragHandle = DragHandle;
  return module.exports;
});

System.registerDynamic("src/dnd.config", ["@angular/core", "./dnd.utils"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var dnd_utils_1 = $__require('./dnd.utils');
  var DataTransferEffect = (function() {
    function DataTransferEffect(name) {
      this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    DataTransferEffect = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [String])], DataTransferEffect);
    return DataTransferEffect;
  }());
  exports.DataTransferEffect = DataTransferEffect;
  var DragImage = (function() {
    function DragImage(imageElement, x_offset, y_offset) {
      if (x_offset === void 0) {
        x_offset = 0;
      }
      if (y_offset === void 0) {
        y_offset = 0;
      }
      this.imageElement = imageElement;
      this.x_offset = x_offset;
      this.y_offset = y_offset;
      if (dnd_utils_1.isString(this.imageElement)) {
        var imgScr = this.imageElement;
        this.imageElement = new HTMLImageElement();
        this.imageElement.src = imgScr;
      }
    }
    DragImage = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object, Number, Number])], DragImage);
    return DragImage;
  }());
  exports.DragImage = DragImage;
  var DragDropConfig = (function() {
    function DragDropConfig() {
      this.onDragStartClass = "dnd-drag-start";
      this.onDragEnterClass = "dnd-drag-enter";
      this.onDragOverClass = "dnd-drag-over";
      this.onSortableDragClass = "dnd-sortable-drag";
      this.dragEffect = DataTransferEffect.MOVE;
      this.dropEffect = DataTransferEffect.MOVE;
      this.dragCursor = "move";
    }
    DragDropConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropConfig);
    return DragDropConfig;
  }());
  exports.DragDropConfig = DragDropConfig;
  return module.exports;
});

System.registerDynamic("src/dnd.service", ["@angular/core", "./dnd.config", "./dnd.utils"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_utils_1 = $__require('./dnd.utils');
  var DragDropService = (function() {
    function DragDropService() {
      this.allowedDropZones = [];
    }
    DragDropService.prototype.start = function(dragData, onDragSuccessCallback) {
      if (onDragSuccessCallback === void 0) {
        onDragSuccessCallback = null;
      }
      this.dragData = dragData;
      this.depth = 0;
      this.isDragged = true;
      this.onDragSuccessCallback = onDragSuccessCallback;
    };
    DragDropService.prototype.end = function() {
      this.dragData = null;
      this.depth = 0;
      this.isDragged = false;
    };
    DragDropService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], DragDropService);
    return DragDropService;
  }());
  exports.DragDropService = DragDropService;
  var DragDropSortableService = (function() {
    function DragDropSortableService(_config) {
      this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
      get: function() {
        return this._elem;
      },
      enumerable: true,
      configurable: true
    });
    DragDropSortableService.prototype.markSortable = function(elem) {
      if (dnd_utils_1.isPresent(this._elem)) {
        this._elem.classList.remove(this._config.onSortableDragClass);
      }
      if (dnd_utils_1.isPresent(elem)) {
        this._elem = elem;
        this._elem.classList.add(this._config.onSortableDragClass);
      }
    };
    DragDropSortableService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [dnd_config_1.DragDropConfig])], DragDropSortableService);
    return DragDropSortableService;
  }());
  exports.DragDropSortableService = DragDropSortableService;
  return module.exports;
});

System.registerDynamic("src/dnd.utils", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isString(obj) {
    return typeof obj === "string";
  }
  exports.isString = isString;
  function isPresent(obj) {
    return obj !== undefined && obj !== null;
  }
  exports.isPresent = isPresent;
  function isFunction(obj) {
    return typeof obj === "function";
  }
  exports.isFunction = isFunction;
  function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
  }
  exports.createImage = createImage;
  function callFun(fun) {
    return fun();
  }
  exports.callFun = callFun;
  return module.exports;
});

System.registerDynamic("src/dnd.component", ["@angular/core", "./dnd.config", "./dnd.service", "./dnd.utils"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var core_2 = $__require('@angular/core');
  var dnd_config_1 = $__require('./dnd.config');
  var dnd_service_1 = $__require('./dnd.service');
  var dnd_utils_1 = $__require('./dnd.utils');
  var AbstractComponent = (function() {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
      var _this = this;
      this._dragDropService = _dragDropService;
      this._config = _config;
      this._cdr = _cdr;
      this._defaultCursor = "grab";
      this._dragEnabled = false;
      this.dropEnabled = false;
      this.dropZones = [];
      this._elem = elemRef.nativeElement;
      this._elem.ondragenter = function(event) {
        _this._onDragEnter(event);
      };
      this._elem.ondragover = function(event) {
        _this._onDragOver(event);
        if (event.dataTransfer != null) {
          event.dataTransfer.dropEffect = _this._config.dropEffect.name;
        }
        return false;
      };
      this._elem.ondragleave = function(event) {
        _this._onDragLeave(event);
      };
      this._elem.ondrop = function(event) {
        _this._onDrop(event);
      };
      this._elem.ondragstart = function(event) {
        console.log('ondragstart', event.target);
        _this._onDragStart(event);
        if (event.dataTransfer != null) {
          event.dataTransfer.setData('text', '');
          event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
          if (dnd_utils_1.isPresent(_this.dragImage)) {
            if (dnd_utils_1.isString(_this.dragImage)) {
              event.dataTransfer.setDragImage(dnd_utils_1.createImage(_this.dragImage));
            } else if (dnd_utils_1.isFunction(_this.dragImage)) {
              event.dataTransfer.setDragImage(dnd_utils_1.callFun(_this.dragImage));
            } else {
              var img = _this.dragImage;
              event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
            }
          } else if (dnd_utils_1.isPresent(_this._config.dragImage)) {
            var dragImage = _this._config.dragImage;
            event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
          }
          _this._elem.classList.add(_this._config.onDragStartClass);
        }
      };
      this._elem.ondragend = function(event) {
        console.log('ondragend', event.target);
        _this._onDragEnd(event);
        _this._elem.classList.remove(_this._config.onDragStartClass);
      };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
      get: function() {
        return this._dragEnabled;
      },
      set: function(enabled) {
        this._dragEnabled = !!enabled;
        this._elem.draggable = this._dragEnabled;
      },
      enumerable: true,
      configurable: true
    });
    AbstractComponent.prototype.detectChanges = function() {
      var _this = this;
      setTimeout(function() {
        _this._cdr.detectChanges();
      }, 250);
    };
    AbstractComponent.prototype._onDragEnter = function(event) {
      if (this._isDropAllowed) {
        this._onDragEnterCallback(event);
      }
    };
    AbstractComponent.prototype._onDragOver = function(event) {
      if (this._isDropAllowed) {
        if (event.preventDefault) {
          event.preventDefault();
        }
        this._onDragOverCallback(event);
      }
    };
    AbstractComponent.prototype._onDragLeave = function(event) {
      if (this._isDropAllowed) {
        this._onDragLeaveCallback(event);
      }
    };
    AbstractComponent.prototype._onDrop = function(event) {
      if (this._isDropAllowed) {
        if (event.preventDefault) {
          event.preventDefault();
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        }
        this._onDropCallback(event);
        this.detectChanges();
      }
    };
    Object.defineProperty(AbstractComponent.prototype, "_isDropAllowed", {
      get: function() {
        if (this._dragDropService.isDragged && this.dropEnabled) {
          if (this.allowDrop) {
            return this.allowDrop(this._dragDropService.dragData);
          }
          if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
            return true;
          }
          for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
            var dragZone = this._dragDropService.allowedDropZones[i];
            if (this.dropZones.indexOf(dragZone) !== -1) {
              return true;
            }
          }
        }
        return false;
      },
      enumerable: true,
      configurable: true
    });
    AbstractComponent.prototype._onDragStart = function(event) {
      if (this._dragEnabled) {
        this._dragDropService.allowedDropZones = this.dropZones;
        this._onDragStartCallback(event);
      }
    };
    AbstractComponent.prototype._onDragEnd = function(event) {
      this._dragDropService.allowedDropZones = [];
      this._onDragEndCallback(event);
    };
    AbstractComponent.prototype._onDragEnterCallback = function(event) {};
    AbstractComponent.prototype._onDragOverCallback = function(event) {};
    AbstractComponent.prototype._onDragLeaveCallback = function(event) {};
    AbstractComponent.prototype._onDropCallback = function(event) {};
    AbstractComponent.prototype._onDragStartCallback = function(event) {};
    AbstractComponent.prototype._onDragEndCallback = function(event) {};
    AbstractComponent = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef])], AbstractComponent);
    return AbstractComponent;
  }());
  exports.AbstractComponent = AbstractComponent;
  return module.exports;
});

System.registerDynamic("ng2-dnd", ["./src/dnd.config", "./src/dnd.service", "./src/dnd.draggable", "./src/dnd.droppable", "./src/dnd.sortable", "./src/dnd.list", "./src/dnd.component"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var dnd_config_1 = $__require('./src/dnd.config');
  var dnd_service_1 = $__require('./src/dnd.service');
  var dnd_draggable_1 = $__require('./src/dnd.draggable');
  var dnd_droppable_1 = $__require('./src/dnd.droppable');
  var dnd_sortable_1 = $__require('./src/dnd.sortable');
  var dnd_list_1 = $__require('./src/dnd.list');
  __export($__require('./src/dnd.component'));
  __export($__require('./src/dnd.config'));
  __export($__require('./src/dnd.service'));
  __export($__require('./src/dnd.draggable'));
  __export($__require('./src/dnd.droppable'));
  __export($__require('./src/dnd.sortable'));
  __export($__require('./src/dnd.list'));
  exports.DND_PROVIDERS = [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService];
  exports.DND_DIRECTIVES = [dnd_draggable_1.DraggableComponent, dnd_droppable_1.DroppableComponent, dnd_sortable_1.SortableContainer, dnd_sortable_1.SortableComponent, dnd_list_1.DragHandle, dnd_list_1.ListContainer, dnd_list_1.ListItem];
  return module.exports;
});
