import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../form-builder.service';
import {FormControl} from '../data-model';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy, OnChanges {

    questionTypes = ['Yes/No', 'Text', 'Number'];

    controlsArray: FormControl[] = [];

    constructor(private formBuilderService: FormBuilderService) {
    }

    ngOnInit() {
        this.controlsArray = this.formBuilderService.controlsArray;
        const x = this.formBuilderService.importFromLocalStorage();
        this.controlsArray = x;
    }

    ngOnDestroy() {
        this.formBuilderService.controlsArray = this.controlsArray;
        this.formBuilderService.exportToLocalStorage(this.controlsArray);
    }

    ngOnChanges() {
        this.formBuilderService.exportToLocalStorage(this.controlsArray);
    }

    changeSubinputs(index) {
        for (const a of this.controlsArray[index].subinputs) {
            a.conditionValue = '';
        }
    }

    addInput() {
        const x = {
            value: '',
            question: '',
            questionType: this.questionTypes[0],
            subinputs: []
        };
        this.controlsArray.push(x);
    }

    addSubInput(index) {
        const x = {
            value: '',
            question: '',
            questionType: this.questionTypes[0],
            conditionType: 'Equals',
            conditionValue: 'Yes',
            subinputs: []
        };
        this.controlsArray[index].subinputs.push(x);
    }

    removeInput(index) {
        this.controlsArray.splice(index, 1);
    }
}
