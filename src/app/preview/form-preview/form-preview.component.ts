import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../../form-builder.service';
import {CONDITION_TYPES, FormControl, QUESTION_TYPES} from '../../data-model';

@Component({
    selector: 'app-form-preview',
    templateUrl: './form-preview.component.html',
    styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent {
    @Input() controlsArray: FormControl[] = [];
    @Input() parentValue: any = '';
    @Input() parentQuestionType = '';
    @Input() inputsLevel: String;

    conditionTypes = CONDITION_TYPES;

    constructor() {
    }

    checkCondition(control): Boolean {
        if (this.parentValue == '' && this.parentQuestionType == '') {
            return true;
        }
        if (this.parentQuestionType === QUESTION_TYPES[0]) {
            return (this.parentValue === control.conditionValue);
        }
        if (this.parentQuestionType === QUESTION_TYPES[1]) {
            return (this.parentValue === control.conditionValue);
        }
        if (this.parentQuestionType === QUESTION_TYPES[2]) {
            if (control.conditionType === this.conditionTypes[0]) {
                return (this.parentValue == control.conditionValue);
            }
            if (control.conditionType === this.conditionTypes[1]) {
                return (this.parentValue > control.conditionValue);
            }
            if (control.conditionType === this.conditionTypes[2]) {
                return (this.parentValue < control.conditionValue);
            }
        }
    }
}
