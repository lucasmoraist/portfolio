import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubContactComponent } from './github-contact.component';

describe('GithubContactComponent', () => {
  let component: GithubContactComponent;
  let fixture: ComponentFixture<GithubContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubContactComponent]
    });
    fixture = TestBed.createComponent(GithubContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
