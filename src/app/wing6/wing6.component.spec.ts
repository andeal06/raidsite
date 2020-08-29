import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing6Component } from './wing6.component';

describe('Wing6Component', () => {
  let component: Wing6Component;
  let fixture: ComponentFixture<Wing6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
