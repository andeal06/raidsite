import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing3Component } from './wing3.component';

describe('Wing3Component', () => {
  let component: Wing3Component;
  let fixture: ComponentFixture<Wing3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
