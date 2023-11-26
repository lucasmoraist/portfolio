import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinContactComponent } from './linkedin-contact.component';

describe('LinkedinContactComponent', () => {
  let component: LinkedinContactComponent;
  let fixture: ComponentFixture<LinkedinContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinContactComponent]
    });
    fixture = TestBed.createComponent(LinkedinContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
