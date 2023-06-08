import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule,Route} from '@angular/router';

//import {HomeComponent} from './components/home/home.component';
import{LoginComponent} from './components/login/login.component';
//import{ErrorComponent} from './components/error/error.component';
import { RegistroComponent } from "./components/registro/registro.component";

const appRoutes:Routes=[
   // {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    
    //{path:'**',component:ErrorComponent}
];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);