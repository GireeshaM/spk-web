import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss'],
})
export class ManufacturingComponent {
  public img = 'assets/industries/industry5.png';
  public industryImg = 'assets/industries/manufactureImg.jpg';
  public itHeader = 'Manufacturing';
  public itContent =
    'Manufacturing and distribution industry faces unique and complex challenges on a global scale. Even smaller organizations must navigate suppliers, logistics, and regulations from different parts of the world. As organizations search for ways to drive innovation in how they design, produce, and deliver, they often struggle to implement those changes for long-lasting value.These challenges also provide enormous opportunities for companies to see beyond the short-term challenges and position themselves for long-term success.SprintPark partners with leaders to help them achieve greater confidence in these dynamic and ever-changing environments. We aim to better understand the unique strengths, risks, and opportunities of your organisation and its future goals.';
  cards = [
    {
      title: 'Salesforce',
      description:
        'We implement Salesforce solutions for supply chain management, customer relationship management, and sales operations in manufacturing.',
      link: '/salesforceServices',
    },
    {
      title: 'Data Analytics',
      description:
        'We analyze manufacturing data for process optimization, predictive maintenance, and quality control improvements.',
      link: '/dataAnalytics',
    },
    {
      title: 'Project Management',
      description:
        'We manage projects related to the implementation of manufacturing systems.',
      link: '/projectManagement',
    },
    {
      title: 'IT Consulting',
      description:
        'We advise on manufacturing technology integration, Industry 4.0 strategies, and IT infrastructure improvements. Support with automation, IoT, and supply chain management.',
      link: '/it-consulting',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Innovative Solutions for Manufacturing '),
      this.meta.updateTag({
        name: 'description',
        content:
          'Explore how SprintPark enhances manufacturing with Salesforce, data analytics, IT consulting, and more. Our tailored solutions aim to boost innovation and operational efficiency.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
