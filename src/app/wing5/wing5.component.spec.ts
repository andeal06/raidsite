import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing5Component } from './wing5.component';

describe('Wing5Component', () => {
  let component: Wing5Component;
  let fixture: ComponentFixture<Wing5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
