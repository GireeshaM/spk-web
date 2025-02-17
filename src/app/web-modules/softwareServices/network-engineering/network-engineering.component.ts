import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-network-engineering',
  templateUrl: './network-engineering.component.html',
  styleUrls: ['./network-engineering.component.scss'],
})
export class NetworkEngineeringComponent {
  public whatMainHeader = 'Network Engineering';
  public heroImage = 'assets/softwareServices/neHero.jpg';
  public smallImage = 'assets/softwareServices/networkMedia.jpg';

  public whatWeDo = 'What we do';
  public whatContent =
    'We are talented in both technology and consulting, so we will help your with added value.Our Network Engineering Services include:';
  public workFlow = 'Network Engineering WorkFlow';
  public img = 'assets/softwareServices/workFlow.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
  public cards = [
    {
      title: 'Design and Architecture of Network',
      text: 'We design network architectures as scalable and resilient as per your business requirements. Our professional team will evaluate all your requirements and craft powerful applications to ensure smooth running of the organization.',
    },
    {
      title: 'Implement and Deploy Network',
      text: 'We are proficient in implementing and deploying the network solutions. We will address everything including the install, setup/quick start and even testing to guarantee your network infrastructure is working at full capacity.',
    },
    {
      title: 'Network Monitor and Management (NMM)',
      text: '24/7 Security for Network Infrastructure. We provide real-time monitoring and incident response, as well as proactive maintenance to ensure your network is running at its best.',
    },
    {
      title: 'Cloud Networking and SD-WAN',
      text: 'We deliver cloud services and Software-Defined Wide Area Networking (SD-WAN) solutions to enhance the network performance while saving your money. High level of connectivity to connect distributed locations with our services.',
    },
    {
      title: 'Network Security',
      text: 'We provide extensive security measures to shield your network against threats and Cyber attacks. This includes firewall configuration, intrusion detection/prevention (IDPS), VPN setup and security audits to protect you data and operations.',
    },
    {
      title: 'Wireless Networking',
      text: 'Our wireless networks support your mobile work force and IoT devices, designed to be secure, reliable and scalable.',
    },
    {
      title: 'Network Virtualization and Software-Defined Networking (SDN)',
      text: 'Using wide range of virtualization technologies and well proven SDN principles, we build flexible and scalable networks. Flexible, manageable, and dynamic workload support with our solutions experts.',
    },
    {
      title: 'Network Consulting and Strategy',
      text: 'We provide tactical consultation and solutioning in assisting you to hand-make the for your specific pieces of art network infrastructure towards business objectives. Access expertise on technology adoption, network expansion and future-proofing your network investments from our experts.',
    },
  ];
  public howWeWorkcards = [
    {
      title: 'Initial Assessment',
      description:
        'We learn about your goals and requirements and list all needs.',
    },
    {
      title: 'Requirements Gathering',
      description: 'We document, gather and prioritize your requirements.',
    },
    {
      title: 'Network Design',
      description:
        'We design the physical, virtual, and logical arrangement of infrastructure in an IT network.',
    },
    {
      title: 'Deployment and Performance Testing',
      description:
        'The design is deployed and performance test is done to record metrics associated with certain devices and processes, which can allow you to analyze the data for insights and understandings.',
    },
    {
      title: 'Validation and Maintenance',
      description:
        'We give the finished Product to the client for their acceptance and make changed if any. We also have 24/7 maintenance help.',
    },
  ];
  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Optimize Your Network with Expert Engineering'
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'From design to management, SprintPark offers comprehensive network engineering solutions tailored to your business needs, ensuring optimal performance and security.',
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
