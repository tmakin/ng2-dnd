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

    private snippets:any[];

    private listData:string[]  = [];
    private listData2:string[] = [];

    constructor() {
        this.snippets = App.buildSnippets();

    }


    private static buildSnippets() {

        let snippets:any[] = [];

        App.SNIPPET_DATA.forEach(function(value) {
            snippets.push({
                data: value
            });
        });

        return snippets;
    }

    dropSnippet(event:any) {
        console.log("dropped data");
        //this.dropped.push(event.dragData);
    }

    dropSnippet2(event:any) {
        console.log("dropped data2");
        //this.listData.push(event.dragData);
    }

    static SNIPPET_DATA:string[] = [
        "dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis",
        "ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam",
        "dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor",
        "quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec",
        "Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non",
        "in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit",
        "neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et",
        "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate",
        "nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum",
        "commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus",
        "scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut",
        "euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec",
    ]
}
