export type OnBoardingContainerConfig = {
    slidesConfiguration: OnBoardingSlideConfig[];
}

export type OnBoardingSlideConfig = {
    id: number;
    title: string;
    subtitle: string;
    gifUrl: string;
    isDarkMode?: boolean;
    closeSection: OnBoardingSlideCloseSectionConfig;
    stepperConfig: OnBoardingStepperConfig;
}

export type OnBoardingStepperConfig = {
    isSpecialSlide: boolean;
    stepsNumber: number;
    startButton: OnBoardingStepperButtonConfig;
    nextButton: OnBoardingStepperButtonConfig;
    previousButton: OnBoardingStepperButtonConfig;
    finishButton: OnBoardingStepperButtonConfig;
}

export type OnBoardingStepperButtonConfig = {
    buttonText: string;
    buttonIcon: string;
    buttonTheme: string;
}

export type OnBoardingSlideCloseSectionConfig = {
    onClose: () => void;
    closeText: string;
    closeIcon: string;
}