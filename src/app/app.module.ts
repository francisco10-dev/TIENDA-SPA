import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing'; // Importa tu archivo personalizado
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EnvioComponent } from './components/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente-tabla/cliente.component';
import { ConfirmDialogComponent } from './components/confirm-component/confirm-dialog-component.component';
import { EnvioRegistroComponent } from './components/envio-registro/envio-registro.component';
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    EmpleadoComponent,
    EnvioComponent,
    ClienteComponent,
    ConfirmDialogComponent,
    EnvioRegistroComponent,
    ClienteRegistroComponent,
    ClienteActualizarComponent,
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
