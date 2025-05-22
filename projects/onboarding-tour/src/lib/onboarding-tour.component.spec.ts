import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTourComponent } from './onboarding-tour.component';

describe('OnboardingTourComponent', () => {
  let component: OnboardingTourComponent;
  let fixture: ComponentFixture<OnboardingTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingTourComponent]
    });
    fixture = TestBed.createComponent(OnboardingTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
