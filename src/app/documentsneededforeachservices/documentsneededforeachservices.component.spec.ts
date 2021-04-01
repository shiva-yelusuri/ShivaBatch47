import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsneededforeachservicesComponent } from './documentsneededforeachservices.component';

describe('DocumentsneededforeachservicesComponent', () => {
  let component: DocumentsneededforeachservicesComponent;
  let fixture: ComponentFixture<DocumentsneededforeachservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsneededforeachservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsneededforeachservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
