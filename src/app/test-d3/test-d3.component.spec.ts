import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestD3Component } from './test-d3.component';

describe('TestD3Component', () => {
  let component: TestD3Component;
  let fixture: ComponentFixture<TestD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
