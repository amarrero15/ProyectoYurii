import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializadasComponent } from './especializadas.component';

describe('EspecializadasComponent', () => {
  let component: EspecializadasComponent;
  let fixture: ComponentFixture<EspecializadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecializadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecializadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
