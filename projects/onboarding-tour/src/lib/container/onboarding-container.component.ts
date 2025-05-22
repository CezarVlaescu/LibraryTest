import { Component, InputSignal, input } from '@angular/core';
import { OnBoardingContainerConfig } from '../models/on-boarding.model';

@Component({
    selector: 'mc-onboarding-container',
    templateUrl: './onboarding-container.component.html',
    styleUrls: ['./onboarding-container.component.css'],
    standalone: false
})
export class OnboardingContainerComponent {
  public containerConfig: InputSignal<OnBoardingContainerConfig> = input.required<OnBoardingContainerConfig>();
}
