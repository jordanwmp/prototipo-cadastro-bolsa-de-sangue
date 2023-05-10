import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ListaHemocomponentesComponent } from './lista-hemocomponentes/lista-hemocomponentes.component';
import { SelectHospitalComponent } from './select-hospital/select-hospital.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditHemocomponentComponent } from './edit-hemocomponent/edit-hemocomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListaHemocomponentesComponent,
    SelectHospitalComponent,
    NavbarComponent,
    EditHemocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
