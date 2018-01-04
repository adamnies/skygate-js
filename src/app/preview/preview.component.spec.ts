import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewComponent} from './preview.component';
import {FormsModule} from '@angular/forms';
import {FormBuilderService} from '../form-builder.service';
import {FormPreviewComponent} from './form-preview/form-preview.component';

describe('PreviewComponent', () => {
    let component: PreviewComponent;
    let fixture: ComponentFixture<PreviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PreviewComponent, FormPreviewComponent],
            providers: [FormBuilderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
