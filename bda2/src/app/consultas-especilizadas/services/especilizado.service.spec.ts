import { TestBed } from '@angular/core/testing';

import { EspecilizadoService } from './especilizado.service';

describe('EspecilizadoService', () => {
  let service: EspecilizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecilizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
