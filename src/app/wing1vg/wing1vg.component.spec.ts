import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing1vgComponent } from './wing1vg.component';

describe('Wing1vgComponent', () => {
  let component: Wing1vgComponent;
  let fixture: ComponentFixture<Wing1vgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing1vgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing1vgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
