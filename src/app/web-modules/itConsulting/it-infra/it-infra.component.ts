import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-infra',
  templateUrl: './it-infra.component.html',
  styleUrls: ['./it-infra.component.scss'],
})
export class ItInfraComponent {
  public whatMainHeader = 'IT Infrastructure';

  public heroImage = 'assets/itImages/itInfraHero.jpg';

  public data!: any[];
  public smallImage = 'assets/itImages/itInfraImg.jpg';

  constructor(private titleService: Title, private metaService: Meta) {}
  private setMetaData(): void {
    this.titleService.setTitle(
      'SprintPark | Comprehensive IT Infrastructure Services & Support'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'SprintPark delivers IT infrastructure solutions with 24/7 monitoring, remote management, and cloud hosting to ensure seamless operations and increased business efficiency.',
    });
  }
  public ngOnInit(): void {
    this.setMetaData();
    this.data = [
      {
        image: 'assets/itImages/infraConsult1.jpg',
        title: 'IT Strategy Planning and Implementation',
        description:
          'SprintPark offers a wide range of IT infrastructure services to monitor and support IT systems, applications and infrastructure 24/7. This helps businesses focus on their core business without having to worry about managing the IT services that support their business.\n Through detailed and accurate analysis of your IT processes, we can analyze problems and provide solutions to processes by offering solution.',
      },
      {
        image: 'assets/itImages/infraConsult2.png',
        title: 'Remote Infrastructure Management',
        description:
          'SprintPark offers 24/7 remote maintenance and troubleshooting solutions to ensure your IT equipment and systems run smoothly without pause.\nBenefits include cost savings, increased availability, reduced risk, and increased productivity, flexibility, and efficiency.',
      },
      {
        image: 'assets/itImages/infraConsult4.jpg',
        title: 'IT Service Management',
        description:
          'SprintPark provides insights into your company’s current project management, marketing, web and application development processes. By understanding your company’s goals, we will manage the planning, implementation and working of your company’s new IT infrastructure.\n We also undertake to manage your IT processes with necessary changes.',
      },
      {
        image: 'assets/itImages/infraConsult3.jpg',
        title: 'Cloud Hosting and Support',
        description:
          'As part of our offering, we also provide cloud hosting and support to help you use cloud features in public or third-party data centers when needed.\n The cloud offers options and benefits related to faster resolution and lower usage and operating costs.',
      },
    ];
  }
}
