import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-software-main',
  templateUrl: './software-main.component.html',
  styleUrls: ['./software-main.component.scss'],
})
export class SoftwareMainComponent implements OnInit {
  public whatMainHeader = 'Software Services';

  public heroImage = 'assets/softwareServices/softwareHero.jpg';
  public smallImage = 'assets/softwareServices/softwareMedia.jpg';

  cards = [
    {
      image: 'assets/softwareServices/cyberImg.png',
      title: 'Cyber Security',
      link: '/cyberSecurity',
    },
    {
      image: 'assets/salesforce.png',
      title: 'Salesforce',
      link: '/salesforce-services',
    },
    {
      image: 'assets/softwareServices/ai.png',
      title: 'AI and Automation',
      link: '/aiAutomation',
    },
    {
      image: 'assets/softwareServices/nE.png',
      title: 'Network Engineering',
      link: 'networking',
    },
    {
      image: 'assets/softwareServices/dataA.png',
      title: 'Data Analytics',
      link: 'dataAnalytics',
    },
    {
      image: 'assets/softwareServices/bigData.png',
      title: 'Big Data',
      link: 'bigData',
    },
    {
      image: 'assets/softwareServices/java.png',
      title: ' Java',
      link: 'java',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Tailored Software Solutions for Your Needs '
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'Explore SprintPark’s diverse software services, from Big Data and Cyber Security to Salesforce and AI. We provide customized solutions to meet the unique needs of your business.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
