import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing1Component } from './wing1.component';

describe('Wing1Component', () => {
  let component: Wing1Component;
  let fixture: ComponentFixture<Wing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
