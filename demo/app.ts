import {bootstrap} from '@angular/platform-browser-dynamic';
import {DND_PROVIDERS} from '../ng2-dnd';
import {App} from './app/app';
import './main.scss';


// enableProdMode()

bootstrap(App, [
    DND_PROVIDERS
])
.catch((err:any) => console.error(err));
