import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailContactComponent } from './gmail-contact.component';

describe('GmailContactComponent', () => {
  let component: GmailContactComponent;
  let fixture: ComponentFixture<GmailContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmailContactComponent]
    });
    fixture = TestBed.createComponent(GmailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
