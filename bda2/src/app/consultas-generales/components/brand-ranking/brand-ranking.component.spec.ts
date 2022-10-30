import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRankingComponent } from './brand-ranking.component';

describe('BrandRankingComponent', () => {
  let component: BrandRankingComponent;
  let fixture: ComponentFixture<BrandRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
