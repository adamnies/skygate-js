import {Component, Input} from '@angular/core';
import {CONDITION_TYPES, FormControl, QUESTION_TYPES} from '../../data-model';

@Component({
    selector: 'app-input-creator',
    templateUrl: './input-creator.component.html',
    styleUrls: ['./input-creator.component.css']
})
export class InputCreatorComponent {
    @Input() controlsArray: FormControl[] = [];
    @Input() parentQuestionType = '';

    questionTypes = QUESTION_TYPES;
    conditionTypes = CONDITION_TYPES;

    constructor() {
    }

    changeControlSubinputs(controlsArray, index) {
        for (const control of controlsArray[index].subinputs) {
            control.conditionValue = '';
        }
    }

    addSubInputToArray(controlsArray, index) {
        const subinput = {
            value: '',
            question: '',
            questionType: this.questionTypes[0],
            conditionType: this.conditionTypes[0],
            conditionValue: 'Yes',
            subinputs: []
        };
        controlsArray[index].subinputs.push(subinput);
    }

    removeInputFromArray(controlsArray, index) {
        controlsArray.splice(index, 1);
    }

}
