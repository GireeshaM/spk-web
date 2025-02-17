import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.scss'],
})
export class DataAnalyticsComponent {
  public whatMainHeader = 'Data Analytics';
  public heroImage = 'assets/softwareServices/dataAnalyticsHero.jpg';
  public smallImage = 'assets/softwareServices/dataAnalyticsMedia.jpg';

  public whatWeDo = 'What we do';
  public whatContent =
    'With our broad range of technical and consulting expertise, we make sure to add value to your work. Our Data Analytics services include:';
  public workFlow = 'Network Engineering WorkFlow';
  public img = 'assets/softwareServices/workFlow.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
  public cards = [
    {
      title: 'Data analytics consulting',
      text: 'Our consultants help you choose an optimal data analytics strategy and guide you on designing, developing, implementing and improving a proprietary data analytics solution.',
    },
    {
      title: 'Managed data analysis',
      text: 'Our data analysts collect and process your data to deliver quick one-time or recurrent analytics insights to you.',
    },
    {
      title: 'Data analytics modernization',
      text: 'We help upgrade the existing data analytics solution to achieve maximum ROI and meet the new data analytics needs.',
    },
    {
      title: 'Data analytics implementation',
      text: 'We design and implement an analytics solution with the basic functionality to address your current data analytics needs and scale up as they grow.',
    },
  ];
  public howWeWorkcards = [
    {
      title: 'Defining the Question',
      description:
        'It involves identifying the problem or question that the analysis aims to answer. This step sets the direction for the entire analysis and ensures that the results are relevant and actionable.',
    },
    {
      title: 'Data Collection',
      description:
        'This can involve gathering existing data or generating new data through surveys, experiments, or other methods.',
    },
    {
      title: 'Data Cleaning and Preparation',
      description:
        'This involves removing errors, handling missing values, and transforming the data into a suitable format for analysis.',
    },
    {
      title: 'Data Analysis',
      description:
        'This involves applying statistical techniques, machine learning algorithms, or other methods to uncover patterns, relationships, and insights in the data.',
    },
    {
      title: 'Interpretation and Reporting',
      description:
        'This involves creating visualizations, writing reports, and presenting the findings to stakeholders.',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      "Drive Data-Driven Decisions with SprintPark's Analytics"
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          "From consulting to implementation, SprintPark's data analytics experts help you turn raw data into actionable insights for your business. ",
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
