import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsupComponent } from './whatsup.component';

describe('WhatsupComponent', () => {
  let component: WhatsupComponent;
  let fixture: ComponentFixture<WhatsupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsupComponent]
    });
    fixture = TestBed.createComponent(WhatsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
