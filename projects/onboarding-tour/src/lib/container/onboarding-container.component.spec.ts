import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingContainerComponent } from './onboarding-container.component';

describe('OnboardingContainerComponent', () => {
  let component: OnboardingContainerComponent;
  let fixture: ComponentFixture<OnboardingContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingContainerComponent]
    });
    fixture = TestBed.createComponent(OnboardingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
