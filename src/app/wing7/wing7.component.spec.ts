import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing7Component } from './wing7.component';

describe('Wing7Component', () => {
  let component: Wing7Component;
  let fixture: ComponentFixture<Wing7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
