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
import { RouterModule } from '@angular/router';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing'; // Importa tu archivo personalizado
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { EnvioComponent } from './components/envio/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente/cliente-tabla/cliente.component';
import { EnvioRegistroComponent } from './components/envio/envio-registro/envio-registro.component';
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';
import { EnvioActualizarComponent } from './components/envio/envio-actualizar/envio-actualizar.component';
import { EmpleadoTablaComponent } from './components/empleado/empleado-tabla/empleado-tabla.component';
import { EmpleadoRegistroComponent } from './components/empleado/empleado-registro/empleado-registro.component';
import { EmpleadoActualizarComponent } from './components/empleado/empleado-actualizar/empleado-actualizar.component';
import { TablaProveedorComponent } from './components/proveedor/tabla-proveedor/tabla-proveedor.component';
import { ProveedorRegistroComponent } from './components/proveedor/proveedor-registro/proveedor-registro.component';
import { ProveedorActualizarComponent } from './components/proveedor/proveedor-actualizar/proveedor-actualizar.component';
import { CategoriaTablaComponent } from './components/categoria/categoria-tabla/categoria-tabla.component';
import { CategoriaRegistroComponent } from './components/categoria/categoria-registro/categoria-registro.component';
import { CategoriaActualizarComponent } from './components/categoria/categoria-actualizar/categoria-actualizar.component';
import { BotComponent } from './components/chatBot/bot/bot.component';
import { SearchPipe } from './components/filter/search.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { VehiculoTablaComponent } from './components/vehiculo/vehiculo-tabla/vehiculo-tabla.component';
import { VehiculoRegistroComponent } from './components/vehiculo/vehiculo-registro/vehiculo-registro.component';
import { VehiculoActualizarComponent } from './components/vehiculo/vehiculo-actualizar/vehiculo-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    EnvioComponent,
    ClienteComponent,
    EnvioRegistroComponent,
    ClienteRegistroComponent,
    ClienteActualizarComponent,
    EnvioActualizarComponent,
    EmpleadoTablaComponent,
    EmpleadoRegistroComponent,
    EmpleadoActualizarComponent,
    TablaProveedorComponent,
    ProveedorRegistroComponent,
    ProveedorActualizarComponent,
    CategoriaTablaComponent,
    CategoriaRegistroComponent,
    CategoriaActualizarComponent,
    BotComponent,
    SearchPipe,
    FilterComponent,
    VehiculoTablaComponent,
    VehiculoRegistroComponent,
    VehiculoActualizarComponent,
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
    MatNativeDateModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
