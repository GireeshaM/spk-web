import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.scss'],
})
export class HealthCareComponent {
  public img = 'assets/industries/industry3.png';
  public industryImg = 'assets/industries/healthImg.jpg';
  public itHeader = 'Healthcare & Life Sciences';
  public itContent =
    'The complexity of risks facing life sciences and pharmaceutical companies is greater than ever before. From IP protection to areas such as supply chain challenges, we understand the impact these risks have on how life sciences and pharmaceutical companies do business. We build custom solutions that maximize your chances for success, deploying a tailored, multidisciplinary team of professionals who fit your situation and company culture.Our team of experienced professionals are your resources for understanding and managing the multitude of changes and risks affecting healthcare. Whether your organizations chief concern is payment reform, regulatory compliance, revenue growth, cost management, cybersecurity or digital transformation, SprintPark is here for you.';
  cards = [
    {
      title: 'Automation',
      description:
        'AI can be used to increase operational efficiency and patient monitoring and status. AI can also be used for imaging, diagnostics, personal medicine and drug discovery.',
      link: '/aiAutomation',
    },
    {
      title: 'Network Engineering',
      description:
        ' We can design and maintain efficient network infrastructures necessary for the easy operation of healthcare systems, telemedicine services, and patient data management.',
      link: '/networkEngineering',
    },
    {
      title: 'Cybersecurity',
      description:
        ' We can ensure protection of patient data and systems from cyber threats by implementing security protocols, conducting risk assessments, and ensuring compliance with regulations.',
      link: '/cyberSecurity',
    },
    {
      title: 'Project Management',
      description:
        'We can oversee projects like electronic health record (EHR) implementations, health information exchanges, or large-scale IT system upgrades, making sure they are completed on time.',
      link: '/projectManagement',
    },
    {
      title: 'Staffing solutions',
      description:
        'We can provide specialized talent for healthcare IT roles, such as systems analysts, project managers, data scientists, and cybersecurity experts.',
      link: '/staffingSolutions',
    },
    {
      title: 'Cloud',
      description:
        'We can assist with migrating healthcare applications and data to the cloud, providing scalable and secure storage solutions, as well as enabling remote access to data and applications for healthcare professionals.',
      link: '/salesforceServices',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Advanced Healthcare Solutions'),
      this.meta.updateTag({
        name: 'description',
        content:
          'Dive into SprintPark’s solutions for healthcare and life sciences. We offer AI automation, cybersecurity, project management, and staffing to enhance efficiency and drive digital transformation.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
