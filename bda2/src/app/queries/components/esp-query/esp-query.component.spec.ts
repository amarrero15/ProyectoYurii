import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspQueryComponent } from './esp-query.component';

describe('EspQueryComponent', () => {
  let component: EspQueryComponent;
  let fixture: ComponentFixture<EspQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
