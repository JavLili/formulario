import { Component, OnInit } from '@angular/core';
import { Persona } from '../../class/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  form: FormGroup

  nombre1:string="";
  nombre2:string="";
  apellido1:string="";
  apellido2: string="";
  persona : Persona = new Persona();
  constructor(private personaService : PersonaService, private fb: FormBuilder){
    this.form 
  }
  ngOnInit(): void {
    this.form = this.initForm();
  }
  onSubmit(){
    console.log(this.persona);  

  }
  enviar(){
    this.personaService.registrarCliente(this.persona).subscribe(dato=>{
      console.log(dato);      
    },error => console.log(error));
  }
  unir(){
    if (this.nombre2==="") {
      this.persona.nombre=this.nombre1+" "+this.apellido1+" "+this.apellido2
    }else{
      this.persona.nombre=this.nombre1+" "+this.nombre2+" "+this.apellido1+" "+this.apellido2
    }
    this.onSubmit()
  }

  initForm(): FormGroup{
    return this.fb.group({
      nombre1:['', [Validators.required, Validators.minLength(3)]],
      apellido1:['', [Validators.required, Validators.minLength(4)]],
      apellido2:['', [Validators.required, Validators.minLength(4)]],
      cc:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.minLength(4)]],
      celular:['', [Validators.required, Validators.minLength(4)]],
      direccion:['', [Validators.required, Validators.minLength(4)]]
    })
  }  
}
