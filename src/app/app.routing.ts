import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< Updated upstream
import { EnvioComponent } from './components/envio/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente/cliente-tabla/cliente.component';
=======
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EnvioComponent } from './components/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente-tabla/cliente.component';
>>>>>>> Stashed changes
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';
import { EnvioRegistroComponent } from './components/envio/envio-registro/envio-registro.component';
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

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent },
<<<<<<< Updated upstream
    { path: 'envio',component:EnvioComponent},
    { path: 'cliente',component:ClienteComponent},
    { path: 'empleado',component:EmpleadoTablaComponent},
    { path: 'empleado-registro',component:EmpleadoRegistroComponent},
    { path: 'empleado-actualizar/:idEmpleado',component:EmpleadoActualizarComponent},
=======
    { path: 'acercade', component: AcercadeComponent },
    { path: 'contactos', component: ContactosComponent },
    {path: 'empleado',component:EmpleadoComponent},
    {path: 'envio',component:EnvioComponent},
    {path: 'cliente',component:ClienteComponent},
>>>>>>> Stashed changes
    { path: 'cliente-registro', component: ClienteRegistroComponent }, 
    { path: 'cliente-actualizar/:cedula', component: ClienteActualizarComponent },
    { path: 'envio-registro', component:EnvioRegistroComponent},
    { path: 'envio-actualizar/:idEnvio', component:EnvioActualizarComponent},
    { path: 'proveedor',component:TablaProveedorComponent},
    { path: 'proveedor-registro',component:ProveedorRegistroComponent},
    { path: 'proveedor-actualizar/:idProveedor',component:ProveedorActualizarComponent},
    { path: 'categoria',component:CategoriaTablaComponent},
    { path: 'categoria-registro',component:CategoriaRegistroComponent},
    { path: 'categoria-actualizar/:idCategoria',component:CategoriaActualizarComponent},

    
    { path: '**', redirectTo: '/login' } // Asegúrate de agregar el '/' antes de 'login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
