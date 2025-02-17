import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-govt',
  templateUrl: './govt.component.html',
  styleUrls: ['./govt.component.scss'],
})
export class GovtComponent {
  public img = 'assets/industries/govtHero.jpg';
  public industryImg = 'assets/industries/govtImg.jpg';
  public itHeader = 'Government';
  public itContent =
    "Governments are entrusted with a wide range of responsibilities including maintaining security, promoting and supporting economic growth, meeting the needs of their citizens, and maintaining infrastructure.In fulfilling these responsibilities, governments face many challenges such as attracting top talent, protecting the privacy and confidentiality of sensitive information, managing major programmes while limiting fraud and abuse, managing crises, and driving innovation to meet changing expectations.SprintPark offers tailored solutions; we never assume a one-size-fits-all approach can address a client's unique needs. Our Government teams across the globe are ready to deliver deep expertise, objective insights, a tailored approach, and unparalleled collaboration to help government leaders confidently face the future.";

  cards = [
    {
      title: 'Risk Management',
      description:
        'Risk management in the public sector is a practice that safeguards resources, services, and upholds public trust. It involves identifying, assessing, and mitigating risks.',
      link: '/projectManagement',
    },
    {
      title: 'IT Consulting',
      description:
        'IT helps government agencies communicate and work together better. Shared databases and applications allow agencies to share information and collaborate on policies. ',
      link: '/it-consulting',
    },
    {
      title: 'CyberSecurity',
      description:
        'By implementing defenses against the cyberattacks government agencies can reduce their risk of data breaches and other disruptive and damaging cyberattacks.',
      link: '/cyberSecurity',
    },
    {
      title: 'Managed solutions',
      description:
        'We work with the civil service by designing and implementing improvements to their structures, processes and systems.',
      link: '/softwareServices',
    },
    {
      title: 'Project Management',
      description:
        'In development projects,authorities can apply project management as a particular technique to ensure that the objectives of development policies and programmes are attained with an optimal utilisation of scarce public resources.',
      link: '/projectManagement',
    },
    {
      title: 'Data Analytics',
      description:
        ' We help in making improved decisions, enhance productivity, and better services for citizens with access to real-time data insights, improve transparency into governments data collection and usage policies to build citizen trust.',
      link: '/dataAnalytics',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Specialized Solutions for Government'),
      this.meta.updateTag({
        name: 'description',
        content:
          'SprintPark delivers expert solutions for government sectors, including risk management, cybersecurity, and data analytics. We help boost transparency, security, and efficiency.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
