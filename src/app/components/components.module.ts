import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
    RegistroComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    RegistroComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent],
    providers: [HttpClientModule],
})
export class ComponentsModule { }
