export type OnBoardingContainerConfig = {
    slidesConfiguration: OnBoardingSlideConfig[];
}

export type OnBoardingSlideConfig = {
    title: string;
    subtitle: string;
    gifUrl: string;
    isDarkMode?: boolean;
    stepperConfig: OnBoardingStepperConfig;
    onClose: () => void;
}

export type OnBoardingStepperConfig = {
    isStartingSlide: boolean;
}