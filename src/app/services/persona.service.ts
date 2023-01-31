import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL=enviroment.servidor;
  
  constructor(private httpClient : HttpClient) { }
  
  registrarCliente(): Observable<Object>{
    return this.httpClient.get(`${this.baseURL+"api/api"}`);
  }


}
