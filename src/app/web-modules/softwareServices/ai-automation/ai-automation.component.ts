import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-automation',
  templateUrl: './ai-automation.component.html',
  styleUrls: ['./ai-automation.component.scss'],
})
export class AiAutomationComponent {
  public whatMainHeader = 'AI and Automation';
  public smallImage = 'assets/softwareServices/aiMedia.jpg';
  public heroImage = 'assets/softwareServices/aIHero.jpg';
  public whatWeDo = 'What we do';
  public whatContent =
    'With our broad range of technical and consulting expertise, we make sure to add value to your work. Our AI and Automation consulting services include:';

  cards = [
    {
      title: 'Generative AI',
      text: 'From IT infrastructure, businesses to customer satisfaction, our AI-driven solutions optimize operations,increase efficiency, and unlock new business possibilities. ',
    },
    {
      title: 'AI/ML',
      text: 'SprintParks AI/ML services streamline the development, deployment, and management of AI models, enabling businesses to use data-driven insights and accelerate innovation.',
    },
    {
      title: 'Hyper Automation',
      text: 'Hyper automation services empower businesses to optimize processes, enhance efficiency, and drive innovation by automating repetitive tasks, streamlining workflows, and leveraging data-driven insights.',
    },
    {
      title: 'Natural Language Processing (NLP)',
      text: 'By providing NLP solutions, organizations can analyse and interpret unstructured data and gain insightful knowledge from text-based sources.',
    },
  ];

  public weOfferCards = [
    {
      title: 'Discovery',
      text: 'We gather information from the merchants.',
    },
    {
      title: 'Design',
      text: 'We document all requirements, designs, configurations, and specifications.',
    },
    {
      title: 'Development',
      text: 'Our developers build the applications.',
    },
    {
      title: 'Quality Assessment',
      text: 'The team tests the developed applications and suggests betterments.',
    },
    {
      title: 'User Acceptance',
      text: 'The merchants test the applications and we make modifications if required.',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Empowering Businesses with Cutting-Edge IT Solutions'
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          'SprintPark offers a wide range of IT services, including AI/ML, automation, software development, and staffing. We help businesses achieve their goals and stay ahead of the curve.',
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
