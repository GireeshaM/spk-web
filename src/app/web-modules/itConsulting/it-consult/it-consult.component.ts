import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-consult',
  templateUrl: './it-consult.component.html',
  styleUrls: ['./it-consult.component.scss'],
})
export class ItConsultComponent {
  public whatList!: any[];
  public heroImage = 'assets/itImages/itConsultHero1.jpg';
  public smallImage = 'assets/itImages/itConsult.jpg';
  public whatHeader =
    'SprintPark offers wide range of IT Consulting services which include';

  public whatMainHeader = 'IT Consulting';

  public whyHeader = 'Why IT Consulting?';

  public whyList!: any[];

  public images = [
    'assets/staffing/time.png',
    'assets/itImages/risk.png',
    'assets/itImages/reduce.png',
    'assets/itImages/analyze.png',
  ];

  public whyChooseUsList!: any[];

  constructor(private titleService: Title, private metaService: Meta) {}
  private setMetaData(): void {
    this.titleService.setTitle('SprintPark | Your IT Consulting Experts');
    this.metaService.updateTag({
      name: 'description',
      content:
        'SprintPark offers personalized services including infrastructure, assessment, and design. Let our experts enhance your IT setup and drive your business goals forward. ',
    });
  }

  public ngOnInit(): void {
    this.setMetaData();
    this.whatList = [
      {
        image: 'assets/itImages/infra1.png',
        title: 'IT Infrastructure Consulting',
        link: '/it-infra',
        description:
          'Our infrastructure consulting services help companies create a stable IT environment. This helps the organization function smoothly in a modern business setup, improve overall collaboration, and ultimately improve profitability. Our services include: IT Strategy Planning and Implementation Remote Infrastructure Monitoring Cloud Hosting and Support IT Service Management.',
        btn: 'more',
      },
      {
        image: 'assets/itImages/infra2.png',
        title: 'IT Assessment',
        link: '/it-assess',
        description:
          'Our IT assessment services ensure that your applications, software, and infrastructure meet your business needs. We perform a comprehensive review, closely examining your applications code to determine what works well and what needs to be changed. Infrastructure Assessment Applications Assessment.',
        btn: 'more',
      },
      {
        image: 'assets/itImages/infra3.png',
        title: 'IT Design Consulting',
        link: '/it-design',
        description:
          'Our services offer you access to technology experts who will ensure smooth running systems and business processes which are a major requirement to reduce costs and increase efficiency .Our services include: Information systems planning Website development & compliance IT security and controls.',
        btn: 'more',
      },
    ];

    this.whyList = [
      'Access Professionals',
      'Get access to the team of experts who can help you in all the way to solution generation, implementation and troubleshoot. ',
      'Reduce Risk',
      'We provide a maximum security for your solutions by continuously monitoring to prevent attacks before they may happen.',
      'Reduce Cost',
      'Optimize your budget by maintaining high system performance without the need for full-time staff. Additionally, reduce the risk of expensive costs in the future.',
      'Objective Analysis',
      'External IT consultants can evaluate your processes to provide a point of view on how your solution works.',
    ];
    this.whyChooseUsList = [
      'Expertise and experience',
      'Our team of experts have 15+ years of experience and are skilled to give you professional advice.',
      'Flexible Engagement Models',
      'Our plans and solutions are flexible and can be tailored to all your specific needs.',
      'Client-Centric Approach',
      'Our first priority is always the client. We strive to create the best user experience for our clients.',
      'Competitive Pricing and Trusted Partnership',
      'Our prices are set so as to help your companies profitability and growth. We value integrity which can be seen in our work.',
    ];
  }
}
