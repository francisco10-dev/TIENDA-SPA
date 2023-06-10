import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import{ ClienteService } from '../../../services/cliente.service';
import{timer} from'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css'],
})
export class ClienteRegistroComponent {
  public cliente:Cliente;
  public status:number;
  public fechaFormateada:any;
  constructor(
    private _clienteService:ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.cliente = new Cliente("504460214", "Hola", new Date("2002-10-10"), "Jordy@gmail");
    this.status=-1;
  }
  onSubmit(form:any){
    console.log(this.cliente);
    let counter= timer(3000);
    this.fechaFormateada = this.cliente.fechaNac.toISOString().split('T')[0];//cambiar formato de la fecha que da el componente DatePicker
    this.cliente.fechaNac = this.fechaFormateada;
    this._clienteService.register(this.cliente).subscribe({
      next:(response:any)=>{
        this.status=0;
        counter.subscribe(
          n=>{
            this.status=-1;
            console.log(response);
          }
        );
        form.reset();
        this.mainTable();
      },
      error:(err:Error)=>{
        this.status=2;       
        counter.subscribe(
          n=>{
            this.status=-1;
            console.log(err);
          });
          form.reset();
          this.mainTable();
        }
    });
  }

  mainTable(){
    setTimeout(() => {
      this._router.navigate(['/cliente']);
    }, 2000);
  }
}
