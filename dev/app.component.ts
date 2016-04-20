import {Component} from 'angular2/core';
import {ImageComponent} from '../app/image.component';

@Component({
    selector: 'my-app',
    template: `
        <h2>Let's show an image</h2>
        <p>This is a simple demo angular 2 app</p>
        <my-image></my-image>
    `,
    directives: [ImageComponent]
})
export class AppComponent {

}
