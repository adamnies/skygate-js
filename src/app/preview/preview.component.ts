import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormBuilderService} from '../form-builder.service';
import {FormControl} from '../data-model';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnChanges, OnDestroy {
    @Input() controlsArray: FormControl[] = [];

    constructor(private formBuilderService: FormBuilderService) {
    }

    ngOnInit() {
        this.controlsArray = this.formBuilderService.importFromLocalStorage('controlsArray');
    }

    ngOnChanges() {
        this.formBuilderService.exportToLocalStorage('controlsArray', this.controlsArray);
    }

    ngOnDestroy() {
        this.formBuilderService.exportToLocalStorage('controlsArray', this.controlsArray);
    }
}
