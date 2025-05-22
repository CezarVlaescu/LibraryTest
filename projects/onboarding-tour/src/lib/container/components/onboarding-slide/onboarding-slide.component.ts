import { Component, input, InputSignal } from '@angular/core';
import { OnBoardingSlideConfig } from '../../../models/on-boarding.model';

@Component({
    selector: 'mc-onboarding-slide',
    templateUrl: './onboarding-slide.component.html',
    styleUrls: ['./onboarding-slide.component.css'],
    standalone: false
})
export class OnboardingSlideComponent {
    public slideConfig: InputSignal<OnBoardingSlideConfig> = input.required<OnBoardingSlideConfig>();
}
