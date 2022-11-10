import { TestBed } from '@angular/core/testing';

import { EspecializadoService } from './especializado.service';

describe('EspecializadoService', () => {
  let service: EspecializadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecializadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
