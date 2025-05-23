export type OnBoardingContainerConfig = {
    slidesConfiguration: OnBoardingSlideConfig[];
}

export type OnBoardingSlideConfig = {
    id: number;
    title: string;
    subtitle: string;
    gifUrl: string;
    isDarkMode?: boolean;
    onClose: () => void;
    isSpecialSlide?: boolean;
    closeText: string;
    stepperConfig: OnBoardingStepperConfig;
}

export type OnBoardingStepperConfig = {
    nextButtonText: string;
    previousButtonText: string;
    buttonTheme: string;
    buttonIcon: string;
}