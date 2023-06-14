import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EnvioComponent } from './components/envio/envio-tabla/envio.component';
import { ClienteComponent } from './components/cliente/cliente-tabla/cliente.component';
import { ClienteRegistroComponent } from './components/cliente/cliente-registro/cliente-registro.component';
import { ClienteActualizarComponent } from './components/cliente/cliente-actualizar/cliente-actualizar.component';
import { EnvioRegistroComponent } from './components/envio/envio-registro/envio-registro.component';
import { EnvioActualizarComponent } from './components/envio/envio-actualizar/envio-actualizar.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent },
    {path: 'empleado',component:EmpleadoComponent},
    {path: 'envio',component:EnvioComponent},
    {path: 'cliente',component:ClienteComponent},
    { path: 'cliente-registro', component: ClienteRegistroComponent }, 
    { path: 'cliente-actualizar/:cedula', component: ClienteActualizarComponent },
    {path: 'envio-registro', component:EnvioRegistroComponent},
    {path: 'envio-actualizar/:idEnvio', component:EnvioActualizarComponent},
    { path: '**', redirectTo: '/login' } // Asegúrate de agregar el '/' antes de 'login'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
