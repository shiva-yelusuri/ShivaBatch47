import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeesevaphysicalformComponent } from './meesevaphysicalform.component';

describe('MeesevaphysicalformComponent', () => {
  let component: MeesevaphysicalformComponent;
  let fixture: ComponentFixture<MeesevaphysicalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeesevaphysicalformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeesevaphysicalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
