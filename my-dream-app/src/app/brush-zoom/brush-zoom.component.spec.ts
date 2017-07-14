import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushZoomComponent } from './brush-zoom.component';

describe('BrushZoomComponent', () => {
  let component: BrushZoomComponent;
  let fixture: ComponentFixture<BrushZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
