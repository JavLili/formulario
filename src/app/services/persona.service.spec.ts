import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonaService } from './persona.service';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [PersonaService]
  }));

  it('should be created', () => {
    const service : PersonaService = TestBed.get(PersonaService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: PersonaService = TestBed.get(PersonaService);
    expect(service.registrarCliente).toBeTruthy();
   });
  
});
