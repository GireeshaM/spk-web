import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  public headerBg = 'assets/industries/industry4.png';
  public industryImg = 'assets/industries/bankingImg.jpg';
  public itHeader = 'Banking';
  public itContent =
    'Technology is rapidly evolving and digital adoption is accelerating. Regulatory obligations are increasing in scope and complexity. Global events continue to challenge the financial industry, increasing existing and exposing new risks. Banking and capital markets firms are facing demanding customer expectations to deliver seamless and uninterrupted services alongside with rising cost pressures and regulatory scrutiny.SprintPark helps financial institutions to be more effective and efficient in a way that is risk-sensitive, regulatory compliant, well-controlled, and enabled by leading technologies.';
  cards = [
    {
      title: 'Big Data',
      description:
        'We handle large volumes of financial data for risk assessment, to oversee transactions and for customer reviews, helping in better decision-making and predictive analytics.',
      link: '/bigData',
    },
    {
      title: 'Salesforce',
      description:
        'We implement and customize Salesforce solutions for customer relationship management (CRM), client onboarding, and managing financial services interactions. ',
      link: '/salesforceServices',
    },
    {
      title: 'CyberSecurity',
      description:
        'We help to protect sensitive financial data and systems from cyber threats by implementing security measures, conducting regular security audits, and meeting industry regulations.',
      link: '/cyberSecurity',
    },
    {
      title: 'Project Management',
      description:
        'We manage projects like digital banking initiatives, regulatory compliance upgrades, and new technology implementations to ensure timely and successful delivery.',
      link: '/projectManagement',
    },
    {
      title: 'AI',
      description:
        'We implement AI solutions for personalized banking experiences, fraud detection, chatbots for customer service, and predictive analytics for financial planning.',
      link: '/aiAutomation',
    },
  ];
  constructor(private meta: Meta, private title: Title) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Advanced Solutions for Banking'),
      this.meta.updateTag({
        name: 'description',
        content:
          'SprintPark provides cutting-edge solutions for the banking sector, including Big Data, Salesforce CRM, and cybersecurity. We help ensure compliance and operational excellence.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
