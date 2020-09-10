import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wing1gorsComponent } from './wing1gors.component';

describe('Wing1gorsComponent', () => {
  let component: Wing1gorsComponent;
  let fixture: ComponentFixture<Wing1gorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wing1gorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wing1gorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
