import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salesforce-services',
  templateUrl: './salesforce-services.component.html',
  styleUrls: ['./salesforce-services.component.scss'],
})
export class SalesforceServicesComponent {
  public whatMainHeader = 'Salesforce Services';
  public heroImage = 'assets/softwareServices/salesforceHero.jpg';
  public smallImage = 'assets/softwareServices/salesforceMedia.jpg';
  public whatWeDo = 'What we do';
  public img = 'assets/softwareServices/workFlow.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
  public whatContent =
    'With our broad range of technical and consulting expertise,we make sure to add value to your work.Our salesforce consulting services include:';

  public cards = [
    {
      title: 'Salesforce Implementation',
      text: 'We work with companies to deploy and configure Salesforce to match their specific needs.We implement sales cloud, service cloud, marketing cloud and many more customized to your needs.',
    },
    {
      title: 'Salesforce Support',
      text: 'With active Salesforce support, we will help you with platform maintenance, enhancements, optimization and more. Get the specialized support and technical assistance you need.',
    },
    {
      title: 'Salesforce Managed Services',
      text: 'We maximize your salesforce investments, address all your CRM issues in real time, provide user support and suggest continuous improvements across your salesforce platform.',
    },
    {
      title: 'Salesforce Customization',
      text: 'From changing Salesforce components or adding newly developed pieces to adapt the CRM system to the company’s demands, SprintPark does all the work for you.',
    },
    {
      title: 'Salesforce Development Services',
      text: 'We develop functionalities that are required to streamline your business that are not in-built by salesforce. We build solutions for your Sales Cloud, Service Cloud, Salesforce CPQ, Field Service Lightning, Salesforce Industries.',
    },
    {
      title: 'Salesforce Integration',
      text: 'We help to create a unified and centralized system that communicates with all the other parts. We offer solutions in marketing, E-commerce, Communications, Data , Storage and many others.',
    },
  ];

  public howWeWorkcards = [
    {
      title: 'Discovery',
      description:
        'We gather information from the merchants to understand their needs.',
    },
    {
      title: 'Design',
      description:
        'We document requirements, designs, settings and other requirements.',
    },
    {
      title: 'Development',
      description:
        'Our team builds the applications based on the requirements, designs.',
    },
    {
      title: 'Quality Assessment',
      description:
        'The team tests the developed applications and suggests betterments.',
    },
    {
      title: 'User Acceptance',
      description:
        'The applications are tested and we make modifications if required.',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      "Optimize Your Business with SprintPark's Salesforce Solutions"
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          "From implementation to integration, SprintPark's Salesforce experts help you maximize your CRM investment and streamline operations.",
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
