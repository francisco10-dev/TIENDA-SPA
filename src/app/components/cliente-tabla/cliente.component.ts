import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../services/cliente.service';
import { timer } from 'rxjs';
import { server } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService]
})
export class ClienteComponent {
  cliente: any;
  public clientes:Array<Cliente>;
  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.clientes=[];
    this.cliente = new Cliente("504460214", "Hola", new Date("2002-10-10"), "Jordy@gmail");
    this.getAll();
  }

  getAll(){
    this._clienteService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.clientes=response.data;
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }
}

