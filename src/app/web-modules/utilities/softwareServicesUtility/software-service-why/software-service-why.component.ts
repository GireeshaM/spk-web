import { Component } from '@angular/core';

@Component({
  selector: 'app-software-service-why',
  templateUrl: './software-service-why.component.html',
  styleUrls: ['./software-service-why.component.scss'],
})
export class SoftwareServiceWhyComponent {
  whySpCards = [
    {
      image: 'assets/whyHireIcons/certifiedIcon.png',
      title: 'Certified Consultants and Architects',
    },
    { image: 'assets/whyHireIcons/okIcon.png', title: 'Quality Assurance' },
    { image: 'assets/whyHireIcons/supportIcon.png', title: '24/7 Support' },
    {
      image: 'assets/whyHireIcons/solutionIcon.png',
      title: 'Customized Solutions',
    },
    { image: 'assets/whyHireIcons/expIcon.png', title: 'Extensive Experience' },
    { image: 'assets/whyHireIcons/privacy.png', title: 'Privacy & Security' },
  ];

  row1Cards = this.whySpCards.slice(0, 3);
  row2Cards = this.whySpCards.slice(3, 6);
}
