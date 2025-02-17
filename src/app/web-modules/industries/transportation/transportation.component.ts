import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss'],
})
export class TransportationComponent {
  public img = 'assets/industries/industry8.jpg';
  public industryImg = 'assets/industries/transportationImg.jpg';
  public itHeader = 'Transportation & Logistics';
  public itContent =
    'SprintPark helps transportation and logistics organisations to operate and achieve innovative solutions in a rapidly changing world.In today’s evolving environment, transportation and logistics organisations are transforming the way they operate to stay competitive. As a trusted advisor, Protiviti can provide relevant insights and deliver a combination of strategic vision, proven expertise and practical experience to enhance the value of your business. Our industry consulting experts provide solutions tailored to your organisation’s unique needs and industry.';
  cards = [
    {
      title: 'IT Consulting',
      description:
        'We advise on digital transformation strategies, including the implementation of transportation management systems (TMS), route optimization solutions, and real-time tracking technologies.',
      link: '/it-consulting',
    },
    {
      title: 'Network Engineering',
      description:
        'We design and maintain network infrastructures for real-time data transmission, GPS tracking, and communication between transportation management systems and vehicles.',
      link: '/networkEngineering',
    },
    {
      title: 'Salesforce',
      description:
        'We Implement Salesforce for managing customer relationships, booking systems, and customer service operations in transportation companies. We also customize solutions for handling reservations, loyalty programs, and service requests.',
      link: '/salesforceServices',
    },
    {
      title: 'AI and Automation',
      description:
        'We implement AI for route optimization, predictive maintenance, demand forecasting, and automated customer service through chatbots.',
      link: '/aiAutomation',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Transform Your Transportation & Logistics '
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'Explore SprintPark’s expertise in transportation and logistics. With IT consulting, network engineering, and AI-driven solutions, we are here to optimize operations and drive innovation.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
