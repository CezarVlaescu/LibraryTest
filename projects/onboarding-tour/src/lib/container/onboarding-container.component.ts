import { Component, InputSignal, OnInit, OutputEmitterRef, WritableSignal, input, output, signal } from '@angular/core';
import { OnBoardingContainerConfig, OnBoardingSlideConfig } from '../models/on-boarding.model';
import { processedSlidesUtil } from '../utils/on-boarding.util';
import { environment } from '../../environments/onboarding.environment';

@Component({
    selector: 'mc-onboarding-container',
    templateUrl: './onboarding-container.component.html',
    styleUrls: ['./onboarding-container.component.css'],
    standalone: false
})
export class OnboardingContainerComponent implements OnInit {
  public containerConfig: InputSignal<OnBoardingContainerConfig> = input.required<OnBoardingContainerConfig>();
  public tourClosed: OutputEmitterRef<void> = output<void>();

  public currentSlideIndex: WritableSignal<number> = signal<number>(0);
  public slides: WritableSignal<OnBoardingSlideConfig[]> = signal<OnBoardingSlideConfig[]>([]);

  public ngOnInit(): void {
    this.slides.set(processedSlidesUtil(this.containerConfig().slidesConfiguration));

    const hasSeenTour = localStorage.getItem(environment.onboardingTourKey);
    if (hasSeenTour) {
      this.currentSlideIndex.set(-1);
    }
  }

  public handleStart(): void {
    this.currentSlideIndex.set(1);
  }

  public handleNext(): void {
    this.currentSlideIndex.update((prev) => Math.min(prev + 1, this.slides.length - 1));
  }

  public handleBack(): void {
    this.currentSlideIndex.update((prev) => Math.max(prev - 1, 0));
  }

  public handleFinish(): void {
    localStorage.setItem(environment.onboardingTourKey, 'true');
    this.tourClosed.emit();
    this.currentSlideIndex.set(-1);
  }
}
