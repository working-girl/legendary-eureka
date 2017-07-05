import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStatsComponent } from './nav-stats.component';

describe('NavStatsComponent', () => {
  let component: NavStatsComponent;
  let fixture: ComponentFixture<NavStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
