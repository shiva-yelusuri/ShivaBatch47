import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentordersComponent } from './governmentorders.component';

describe('GovernmentordersComponent', () => {
  let component: GovernmentordersComponent;
  let fixture: ComponentFixture<GovernmentordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
