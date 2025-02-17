import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  fadeInAnimation,
  letterAnimation,
  observeElement,
  slideInAnimation,
} from '../web-modules/animations/animations';
import { Meta, Title } from '@angular/platform-browser';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [slideInAnimation],
})
export class ContactUsComponent {
  selectedForm: string = 'contactForm';
  submitted: boolean = false;
  @ViewChild('successModal') successModal: any;

  contactFormGroup: FormGroup;
  writeFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private meta: Meta,
    private title: Title
  ) {
    this.contactFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.writeFormGroup = this.fb.group({
      topic: ['', Validators.required],
      customTopic: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactFormGroup.valid) {
      console.log('Form Data:', this.contactFormGroup.value);
      this.sendEmail(new Event('submit'));
      this.submitted = true;
      this.showModal();
    } else {
      // Mark all controls as touched to show validation errors
      this.contactFormGroup.markAllAsTouched();
    }
  }
  public showModal() {
    // Bootstrap's modal show method via ViewChild
    const modalElement = this.successModal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.removeAttribute('aria-hidden');
  }

  closeModal() {
    const modalElement = this.successModal.nativeElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    modalElement.setAttribute('aria-hidden', 'true');
  }

  public showContent(formName: string) {
    this.selectedForm = formName;
  }

  public scrollToMap() {
    document
      .getElementById('mapContainer')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  public scrollToContact() {
    document
      .getElementById('contactContainer')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  //Animations
  isVisible = false;

  @ViewChild('animatedContainer', { static: false })
  animatedContainer!: ElementRef;

  ngAfterViewInit() {
    if (this.animatedContainer) {
      observeElement(this.animatedContainer, () => {
        this.isVisible = true;
      });
    } else {
      console.warn('animatedContainer was not found.');
    }
  }
  private setMetaData(): void {
    this.title.setTitle('Contact SprintPark | Connect for Expert Solutions'),
      this.meta.updateTag({
        name: 'description',
        content:
          'Get in touch with SprintPark for expert IT consulting, staffing, and software solutions. Reach out via email or phone to discuss how we can support your business. ',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j07jrmv',
        'template_v0oy7ti',
        e.target as HTMLFormElement,
        {
          publicKey: 'RqHEh2bb5Kq3zVphS',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }

  public writeFormSubmit(): void {
    if (this.writeFormGroup.valid) {
      console.log('Form Data:', this.writeFormGroup.value);
      this.submitted = true;
      this.sendFormToEmail(new Event('submit'));
    } else {
      console.log('Error: Form not submitted');
    }
  }

  public sendFormToEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j07jrmv',
        'template_iys8t94',
        e.target as HTMLFormElement,
        {
          publicKey: 'RqHEh2bb5Kq3zVphS',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
