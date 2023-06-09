import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  envios: any[] = [];
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/envio').subscribe(
      (response) => {
        this.envios = response.data;
        console.log(this.envios);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
