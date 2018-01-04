import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';
import {CreateComponent} from './create/create.component';
import {PreviewComponent} from './preview/preview.component';
import {ExportComponent} from './export/export.component';
import {FormBuilderService} from './form-builder.service';
import {FormPreviewComponent} from './preview/form-preview/form-preview.component';
import {InputCreatorComponent} from './create/input-creator/input-creator.component';


@NgModule({
    declarations: [
        AppComponent,
        CreateComponent,
        PreviewComponent,
        ExportComponent,
        FormPreviewComponent,
        InputCreatorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [FormBuilderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
