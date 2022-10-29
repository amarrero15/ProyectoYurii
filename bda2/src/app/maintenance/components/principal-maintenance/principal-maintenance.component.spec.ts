import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMaintenanceComponent } from './principal-maintenance.component';

describe('PrincipalMaintenanceComponent', () => {
  let component: PrincipalMaintenanceComponent;
  let fixture: ComponentFixture<PrincipalMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
