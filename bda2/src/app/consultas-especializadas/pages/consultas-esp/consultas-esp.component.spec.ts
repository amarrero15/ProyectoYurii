import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasEspComponent } from './consultas-esp.component';

describe('ConsultasEspComponent', () => {
  let component: ConsultasEspComponent;
  let fixture: ComponentFixture<ConsultasEspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasEspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
