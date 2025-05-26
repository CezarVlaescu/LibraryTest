import { InputSignal } from '@angular/core';
import { OnBoardingSlideConfig } from '../../../models/on-boarding.model';
import * as i0 from "@angular/core";
export declare class OnboardingSlideComponent {
    slideConfig: InputSignal<OnBoardingSlideConfig>;
    slideIndex: InputSignal<number>;
    stepsCount: InputSignal<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingSlideComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingSlideComponent, "mc-onboarding-slide", never, { "slideConfig": { "alias": "slideConfig"; "required": true; "isSignal": true; }; "slideIndex": { "alias": "slideIndex"; "required": false; "isSignal": true; }; "stepsCount": { "alias": "stepsCount"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
