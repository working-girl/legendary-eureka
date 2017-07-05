import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCardComponent } from './desc-card.component';

describe('DescCardComponent', () => {
  let component: DescCardComponent;
  let fixture: ComponentFixture<DescCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
