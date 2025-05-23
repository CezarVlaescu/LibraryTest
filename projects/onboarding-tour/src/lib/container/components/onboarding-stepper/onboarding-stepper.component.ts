import { Component, input, InputSignal } from '@angular/core';
import { OnBoardingStepperConfig } from '../../../models/on-boarding.model';

@Component({
  selector: 'mc-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrl: './onboarding-stepper.component.css',
  standalone: false
})
export class OnboardingStepperComponent {
  public stepperConfig: InputSignal<OnBoardingStepperConfig> = input.required<OnBoardingStepperConfig>();

  public get stepIndexes(): number[] {
    return Array.from({ length: this.stepperConfig().stepsNumber }, (_, i) => i);
  }
}
