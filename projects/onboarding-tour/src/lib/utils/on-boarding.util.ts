import { OnBoardingSlideConfig } from "../models/on-boarding.model";

/**
 * Ensures that all slides have a unique, ordered `id` based on their index,
 * unless `id` is already provided.
 */

export function processedSlidesUtil(slides: OnBoardingSlideConfig[]): OnBoardingSlideConfig[] {
    return slides.map((slide, index) => ({
        ...slide,
        id: slide.id ?? index
    }))
}

export function indexIteratorUtil(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
}