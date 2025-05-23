import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { OnBoardingStepperConfig } from '../../../models/on-boarding.model';
import { indexIteratorUtil } from '../../../utils/on-boarding.util';

@Component({
  selector: 'mc-onboarding-stepper',
  templateUrl: './onboarding-stepper.component.html',
  styleUrl: './onboarding-stepper.component.css',
  standalone: false
})
export class OnboardingStepperComponent {
  public stepperConfig: InputSignal<OnBoardingStepperConfig> = input.required<OnBoardingStepperConfig>();
  public stepperIndex: InputSignal<number> = input<number>(0);
  public stepsCount: InputSignal<number> = input<number>(0);

  public startTour: OutputEmitterRef<void> = output<void>();
  public next: OutputEmitterRef<void> = output<void>();
  public back: OutputEmitterRef<void> = output<void>();
  public finish: OutputEmitterRef<void> = output<void>();

  public get stepIndexes(): number[] {
    return indexIteratorUtil(this.stepsCount());
  }
}
