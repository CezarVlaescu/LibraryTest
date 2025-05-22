export type OnBoardingContainerConfig = {
    slidesConfiguration: OnBoardingSlideConfig[];
}

export type OnBoardingSlideConfig = {
    id: number;
    title: string;
    subtitle: string;
    gifUrl: string;
    isDarkMode?: boolean;
    stepperConfig: OnBoardingStepperConfig;
    onClose: () => void;
}

export type OnBoardingStepperConfig = {
    isSpecialSlide: boolean;
}