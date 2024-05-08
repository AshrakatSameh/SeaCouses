import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IELTSComponent } from './ielts.component';

describe('IELTSComponent', () => {
  let component: IELTSComponent;
  let fixture: ComponentFixture<IELTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IELTSComponent]
    });
    fixture = TestBed.createComponent(IELTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
