import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-tele',
  templateUrl: './it-tele.component.html',
  styleUrls: ['./it-tele.component.scss'],
})
export class ItTeleComponent {
  public headerBg = 'assets/industries/itTeleHero.jpg';
  public itHeader = 'IT & TeleCommunications';
  public industryImg = 'assets/industries/teleImg.jpg';

  public itContent =
    ' Telecommunications organizations have achieved incredible growth as their businesses have become increasingly demanded by consumers across both B2B and B2C sectors. With this growth comes an increased amount of opportunity, a responsibility to maintain consumer trust, and a need to proactively manage risk. Simultaneously, the industry is facing a focus on compliance and is undergoing rigorous regulatory scrutiny. During this critical growth period, our team is here to help your business take a comprehensive approach to scale, drive and achieve business growth, establish and maintain effective governance,risk, and compliance programme, as well as adapt to a rapidly changing market. We work with Telecommunications organizations of all sizes and across all business lifecycle stages to achieve a strategic approach for the future.';
  cards = [
    {
      title: 'Data Privacy',
      description:
        'SprintPark analyzes data privacy risks that may include unauthorized access, theft, loss, or disclosure of data, as well as legal or regulatory penalties.',
      link: '/cyberSecurity',
    },
    {
      title: 'Automation',
      description:
        'Automated communications uses technology to automate routine communication tasks, such as email, SMS, and social media messaging, to reach customers at scale.',
      link: '/aiAutomation',
    },
    {
      title: 'Infrastructure',
      description:
        'Infrastructure services include communication services, networking, data processing and storage, platforms through which businesses can share content and media.',
      link: '/it-infra',
    },
    {
      title: 'Security',
      description:
        'SprintPark analyzes data privacy risks that may include unauthorized access, theft, loss, or disclosure of data, as well as legal or regulatory penalties.',
      link: '/cyberSecurity',
    },
    {
      title: 'Managed Solutions',
      description:
        'SprintPark can manage everything from private servers to computers, mobile devices, printers, cybersecurity, and data storage.',
      link: '/softwareServices',
    },
  ];

  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Cutting-Edge IT & Telecommunications Solutions'
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'Discover how SprintPark’s telecom solutions enhance data privacy, automate processes, and secure your systems. We offer tailored support for growth and compliance in the telecom sector. ',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
