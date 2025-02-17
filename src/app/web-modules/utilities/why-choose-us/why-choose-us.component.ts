import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fadeInAnimation, observeElement } from '../../animations/animations';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
  animations: [fadeInAnimation],
})
export class WhyChooseUsComponent {
  // @Input() cards!: any[];
  public cards = [
    {
      imgSrc: 'assets/staffing/proficiencyIcon.png',
      title: 'Proficiency and Acumen',
      content:
        'Our team of experts have 15+ years of experience and are skilled to give you professional advice. ',
    },
    {
      imgSrc: 'assets/staffing/modelIcon.png',
      title: 'Flexible Engagement Models',
      content:
        'We have flexible plans and solutions which can be tailored to your specific needs.',
    },
    {
      imgSrc: 'assets/staffing/clientIcon.png',
      title: 'Client-Centric Approach',
      content:
        'Our first priority is always the client. We strive to create the best user experience for our clients.',
    },
    {
      imgSrc: 'assets/staffing/pricingIcon.png',
      title: 'Parity Pricing and Trusted Partnership',
      content:
        'Prices are set to boost your companies profitability. We value integrity which can be seen in our work.',
    },
  ];
}
