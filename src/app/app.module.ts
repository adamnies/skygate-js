import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './create/form/form.component';
import {CreateComponent} from './create/create.component';
import {PreviewComponent} from './preview/preview.component';
import {ExportComponent} from './export/export.component';
import {FormBuilderService} from './form-builder.service';
import { FormPreviewComponent } from './preview/form-preview/form-preview.component';


@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        CreateComponent,
        PreviewComponent,
        ExportComponent,
        FormPreviewComponent
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
