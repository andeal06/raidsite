import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing1srComponent } from './wing1sr.component';

describe('Wing1srComponent', () => {
  let component: Wing1srComponent;
  let fixture: ComponentFixture<Wing1srComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing1srComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing1srComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
