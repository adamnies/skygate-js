import {ExportComponent} from './export.component';
import {FormBuilderService} from '../form-builder.service';

class MockedFormBuilderService {
    importFromLocalStorage() {
        return ['first', 'second'];
    }

    exportToLocalStorage(data) {

    }
}


describe('ExportComponent', () => {
    let component: ExportComponent;
    let service: MockedFormBuilderService;

    beforeEach(() => {
        service = new MockedFormBuilderService();
        component = new ExportComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
