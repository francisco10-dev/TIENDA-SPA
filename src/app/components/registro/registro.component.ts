//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Usuario } from 'src/app/models/usuario';
import{ UsuarioService } from '../../services/usuario.service';
import{timer} from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
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
export class RegistroComponent{
    public usuario:Usuario;
    public status:number;
    constructor(
      private _usuarioService:UsuarioService
    ){
      this.usuario=new Usuario(1,"","","rol",1,1);
      this.status=-1;
    }
    onSubmit(form:any){
      console.log(this.usuario);
      let counter= timer(3000);
      this._usuarioService.register(this.usuario).subscribe({
        next:(response:any)=>{
          this.status=0;
          
          counter.subscribe(
            n=>{
              this.status=-1;
            }
          );
          console.log(response);
          form.reset();
        },
        error:(err:Error)=>{
          this.status=2;       
          counter.subscribe(
            n=>{
              this.status=-1;
            });
          console.log(err);
        }
      });
    }
  
  }
  


