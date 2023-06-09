import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../services/cliente.service';
import { HttpErrorResponse } from '@angular/common/http';
import { timer } from 'rxjs';
import { server } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: any;
  clientes: Cliente[] = [];

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.cliente = new Cliente("504460214", "Hola", new Date("2002-10-10"), "Jordy@gmail");
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this._clienteService.getAll().subscribe(
      (response: any) => {
        if (response.status === 200) {
          console.log(response.data);
          this.clientes = response.data;
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los clientes:', error);
        this.clientes = [];
      }
    );
  }
}

