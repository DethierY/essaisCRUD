
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VehiculeService} from './vehicule.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { CreateVehiculeComponent } from './create-vehicule/create-vehicule.component';
import { DetailVehiculeComponent } from './detail-vehicule/detail-vehicule.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CreateVehiculeComponent,
    ListVehiculeComponent,
    DetailVehiculeComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  providers: [VehiculeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
