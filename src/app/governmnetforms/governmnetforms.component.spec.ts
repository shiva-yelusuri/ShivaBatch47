import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmnetformsComponent } from './governmnetforms.component';

describe('GovernmnetformsComponent', () => {
  let component: GovernmnetformsComponent;
  let fixture: ComponentFixture<GovernmnetformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmnetformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmnetformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
