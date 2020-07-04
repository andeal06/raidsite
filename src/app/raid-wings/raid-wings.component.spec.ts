import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidWingsComponent } from './raid-wings.component';

describe('RaidWingsComponent', () => {
  let component: RaidWingsComponent;
  let fixture: ComponentFixture<RaidWingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidWingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
