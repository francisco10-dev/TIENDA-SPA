import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvioService } from 'src/app/services/envio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Envio } from 'src/app/models/envio';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnvioRegistroComponent } from '../envio-registro/envio-registro.component';
import Swal from 'sweetalert2';
import { FilterComponent } from '../../filter/filter.component';


@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent extends FilterComponent implements OnInit {
  envios: any[] = [];
  public envio:Envio;
  public modalAbierto: boolean = false;

  constructor(
    private _envioService:EnvioService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){
    super();
    this.envio=new Envio(1,'',4,1);
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._envioService.getAll().subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.envios = response.data.map((envio: any) => {
            return {
              ...envio,
              chofer: envio.chofer.nombre
            };
          });
        }
      },
      error:(err:Error)=>{
        console.log(err.message);
      }
    })
  }

  eliminarEnvio(envioId: number){
    this._envioService.delete(envioId).subscribe({
      next:(response:any)=>{
        if(response.status==200){
          this.getAll();
          Swal.fire('¡Registro eliminado!', 'Envío eliminado correctamente!', 'success');
        }
      },
      error:(err:Error)=>{
        console.error('Error al eliminar el envío:', err);
        Swal.fire('¡Error!', 'Error al eliminar el envío!', 'error');
      }
    })
  }

  confirmarEliminacion(envioId: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // La confirmación de eliminación fue aceptada
        this.eliminarEnvio(envioId);
      }
    });
  }

}
