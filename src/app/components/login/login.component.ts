//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { timer } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {
  mostrarContrasena: boolean = false;
  public status:number;
  public user:Usuario;
  constructor(
    private _usuarioService:UsuarioService,
    private _router:Router,
    private _routes:ActivatedRoute
  ){
    this.status=-1;
    this.user=new Usuario(1,"","","",1,1);

  }
  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  
  onSubmit(form:any){
    this._usuarioService.login(this.user).subscribe({
      next:(response:any)=>{        
        if(response.status!=401){
          //console.log(response);
          localStorage.setItem("token",response);
          this._usuarioService.getIdentityFromAPI().subscribe({
            next:(response:any)=>{              
              localStorage.setItem("identity",JSON.stringify(response));
            },
            error:(err:Error)=>{

            }
          });
          this._router.navigate(['']);

        }else{
          this.status=0;
          let counter=timer(3000);
          counter.subscribe(n=>{
            this.status=-1;
          });
          console.log("Usuario o contraseña incorrectos");
        }
      },
      error:(err:Error)=>{
        console.log(err);
      }
    });
  }
 
}
