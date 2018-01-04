import {FormBuilderService} from './form-builder.service';

describe('FormBuilderService', () => {
    let service: FormBuilderService;

    beforeEach(() => {
        service = new FormBuilderService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('email');
    });

    it('should return \'aniestoj@gmail.com\' for \'email\'', () => {
        localStorage.setItem('email', JSON.stringify('aniestoj@gmail.com'));
        expect(service.importFromLocalStorage('email')).toBe('aniestoj@gmail.com');
    });


    it('should set \'aniestoj@gmail.com\' for key=\'email\', value=\'aniestoj@gmail.com\'', () => {
        service.exportToLocalStorage('email', 'aniestoj@gmail.com');
        expect(JSON.parse(localStorage.getItem('email'))).toBe('aniestoj@gmail.com');
    });


})
;
