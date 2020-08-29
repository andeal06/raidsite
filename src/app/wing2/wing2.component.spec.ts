import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing2Component } from './wing2.component';

describe('Wing2Component', () => {
  let component: Wing2Component;
  let fixture: ComponentFixture<Wing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
