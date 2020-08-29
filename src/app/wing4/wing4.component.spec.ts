import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing4Component } from './wing4.component';

describe('Wing4Component', () => {
  let component: Wing4Component;
  let fixture: ComponentFixture<Wing4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
