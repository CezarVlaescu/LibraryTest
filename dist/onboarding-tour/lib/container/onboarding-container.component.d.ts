import { InputSignal, OnInit, OutputEmitterRef, WritableSignal } from '@angular/core';
import { OnBoardingContainerConfig, OnBoardingSlideConfig } from '../models/on-boarding.model';
import * as i0 from "@angular/core";
export declare class OnboardingContainerComponent implements OnInit {
    containerConfig: InputSignal<OnBoardingContainerConfig>;
    tourClosed: OutputEmitterRef<void>;
    currentSlideIndex: WritableSignal<number>;
    slides: WritableSignal<OnBoardingSlideConfig[]>;
    ngOnInit(): void;
    handleStart(): void;
    handleNext(): void;
    handleBack(): void;
    handleFinish(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OnboardingContainerComponent, "mc-onboarding-container", never, { "containerConfig": { "alias": "containerConfig"; "required": true; "isSignal": true; }; }, { "tourClosed": "tourClosed"; }, never, never, false, never>;
}
