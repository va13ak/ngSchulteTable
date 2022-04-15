import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStatisticsComponent } from './e-statistics.component';

describe('EstatisticsComponent', () => {
  let component: EStatisticsComponent;
  let fixture: ComponentFixture<EStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
