import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../form-builder.service';
import {FormControl} from '../data-model';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy, OnChanges {
    @Input() controlsArray: FormControl[] = [];

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
}
