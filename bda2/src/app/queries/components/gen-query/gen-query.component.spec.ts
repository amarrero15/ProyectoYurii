import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenQueryComponent } from './gen-query.component';

describe('GenQueryComponent', () => {
  let component: GenQueryComponent;
  let fixture: ComponentFixture<GenQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
