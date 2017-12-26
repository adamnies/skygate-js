import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../../form-builder.service';
import {FormControl} from '../../data-model';

@Component({
    selector: 'app-form-preview',
    templateUrl: './form-preview.component.html',
    styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent {
    @Input() controlsArray: FormControl[] = [];
    @Input() parentValue;
    @Input() parentQuestionType;
    @Input() inputsLevel = 0;

    questionTypes = ['Yes/No', 'Text', 'Number'];
    conditionTypes = ['Equals', 'Greater', 'Less'];

    constructor(private formBuilderService: FormBuilderService) {
    }

    checkCondition(control): Boolean {
        if (this.parentQuestionType === this.questionTypes[0]) {
            return (this.parentValue === control.conditionValue);
        }
        if (this.parentQuestionType === this.questionTypes[1]) {
            return (this.parentValue === control.conditionValue);
        }
        if (this.parentQuestionType === this.questionTypes[2]) {
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