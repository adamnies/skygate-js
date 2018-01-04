import {Component, OnInit} from '@angular/core';
import {FormControl} from '../data-model';
import {FormBuilderService} from '../form-builder.service';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

    controlsArray: FormControl[] = [];

    constructor(private formBuilderService: FormBuilderService) {
    }

    ngOnInit() {
        this.controlsArray = this.formBuilderService.importFromLocalStorage();
    }

}
