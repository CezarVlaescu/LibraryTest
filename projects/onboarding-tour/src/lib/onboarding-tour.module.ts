import { NgModule } from '@angular/core';

import { OnboardingTourComponent } from './onboarding-tour.component';
import { OnboardingContainerComponent } from './container/onboarding-container.component';
import { OnboardingSlideComponent } from './container/onboarding-slide/onboarding-slide.component';
import { OnboardingStepperComponent } from './container/onboarding-stepper/onboarding-step.component';




@NgModule({
  declarations: [
    OnboardingTourComponent,
    OnboardingContainerComponent,
    OnboardingStepperComponent,
    OnboardingSlideComponent
  ],
  imports: [
  ],
  exports: [
    OnboardingTourComponent,
    OnboardingContainerComponent,
    OnboardingStepperComponent,
    OnboardingSlideComponent
  ]
})
export class OnboardingTourModule { }
