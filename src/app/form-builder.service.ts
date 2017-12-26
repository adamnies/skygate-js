import {Injectable} from '@angular/core';
import {FormControl} from './data-model';

@Injectable()
export class FormBuilderService {
    controlsArray: FormControl[] = [];

    constructor() {
    }

    importFromLocalStorage() {
        const x = localStorage.getItem('controlsArray');
        const y = JSON.parse(x);
        return y != null ? y : [];
    }

    exportToLocalStorage(controlsArray) {
        if (controlsArray != null) {
            localStorage.setItem('controlsArray', JSON.stringify(controlsArray));
        }
    }
}
