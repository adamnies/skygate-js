import {CreateComponent} from './create.component';
import {PreviewComponent} from '../preview/preview.component';
import {FormControl, QUESTION_TYPES} from '../data-model';
import {Form} from '@angular/forms';

class FormBuilderServiceMock {
    store = {};

    importFromLocalStorage(key: string) {
        return this.store[key];
    }

    exportToLocalStorage(key: string, value: any) {
        this.store[key] = value;
    }
}

describe('CreateComponent', () => {
    let service;
    let component;

    beforeEach(() => {
        service = new FormBuilderServiceMock();
        component = new CreateComponent(service);
    });

    it('should increase length of FormControlsArray', () => {
        component.addFormControlToArray(component.controlsArray);
        expect(component.controlsArray.length).toBe(1);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
