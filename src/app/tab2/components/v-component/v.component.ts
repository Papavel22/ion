import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-v-comp',
    templateUrl: 'v.component.html',
    styleUrls: ['v.component.scss']
})
export class VComponent {
    @Input () beasts: any[];
    @Output () outName: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    public setOutName() {
        this.outName.emit(this.beasts.map(({ name }) => name).join(', '));
    }
}
