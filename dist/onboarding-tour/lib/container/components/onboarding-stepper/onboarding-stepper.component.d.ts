import { InputSignal, OutputEmitterRef } from '@angular/core';
import { OnBoardingStepperConfig } from '../../../models/on-boarding.model';
import * as i0 from "@angular/core";
export declare class OnboardingStepperComponent {
    stepperConfig: InputSignal<OnBoardingStepperConfig>;
    stepperIndex: InputSignal<number>;
    stepsCount: InputSignal<number>;
    startTour: OutputEmitterRef<void>;
    next: OutputEmitterRef<void>;
    back: OutputEmitterRef<void>;
    finish: OutputEmitterRef<void>;
    get stepIndexes(): number[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingStepperComponent, "mc-onboarding-stepper", never, { "stepperConfig": { "alias": "stepperConfig"; "required": true; "isSignal": true; }; "stepperIndex": { "alias": "stepperIndex"; "required": false; "isSignal": true; }; "stepsCount": { "alias": "stepsCount"; "required": false; "isSignal": true; }; }, { "startTour": "startTour"; "next": "next"; "back": "back"; "finish": "finish"; }, never, never, false, never>;
}
