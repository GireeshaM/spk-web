import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  @ViewChild('professionals', { static: true }) professionals!: ElementRef;
  @ViewChild('partners', { static: true }) partners!: ElementRef;
  @ViewChild('projects', { static: true }) projects!: ElementRef;

  private observer: IntersectionObserver;

  constructor(private meta: Meta, private title: Title) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === this.professionals.nativeElement) {
              this.countUp(this.professionals.nativeElement, 50, 2000);
            } else if (entry.target === this.partners.nativeElement) {
              this.countUp(this.partners.nativeElement, 10, 2000);
            } else if (entry.target === this.projects.nativeElement) {
              this.countUp(this.projects.nativeElement, 100, 2000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  ngAfterViewInit(): void {
    this.observer.observe(this.professionals.nativeElement);
    this.observer.observe(this.partners.nativeElement);
    this.observer.observe(this.projects.nativeElement);
  }

  countUp(element: HTMLElement, targetNumber: number, duration: number) {
    let start = 0;
    const end = targetNumber;
    const range = end - start;
    const increment = 1; // Increment by 1
    const stepTime = Math.abs(Math.floor(duration / range)); // Adjusted for slower increment

    const timer = setInterval(() => {
      start += increment;
      element.innerText = `${start}+`;
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  private setMetaData(): void {
    this.title.setTitle('SprintPark | Your Partner for IT, Staffing, and More'),
      this.meta.updateTag({
        name: 'description',
        content:
          'At SprintPark, we are here to support your business with a range of services from IT consulting to staffing and project management. Our team provides flexible, tailored solutions that will fit your needs. ',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
