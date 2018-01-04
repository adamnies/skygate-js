import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {PreviewComponent} from './preview/preview.component';
import {ExportComponent} from './export/export.component';

const routes: Routes = [
    {path: 'create', component: CreateComponent},
    {path: 'preview', component: PreviewComponent},
    {path: 'export', component: ExportComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
