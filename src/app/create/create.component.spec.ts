import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateComponent} from './create.component';
import {FormsModule} from '@angular/forms';
import {InputCreatorComponent} from './input-creator/input-creator.component';
import {FormBuilderService} from '../form-builder.service';

describe('CreateComponent', () => {
    let component: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [CreateComponent, InputCreatorComponent],
            providers: [FormBuilderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
