import {Injectable} from '@angular/core';
import {FormControl} from './data-model';

@Injectable()
export class FormBuilderService {
    constructor() {
    }

    importFromLocalStorage(key: string) {
        const value = localStorage.getItem(key);
        return value != null ? JSON.parse(value) : [];
    }

    exportToLocalStorage(key: string, value: any) {
        if (key != null && value != null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
