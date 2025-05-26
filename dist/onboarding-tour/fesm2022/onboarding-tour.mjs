import * as i0 from '@angular/core';
import { Injectable, Component, input, output, signal, NgModule } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/material/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

class OnboardingTourService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class OnboardingTourComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.12", type: OnboardingTourComponent, isStandalone: false, selector: "mc-onboarding-tour", ngImport: i0, template: `
    <p>
      onboarding-tour works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mc-onboarding-tour', template: `
    <p>
      onboarding-tour works!
    </p>
  `, standalone: false }]
        }] });

/**
 * Ensures that all slides have a unique, ordered `id` based on their index,
 * unless `id` is already provided.
 */
function processedSlidesUtil(slides) {
    return slides.map((slide, index) => ({
        ...slide,
        id: slide.id ?? index
    }));
}
function indexIteratorUtil(count) {
    return Array.from({ length: count }, (_, i) => i);
}

const environment = {
    production: false,
    onboardingTourKey: 'mc-onboarding-tour-seen'
};

class OnboardingStepperComponent {
    constructor() {
        this.stepperConfig = input.required();
        this.stepperIndex = input(0);
        this.stepsCount = input(0);
        this.startTour = output();
        this.next = output();
        this.back = output();
        this.finish = output();
    }
    get stepIndexes() {
        return indexIteratorUtil(this.stepsCount());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.12", type: OnboardingStepperComponent, isStandalone: false, selector: "mc-onboarding-stepper", inputs: { stepperConfig: { classPropertyName: "stepperConfig", publicName: "stepperConfig", isSignal: true, isRequired: true, transformFunction: null }, stepperIndex: { classPropertyName: "stepperIndex", publicName: "stepperIndex", isSignal: true, isRequired: false, transformFunction: null }, stepsCount: { classPropertyName: "stepsCount", publicName: "stepsCount", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { startTour: "startTour", next: "next", back: "back", finish: "finish" }, ngImport: i0, template: "<ng-container>\r\n  @switch(stepperIndex()) {\r\n    @case (-1) {\r\n      <div class=\"stepper-start-wrapper\">\r\n        <button (click)=\"startTour.emit()\">Start tour</button>\r\n      </div>\r\n    }\r\n    @case (stepsCount() - 1) {\r\n      <div class=\"stepper-finish-wrapper\">\r\n        <button (click)=\"back.emit()\">Back</button>\r\n        <button (click)=\"finish.emit()\">End tour</button>\r\n      </div>\r\n    }\r\n    @default {\r\n      <mat-horizontal-stepper [selectedIndex]=\"stepperIndex()\" linear=\"false\">\r\n        @for (step of stepIndexes; track step) {\r\n          <mat-step>\r\n            <ng-template matStepLabel></ng-template>\r\n          </mat-step>\r\n        }\r\n      </mat-horizontal-stepper>\r\n\r\n      <div class=\"stepper-controls\">\r\n        <button (click)=\"back.emit()\">Back</button>\r\n        <button (click)=\"next.emit()\">Next</button>\r\n      </div>\r\n    }\r\n  }\r\n</ng-container>\r\n", styles: [""], dependencies: [{ kind: "component", type: i1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i1.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingStepperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mc-onboarding-stepper', standalone: false, template: "<ng-container>\r\n  @switch(stepperIndex()) {\r\n    @case (-1) {\r\n      <div class=\"stepper-start-wrapper\">\r\n        <button (click)=\"startTour.emit()\">Start tour</button>\r\n      </div>\r\n    }\r\n    @case (stepsCount() - 1) {\r\n      <div class=\"stepper-finish-wrapper\">\r\n        <button (click)=\"back.emit()\">Back</button>\r\n        <button (click)=\"finish.emit()\">End tour</button>\r\n      </div>\r\n    }\r\n    @default {\r\n      <mat-horizontal-stepper [selectedIndex]=\"stepperIndex()\" linear=\"false\">\r\n        @for (step of stepIndexes; track step) {\r\n          <mat-step>\r\n            <ng-template matStepLabel></ng-template>\r\n          </mat-step>\r\n        }\r\n      </mat-horizontal-stepper>\r\n\r\n      <div class=\"stepper-controls\">\r\n        <button (click)=\"back.emit()\">Back</button>\r\n        <button (click)=\"next.emit()\">Next</button>\r\n      </div>\r\n    }\r\n  }\r\n</ng-container>\r\n" }]
        }] });

class OnboardingSlideComponent {
    constructor() {
        this.slideConfig = input.required();
        this.slideIndex = input(0);
        this.stepsCount = input(0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingSlideComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.2.12", type: OnboardingSlideComponent, isStandalone: false, selector: "mc-onboarding-slide", inputs: { slideConfig: { classPropertyName: "slideConfig", publicName: "slideConfig", isSignal: true, isRequired: true, transformFunction: null }, slideIndex: { classPropertyName: "slideIndex", publicName: "slideIndex", isSignal: true, isRequired: false, transformFunction: null }, stepsCount: { classPropertyName: "stepsCount", publicName: "stepsCount", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"slide-container\">\n    <div [class]=\"slideConfig().stepperConfig.isSpecialSlide ? 'special-slide-image' : 'normal-slide-image'\">\n        <img [src]=\"slideConfig().gifUrl\" alt=\"photo-gif-slide\">\n    </div>\n    <div class=\"slide-container__right-section\">\n        <div class=\"slide-container__right-section__closeSection\">\n            <img [src]=\"slideConfig().closeSection.closeIcon\" alt=\"close-icon-slide\" (click)=\"slideConfig().closeSection.onClose()\">\n            <span class=\"slide-container__right-section__closeSection__title\">{{slideConfig().closeSection.closeText}}</span>\n        </div>\n        <div class=\"slide-container__right-section__stepperSection\">\n            <span class=\"slide-container__right-section__stepperSection__title\">{{slideConfig().title}}</span>\n            <span class=\"slide-container__right-section__stepperSection__subtitle\">{{slideConfig().subtitle}}</span>\n            <mc-onboarding-stepper \n            [stepperConfig]=\"slideConfig().stepperConfig\"\n            [stepperIndex]=\"slideIndex() - 1\"\n            [stepsCount]=\"stepsCount() - 2\"\n            />\n        </div>\n    </div>\n</div>\n", styles: [":host-context(body.dark) .slide-container{background-color:#272b35;&__right-section__title,&__right-section__subtitle{color:#ccc}}:host-context(body.light) .slide-container{background-color:#fff;&__right-section__title,&__right-section__subtitle{color:#3d3d3d}}\n"], dependencies: [{ kind: "component", type: OnboardingStepperComponent, selector: "mc-onboarding-stepper", inputs: ["stepperConfig", "stepperIndex", "stepsCount"], outputs: ["startTour", "next", "back", "finish"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingSlideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mc-onboarding-slide', standalone: false, template: "<div class=\"slide-container\">\n    <div [class]=\"slideConfig().stepperConfig.isSpecialSlide ? 'special-slide-image' : 'normal-slide-image'\">\n        <img [src]=\"slideConfig().gifUrl\" alt=\"photo-gif-slide\">\n    </div>\n    <div class=\"slide-container__right-section\">\n        <div class=\"slide-container__right-section__closeSection\">\n            <img [src]=\"slideConfig().closeSection.closeIcon\" alt=\"close-icon-slide\" (click)=\"slideConfig().closeSection.onClose()\">\n            <span class=\"slide-container__right-section__closeSection__title\">{{slideConfig().closeSection.closeText}}</span>\n        </div>\n        <div class=\"slide-container__right-section__stepperSection\">\n            <span class=\"slide-container__right-section__stepperSection__title\">{{slideConfig().title}}</span>\n            <span class=\"slide-container__right-section__stepperSection__subtitle\">{{slideConfig().subtitle}}</span>\n            <mc-onboarding-stepper \n            [stepperConfig]=\"slideConfig().stepperConfig\"\n            [stepperIndex]=\"slideIndex() - 1\"\n            [stepsCount]=\"stepsCount() - 2\"\n            />\n        </div>\n    </div>\n</div>\n", styles: [":host-context(body.dark) .slide-container{background-color:#272b35;&__right-section__title,&__right-section__subtitle{color:#ccc}}:host-context(body.light) .slide-container{background-color:#fff;&__right-section__title,&__right-section__subtitle{color:#3d3d3d}}\n"] }]
        }] });

class OnboardingContainerComponent {
    constructor() {
        this.containerConfig = input.required();
        this.tourClosed = output();
        this.currentSlideIndex = signal(0);
        this.slides = signal([]);
    }
    ngOnInit() {
        this.slides.set(processedSlidesUtil(this.containerConfig().slidesConfiguration));
        const hasSeenTour = localStorage.getItem(environment.onboardingTourKey);
        if (hasSeenTour) {
            this.currentSlideIndex.set(-1);
        }
    }
    handleStart() {
        this.currentSlideIndex.set(1);
    }
    handleNext() {
        this.currentSlideIndex.update((prev) => Math.min(prev + 1, this.slides.length - 1));
    }
    handleBack() {
        this.currentSlideIndex.update((prev) => Math.max(prev - 1, 0));
    }
    handleFinish() {
        localStorage.setItem(environment.onboardingTourKey, 'true');
        this.tourClosed.emit();
        this.currentSlideIndex.set(-1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.12", type: OnboardingContainerComponent, isStandalone: false, selector: "mc-onboarding-container", inputs: { containerConfig: { classPropertyName: "containerConfig", publicName: "containerConfig", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { tourClosed: "tourClosed" }, ngImport: i0, template: "@if (containerConfig()) {\n    <ng-container>\n        @for (slide of containerConfig().slidesConfiguration; track slide.id;) {\n            <mc-onboarding-slide \n            *ngIf=\"currentSlideIndex() >= 0\"\n            [slideConfig]=\"slides()[currentSlideIndex()]\"\n            [slideIndex]=\"currentSlideIndex()\"\n            [stepsCount]=\"slides.length\"\n            (startTour)=\"handleStart()\"\n            (next)=\"handleNext()\"\n            (back)=\"handleBack()\"\n            (finish)=\"handleFinish()\" \n            />\n        }\n    </ng-container>\n}\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: OnboardingSlideComponent, selector: "mc-onboarding-slide", inputs: ["slideConfig", "slideIndex", "stepsCount"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mc-onboarding-container', standalone: false, template: "@if (containerConfig()) {\n    <ng-container>\n        @for (slide of containerConfig().slidesConfiguration; track slide.id;) {\n            <mc-onboarding-slide \n            *ngIf=\"currentSlideIndex() >= 0\"\n            [slideConfig]=\"slides()[currentSlideIndex()]\"\n            [slideIndex]=\"currentSlideIndex()\"\n            [stepsCount]=\"slides.length\"\n            (startTour)=\"handleStart()\"\n            (next)=\"handleNext()\"\n            (back)=\"handleBack()\"\n            (finish)=\"handleFinish()\" \n            />\n        }\n    </ng-container>\n}\n" }]
        }] });

class OnboardingTourModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourModule, declarations: [OnboardingTourComponent,
            OnboardingContainerComponent,
            OnboardingStepperComponent,
            OnboardingSlideComponent], imports: [MatStepperModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatIconModule,
            CommonModule], exports: [OnboardingTourComponent,
            OnboardingContainerComponent,
            OnboardingStepperComponent,
            OnboardingSlideComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourModule, imports: [MatStepperModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatIconModule,
            CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.12", ngImport: i0, type: OnboardingTourModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OnboardingTourComponent,
                        OnboardingContainerComponent,
                        OnboardingStepperComponent,
                        OnboardingSlideComponent
                    ],
                    imports: [
                        MatStepperModule,
                        FormsModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule,
                        MatInputModule,
                        MatIconModule,
                        CommonModule
                    ],
                    exports: [
                        OnboardingTourComponent,
                        OnboardingContainerComponent,
                        OnboardingStepperComponent,
                        OnboardingSlideComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of onboarding-tour
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OnboardingContainerComponent, OnboardingSlideComponent, OnboardingStepperComponent, OnboardingTourComponent, OnboardingTourModule, OnboardingTourService };
//# sourceMappingURL=onboarding-tour.mjs.map
