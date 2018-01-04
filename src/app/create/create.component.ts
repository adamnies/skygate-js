import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../form-builder.service';
import {FormControl, QUESTION_TYPES} from '../data-model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnChanges {

    controlsArray: FormControl[] = [];

    constructor(private formBuilderService: FormBuilderService) {
    }

    ngOnInit() {
        this.controlsArray = this.formBuilderService.importFromLocalStorage();
    }

    ngOnChanges() {
        this.formBuilderService.exportToLocalStorage(this.controlsArray);
    }

    addFormControlToArray(controlsArray) {
        const formControl = {
            value: '',
            question: '',
            questionType: QUESTION_TYPES[0],
            subinputs: []
        };
        controlsArray.push(formControl);
    }
}
