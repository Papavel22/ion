import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Beast } from '../../types/types';


@Component({
    selector: 'app-v-comp',
    templateUrl: 'v.component.html',
    styleUrls: ['v.component.scss']
})
export class VComponent {
    @Input () beasts: Beast.IBeast[];
    @Output () outName: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    public setOutName() {
        this.outName.emit(this.beasts.map(({ name }) => name).join(', '));
    }
}
