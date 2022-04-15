import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchulteTableComponent } from './schulte-table.component';

describe('ShulteTableComponent', () => {
  let component: SchulteTableComponent;
  let fixture: ComponentFixture<SchulteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchulteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchulteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
