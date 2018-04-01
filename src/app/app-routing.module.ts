import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVehiculeComponent} from './create-vehicule/create-vehicule.component';
import { ListVehiculeComponent} from './list-vehicule/list-vehicule.component';
import { DetailVehiculeComponent } from './detail-vehicule/detail-vehicule.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'create', component: CreateVehiculeComponent },
    { path: 'list', component: ListVehiculeComponent},
    { path: 'edit/:id', component: CreateVehiculeComponent},
    { path: 'detail/:id', component: DetailVehiculeComponent},
    { path: 'delete/:id', component: DeleteDialogComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot (routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
