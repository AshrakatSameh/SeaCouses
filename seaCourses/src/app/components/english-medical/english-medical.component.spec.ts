import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMedicalComponent } from './english-medical.component';

describe('EnglishMedicalComponent', () => {
  let component: EnglishMedicalComponent;
  let fixture: ComponentFixture<EnglishMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishMedicalComponent]
    });
    fixture = TestBed.createComponent(EnglishMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
