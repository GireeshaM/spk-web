import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-design',
  templateUrl: './it-design.component.html',
  styleUrls: ['./it-design.component.scss'],
})
export class ItDesignComponent {
  public data!: any[];

  public whatMainHeader = 'IT Design';

  public heroImage = 'assets/itImages/infraDesignHero.jpg';
  public smallImage = 'assets/itImages/itDesignMedia.jpg';
  constructor(private titleService: Title, private metaService: Meta) {}
  private setMetaData(): void {
    this.titleService.setTitle(
      'SprintPark | Your Trusted Partner for Tailored IT Solutions'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'SprintPark specializes in systems planning, website development, and security audits. Our solutions ensure your technology aligns with business goals and meets industry standards.',
    });
  }
  public ngOnInit(): void {
    this.setMetaData();
    this.data = [
      {
        image: 'assets/itImages/design1.jpg',
        title: 'Informations  Systems Planning',
        description:
          'SprintPark understands the goals and missions that the client wants to achieve and drafts a roadmap. After outlining goals and strategy, the level of automation is decided. All components of the information systems, including hardware and software dependencies, requirements, and target timelines, needs are deduced. After the technological and system components have been realized and derived with the help of an expert systems analyst, the team proceeds to define the exact initiative plans to lead the company.',
      },
      {
        image: 'assets/itImages/design2.jpg',
        title: 'Website Development and Compliance ',
        description:
          'SprintPark designs layout, brand identity, user experience and manages performance keeping in mind your business goals and who your customers are and why they’re coming to your site. \n SprintPark also keep in mind the compliances that have to be followed. Data protection, cookies, privacy policies and other legal compliances are followed.',
      },
      {
        image: 'assets/itImages/design3.jpg',
        title: 'IT Security and Controls',
        description:
          'SprintPark scans through your systems and infrastructure for security risks and uses  cutting-edge security tools to identify and prevent online threats, protecting the infrastructure and private information. \n SprintPark also mitigates the consequences of security breaches and minimizes downtime. By conducting thorough security audits and assessments, we assist companies in maintaining compliance with industry rules and standards.',
      },
    ];
  }
}
