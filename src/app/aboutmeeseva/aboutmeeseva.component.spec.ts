import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeesevaComponent } from './aboutmeeseva.component';

describe('AboutmeesevaComponent', () => {
  let component: AboutmeesevaComponent;
  let fixture: ComponentFixture<AboutmeesevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeesevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeesevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
