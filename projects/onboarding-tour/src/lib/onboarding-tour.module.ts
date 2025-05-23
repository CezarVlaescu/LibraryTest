import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingTourComponent } from './onboarding-tour.component';
import { OnboardingContainerComponent } from './container/onboarding-container.component';
import { OnboardingSlideComponent } from './container/components/onboarding-slide/onboarding-slide.component';

import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OnboardingStepperComponent } from './container/components/onboarding-stepper/onboarding-stepper.component';

@NgModule({
  declarations: [
    OnboardingTourComponent,
    OnboardingContainerComponent,
    OnboardingStepperComponent,
    OnboardingSlideComponent
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    OnboardingTourComponent,
    OnboardingContainerComponent,
    OnboardingStepperComponent,
    OnboardingSlideComponent,
  ],
})
export class OnboardingTourModule { }
