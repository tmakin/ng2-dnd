import {Component} from '@angular/core';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {DND_DIRECTIVES} from '../../ng2-dnd';

import './app.scss';

@Component({
    selector: 'aa-app',
    providers: [],
    pipes: [],
    directives: [DND_DIRECTIVES],
    templateUrl: 'app/app.html',
})
export class App {

    private snippets:string[];

    private dropped:string[];
    private sortableData:string[];

    constructor() {
        this.snippets = this.getSnippets();
        this.dropped = [];
        this.sortableData = [];
    }


    getSnippets() {
        var result:any[] = [];

        for(var i = 0 ; i < 10; i++) {
            result.push("Snippet " +i);
        }

        return result;
    }

    dropSnippet(event:any) {
        console.log("dropped data");
        this.dropped.push(event.dragData);
    }

    dropSnippet2(event:any) {
        console.log("dropped data2");
        this.sortableData.push(event.dragData);
    }
}
