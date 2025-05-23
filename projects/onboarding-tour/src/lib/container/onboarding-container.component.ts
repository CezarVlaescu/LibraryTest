import { Component, InputSignal, input } from '@angular/core';
import { OnBoardingContainerConfig, OnBoardingSlideConfig } from '../models/on-boarding.model';
import processedSlidesUtil from '../utils/on-boarding.util';

@Component({
    selector: 'mc-onboarding-container',
    templateUrl: './onboarding-container.component.html',
    styleUrls: ['./onboarding-container.component.css'],
    standalone: false
})
export class OnboardingContainerComponent {
  public containerConfig: InputSignal<OnBoardingContainerConfig> = input.required<OnBoardingContainerConfig>();

  public get slidesSetup(): OnBoardingSlideConfig[] {
    return processedSlidesUtil(this.containerConfig().slidesConfiguration);
  }
}
