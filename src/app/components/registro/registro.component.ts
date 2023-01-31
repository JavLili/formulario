import { Component, OnInit } from '@angular/core';
import { Persona } from '../../class/persona';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import Swal from 'sweetalert2';

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
      apellido2 :['', Validators.nullValidator],
      poblacion:['', Validators.required],
      region:['', Validators.required],
      direccion:['', Validators.required],
      telefono:['', Validators.required],
      celular:['', Validators.required],
      sexo:['', Validators.required],
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
      this.enviar()
      Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La información esta incompleta'
          })
          console.log(this.register.value);
          return
        }
        this.cargando()      
        this.addPerson(this.register.value)
  }
  cargando(){
    Swal.fire({
      title: 'Validando',
      html: 'Verificando la información',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton:false
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
        this.correcto()
      }
    })
  }
  correcto(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Información guardada',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(this.register.value);
  }
  enviar(){
    this.personaService.registrarCliente().subscribe(dato=>{
      console.log(dato);      
    },error => console.log(error));
    }    
  concatenar(){
    if (this.register.controls.nombre1.value==="") {
      this.fullName=this.register.controls.nombre1.value+" "+this.register.controls.apellido1.value+" "+this.register.controls.apellido2.value
      this.persona.nombres=this.register.controls.nombre1.value
    } else{
      this.fullName=this.register.controls.nombre1.value+" "+this.register.controls.nombre2.value+" "+this.register.controls.apellido1.value+" "+this.register.controls.apellido2.value
      this.persona.nombres=this.register.controls.nombre1.value+" "+this.register.controls.nombre2.value
    }
  }

  addPerson(form:any){    
    this.persona.identificacion=form.identificacion;
    this.persona.apellidos=form.apellido1+" "+form.apellido2;
    this.persona.poblacion=form.poblacion;
    this.persona.region=form.region;
    this.persona.direccion=form.direccion;
    this.persona.telefono=form.telefono;
    this.persona.celular=form.celular;
    this.persona.email=form.email;
    this.persona.sexo=form.sexo;
    this.persona.fecha_nacimiento=form.fecha_nacimiento;
    this.persona.organizacion_ventas=form.organizacion_ventas;
    this.persona.canal_distribucion=form.canal_distribucion;
    this.persona.sector=form.sector;
    this.persona.grupo_clientes=form.grupo_clientes;
    this.persona.zona_ventas=form.zona_ventas;
    this.persona.grupo_vendedores=form.grupo_vendedores;
    this.persona.oficina_ventas=form.oficina_ventas;
    this.persona.grupo_clientes1=form.grupo_clientes1;
    this.persona.grupo_clientes3=form.grupo_clientes3;
    this.persona.cupo=form.cupo;
    console.log(this.persona);    
  }
}
