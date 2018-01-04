import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormPreviewComponent} from './form-preview.component';
import {FormsModule} from '@angular/forms';
import {FormBuilderService} from '../../form-builder.service';
import {CONDITION_TYPES, QUESTION_TYPES} from '../../data-model';

describe('FormPreviewComponent', () => {
    const component = new FormPreviewComponent();

    it('should return true', () => {
        component.parentQuestionType = QUESTION_TYPES[0];
        component.parentValue = 'Yes';
        const control = {
            value: 'Yes',
            question: '',
            questionType: QUESTION_TYPES[0],
            conditionType: CONDITION_TYPES[0],
            conditionValue: 'Yes',
            subinputs: []
        };
        expect(component.checkCondition(control)).toBeTruthy();
    });

    it('should return false', () => {
        component.parentQuestionType = QUESTION_TYPES[0];
        component.parentValue = 'No';
        const control = {
            value: 'Yes',
            question: '',
            questionType: QUESTION_TYPES[0],
            conditionType: CONDITION_TYPES[0],
            conditionValue: 'Yes',
            subinputs: []
        };
        expect(component.checkCondition(control)).toBeFalsy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
