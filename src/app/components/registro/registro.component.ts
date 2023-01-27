import { Component, OnInit } from '@angular/core';
import { Persona } from '../../class/persona';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  
  submitted = false;
  register! : FormGroup;  

  nombre1:string="";
  nombre2:string="";
  apellido1:string="";
  apellido2: string="";
  fullName: string="";
  persona : Persona = new Persona();
  constructor(private personaService : PersonaService, public fb: FormBuilder){}
  ngOnInit():void {
    this.register = this.fb.group({
      identificacion:['', Validators.required],
      nombre1 :['', Validators.required],
      nombre2 :['', Validators.nullValidator],
      apellido1 :['', Validators.required],
      apellido2 :['', Validators.required],
      poblacion:['', Validators.required],
      region:['', Validators.required],
      direccion:['', Validators.required],
      telefono:['', Validators.required],
      celular:['', Validators.required],
      inlineRadioOptions:['', Validators.required],
      email:['', Validators.required],
      fecha_nacimiento:['', Validators.required],
      organizacion_ventas:['', Validators.required],
      canal_distribucion:['', Validators.required],
      sector:['', Validators.required],
      grupo_clientes:['', Validators.required],
      zona_ventas:['', Validators.required],
      grupo_vendedores:['', Validators.required],
      oficina_ventas:['', Validators.required],
      grupo_clientes1:['', Validators.required],
      grupo_clientes3:['', Validators.required],
      cupo:['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true
    
    if (this.register.invalid) {
      console.log(this.register.value);
      return
    }
    alert("Success")
  }

  enviar(){
    this.personaService.registrarCliente(this.persona).subscribe(dato=>{
      console.log(dato);      
    },error => console.log(error));
    }
    
  concatenar(){
    if (this.register.controls.nombre1.value==="") {
      this.fullName=this.register.controls.nombre1.value+" "+this.register.controls.apellido1.value+" "+this.register.controls.apellido2.value
    } else{
      this.fullName=this.register.controls.nombre1.value+" "+this.register.controls.nombre2.value+" "+this.register.controls.apellido1.value+" "+this.register.controls.apellido2.value
    }
  }
}
