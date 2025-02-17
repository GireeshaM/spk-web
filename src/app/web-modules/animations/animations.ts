import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { ElementRef } from '@angular/core';

// Letter Animation
export function letterAnimation() {
  return trigger('letterAnimation', [
    transition('* => *', [
      query('span', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ]),
    ]),
  ]);
}

// Fade Animation
export const fadeInAnimation = trigger('fadeInAnimation', [
  state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  transition(':enter', [
    animate('2s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// Slide Animation
export const slideInAnimation = trigger('slideInAnimation', [
  state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
  transition(':enter', [
    animate('3s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

// animation applied when component loaded initially
export function observeElement(
  element: ElementRef,
  callback: () => void,
  threshold: number = 0.1
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('IntersectionObserver Entry:', entry);
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  observer.observe(element.nativeElement);
  return observer;
}
