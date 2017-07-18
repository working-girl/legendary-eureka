import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagChartComponent } from './flag-chart.component';

describe('FlagChartComponent', () => {
  let component: FlagChartComponent;
  let fixture: ComponentFixture<FlagChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});