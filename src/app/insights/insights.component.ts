import { Component, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent {
  public whatHeader = 'Insights';
  public isMobile: boolean = false;
  public smallImage = 'assets/insights/insightsMediaImg.jpg';
  public heroImage = 'assets/insights/insightsHero.jpg';
  alignRight!: true;
  cards = [
    {
      link: '/insightsBlog',
      section: 'marketing',
      imageUrl: 'assets/insights/insights11.jpg',
      text: 'Achieving Marketing Excellence: Boost Your Campaigns Using Synergy of Salesforce Marketing Cloud & Salesforce Data Cloud',
    },

    {
      link: '/insightsBlog',
      section: 'flowBuilder',
      imageUrl: 'assets/insights/insights3.jpg',
      text: 'Automate your business process through Salesforce Flow Builder',
    },
    {
      link: '/insightsBlog',
      section: 'automateYourBusinessThroughSalesforceBuilder',
      imageUrl: 'assets/insights/insights4.jpg',
      text: 'Deep Dive into Salesforce Health Cloud changing Healthcare Industry',
    },
    {
      link: '/insightsBlog',
      section:
        'empoweringSmallBusinesses:UnleashingThePotentialOfSalesforceCRM',
      imageUrl: 'assets/insights/insights5.jpg',
      text: 'Empowering small Businesses:Unleashing the potential of Salesforce CRM',
    },
    {
      link: '/insightsBlog',
      section: 'exploringThePotentialOfSalesforceAnalyticsCloud',
      imageUrl: 'assets/insights/insights6.jpg',
      text: 'Exploring the Potential of Salesforce Analytics Cloud: A Complete Guide to boost Business Intelligence',
    },

    {
      link: '/insightsBlog',
      section: 'exposingTheTemptingBenefitsOfChoosingSalesforceCustomization',
      imageUrl: 'assets/insights/insights8.jpg',
      text: 'Exposing the tempting benefits of choosing Salesforce Customization',
    },
  ];
  ngOnInit() {
    this.checkScreenSize();
    this.setMetaData();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle(
      'Insights from SprintPark | Salesforce & Business Intelligence'
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'Explore SprintPark’s insights on Salesforce solutions and business intelligence. Learn how to boost your marketing campaigns and automate processes effectively. ',
      });
  }
}
