import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkChart2Component } from './network-chart-2.component';

describe('NetworkChart2Component', () => {
  let component: NetworkChart2Component;
  let fixture: ComponentFixture<NetworkChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
