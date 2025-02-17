import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss'],
})
export class BigDataComponent {
  public whatMainHeader = 'Big Data';
  public heroImage = 'assets/softwareServices/bigDataHero.jpg';
  public smallImage = 'assets/softwareServices/bigDataMedia.jpg';
  public whatWeDo = 'What we do';
  public whatContent =
    'With our broad range of technical and consulting expertise, we make sure to add value to your work. Our Big Data services include:';

  public cards = [
    {
      title: 'Big Data Consulting',
      text: 'We provide various written and strategy-based advice for getting started with Big Data tech. We partner with you to identify ideal opportunities, design your data story & implement impactful solutions for your business growth.',
    },
    {
      title: 'Data Integration & ETL',
      text: 'Are you struggling to unify data spread across different systems? We’ve got you covered. ETL: Keeps your data clean and consistent. This is to have complete data for analysis — a good foundation for your Big Data projects.',
    },
    {
      title: 'Data Warehousing',
      text: 'We scale out smart data warehousing solutions for storing & servicing tons of data efficiently and proactively. We have performance, scale, and safety Locks. That is to say, quick and dependable access at any moment.',
    },
    {
      title: 'Data Visualization',
      text: 'Need to make sense of your data? We develop interactive visualizations that simply things more visible and founded. Simply transform complicated information to graphic which is straightforward that will help you detect developments and insights immediately.',
    },
    {
      title: 'Data Governance & Security',
      text: 'Security of your data is paramount for us! We always have thorough initiatives of handling with the data quality, compliance management for monitoring access and controls including encrypted service so your information could be safe & dependable.',
    },
    {
      title: 'Big Data Analytics',
      text: 'Let’s dive into your data! You need discovering information, so we provide our advanced analytic services. We use high-performing tools and techniques in order to do descriptive, predictive and prescriptive analytics which help you in decision making by the data.',
    },
  ];
  public howWeWorkcards = [
    {
      title: 'Data Discovery',
      description:
        'We start by gaining a deep understanding of your business challenges, objectives, strategic drivers, and organizational culture. This foundational knowledge helps us tailor our solutions to meet your unique needs.',
    },
    {
      title: 'Data Ingestion',
      description:
        'We gather and integrate data from various internal and external sources into a centralized system, ensuring a comprehensive and up-to-date view of your data for effective analysis.',
    },
    {
      title: 'Data Processing',
      description:
        'We develop tailored processes and strategies to transform raw data into actionable insights, enabling you to meet your operational goals and improve overall efficiency.',
    },
    {
      title: 'Data Storage & Analysis',
      description:
        'With our expertise, we securely store your data, implement governance frameworks, and perform in-depth analysis to extract meaningful insights, ensuring optimal data management and decision-making.',
    },
    {
      title: 'Data Visualization & Optimization',
      description:
        'We transform your data into easy-to-understand visual formats and continuously refine our approach to ensure that your solutions are optimized for long-term value and growth.',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Empower Your Business with Big Data'),
      this.meta.updateTag({
        name: 'description',
        content:
          "SprintPark's Big Data experts offer tailored solutions for data integration, warehousing, analytics, and visualization, helping you make data-driven decisions.",
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
