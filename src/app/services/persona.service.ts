import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../class/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL="";
  
  constructor(private httpClient : HttpClient) { }
  
  registrarCliente(persona:Persona): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/addPersona"}`,persona);
  }


}
