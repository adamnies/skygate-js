import {PreviewComponent} from './preview.component';
import {FormControl} from '../data-model';

class FormBuilderServiceMock {
    store = {};

    importFromLocalStorage(key: string) {
        return this.store[key];
    }

    exportToLocalStorage(key: string, value: any) {
        this.store[key] = value;
    }
}

describe('PreviewComponent', () => {
    let service;
    let component;

    beforeEach(() => {
        service = new FormBuilderServiceMock();
        component = new PreviewComponent(service);
    });

    it('should get controlsArray from service', () => {
        const data: FormControl = {
            value: 'a',
            question: 'b',
            questionType: 'd'
        };
        const array = [data, data];

        service.store['controlsArray'] = array;
        component.ngOnInit();
        expect(component.controlsArray === array).toBeTruthy();
    });

    it('should export controlsArray to Service', () => {
        const data: FormControl = {
            value: 'a',
            question: 'b',
            questionType: 'd'
        };
        const array = [data, data];
        component.controlsArray = array;
        component.ngOnChanges();
        expect(service.store['controlsArray'] === array).toBeTruthy();
    });
});
