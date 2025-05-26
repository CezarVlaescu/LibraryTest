import { OnBoardingSlideConfig } from "../models/on-boarding.model";
/**
 * Ensures that all slides have a unique, ordered `id` based on their index,
 * unless `id` is already provided.
 */
export declare function processedSlidesUtil(slides: OnBoardingSlideConfig[]): OnBoardingSlideConfig[];
export declare function indexIteratorUtil(count: number): number[];
