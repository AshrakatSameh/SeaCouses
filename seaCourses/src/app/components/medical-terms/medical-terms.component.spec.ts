import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTermsComponent } from './medical-terms.component';

describe('MedicalTermsComponent', () => {
  let component: MedicalTermsComponent;
  let fixture: ComponentFixture<MedicalTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalTermsComponent]
    });
    fixture = TestBed.createComponent(MedicalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
