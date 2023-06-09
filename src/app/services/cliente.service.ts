import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Observable} from 'rxjs';
import{server} from './global';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
}) export class ClienteService{
    private url:string;
    constructor(public _http:HttpClient){
        this.url=server.url;
    }
    getAll():Observable<any>{
        let header=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'cliente',{headers:header});
    }

}