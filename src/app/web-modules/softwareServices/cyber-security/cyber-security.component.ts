import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.scss'],
})
export class CyberSecurityComponent {
  public whatMainHeader = 'CyberSecurity';
  public heroImage = 'assets/softwareServices/cyberSecurityHero.jpg';
  public smallImage = 'assets/softwareServices/cyberMedia.jpg';
  public whatWeDo = 'What we do';
  public img = 'assets/softwareServices/workFlow.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
  public whatContent =
    'With our broad range of technical and consulting expertise, we make sure to add value to your work. Our Cybersecurity consulting services include:';

  cards = [
    {
      title: 'Cyber Security Consulting',
      text: 'Our experts deliver impactful, industry-standard services for any infrastructure or cloud platform, tailored to your unique business challenges.',
    },
    {
      title: 'Managed Security',
      text: 'Our team of experts and our range of managed security services monitor, detect, and prevent increasing cyber threats to help you stay protected.',
    },
    {
      title: 'Data Privacy',
      text: ' Our data privacy services make sure you meet regulatory and compliance demands, build trust in the data being used and help respond more efficiently to market changes and customer needs.​​',
    },
    {
      title: 'Penetration Testing',
      text: 'We assess the security of your organizations network from an external perspective by completing a penetration test. we analyze your software vulnerabilities and mend them.',
    },
  ];

  public howWeWorkcards = [
    {
      title: 'Understand',
      description:
        'We learn about your business challenges, goals and ambitions, strategic drivers and culture.',
    },
    {
      title: 'Assess',
      description:
        'We assess your current risk position relative to your needs and goals, and develop a roadmap for optimizing your cybersecurity.',
    },
    {
      title: 'Design',
      description:
        'We design solutions, processes and strategies that allow you to achieve the desired state of security and effectiveness.',
    },
    {
      title: 'Implement',
      description:
        'We draw on our experience and expertise to implement the agreed technical solutions, governance, compliance frameworks and migration processes.',
    },
    {
      title: 'Manage and Optimize',
      description:
        'We operate to deliver tangible, value-added cyber security on a 24/7 basis. We use our methodology to evolve and optimize your solution over time, to maximize value.',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Your Trusted Partner for Cybersecurity Solutions'
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          "Protect your data and operations with SprintPark's comprehensive cybersecurity services, including consulting, managed security, data privacy, and penetration testing.",
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
