import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '../../data-model';
import {FormBuilderService} from '../../form-builder.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @Input() controlsArray: FormControl[] = [];
    @Input() parentQuestionType = '';

    questionTypes = ['Yes/No', 'Text', 'Number'];
    conditionTypes = ['Equals', 'Greater', 'Less'];

    constructor(private formBuilderService: FormBuilderService) {
    }

    ngOnInit() {
    }

    changeSubinputs(index) {
        for (const a of this.controlsArray[index].subinputs) {
            a.conditionValue = '';
        }
    }
    addSubInput(index) {
        const x = {
            value: '',
            question: '',
            questionType: this.questionTypes[0],
            conditionType: this.conditionTypes[0],
            conditionValue: 'Yes',
            subinputs: []
        };
        this.controlsArray[index].subinputs.push(x);
    }

    removeInput(index) {
        console.log(this.controlsArray);
        console.log(index);
        this.controlsArray.splice(index, 1);
    }
}
