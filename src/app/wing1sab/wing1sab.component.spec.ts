import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing1sabComponent } from './wing1sab.component';

describe('Wing1sabComponent', () => {
  let component: Wing1sabComponent;
  let fixture: ComponentFixture<Wing1sabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing1sabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing1sabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
