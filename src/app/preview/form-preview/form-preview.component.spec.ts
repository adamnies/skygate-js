import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormPreviewComponent} from './form-preview.component';
import {FormsModule} from '@angular/forms';
import {FormBuilderService} from '../../form-builder.service';

describe('FormPreviewComponent', () => {
    let component: FormPreviewComponent;
    let fixture: ComponentFixture<FormPreviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [FormPreviewComponent],
            providers: [FormBuilderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormPreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
