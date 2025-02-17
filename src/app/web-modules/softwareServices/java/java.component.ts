import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss'],
})
export class JavaComponent {
  public whatMainHeader = 'Java';
  public heroImage = 'assets/softwareServices/javaHero.jpg';
  public smallImage = 'assets/softwareServices/javaMedia.jpg';

  public whatWeDo = 'What we do';
  public whatContent =
    'We have a wide range of skills in both technical & consulting areas. This helps to add real value to your work. Here’s what our Java development services can provide for your organization:';
  public img = 'assets/softwareServices/workFlow.png';
  public icon = 'assets/softwareServices/workFlowIcon.png';
  public cards = [
    {
      title: 'Java Application Development',
      text: 'We develop strong, scalable, high-performance Java applications as per your business requirements. Whether it’s big enterprised apps or detailed web services, we come up with unique solutions to help you for  your organization growth & better performance.',
    },
    {
      title: 'Java Maintenance & Support',
      text: 'Our friendly support team is always here for you to assist on any kind of issues. We will provide ongoing maintenance, issue fixes, and optimize your Java apps.',
    },
    {
      title: 'Java Integration Services',
      text: 'We make it easy to connect your Java applications with the systems already you have. This ensures the data and communication flow nicely across all the platforms. Our integration covers lots of systems—like databases, CRM, ERP, & more.',
    },
    {
      title: 'Java Migration Services',
      text: 'Need to update old systems? We can help move your legacy systems to new Java-based solutions! Our smart experts will take care of everything—from moving data to upgrading systems—making sure it all goes smoothly with less fuss.',
    },
    {
      title: 'Java Web Development',
      text: 'Our team shines at building dynamic web apps packed with most of the Unique features using Java. We use cool frameworks like Spring, Hibernate, & Struts to create web solutions that are not just responsive but also super user-friendly.',
    },
    {
      title: 'Java Enterprise Solutions',
      text: 'Looking for complete Java enterprise solutions? We’ve got you covered! We work on large-scale distributed systems and enterprise applications so your business runs smoothly, will be easy to scale up & stay secure.',
    },
    {
      title: 'Java API Development',
      text: 'We design & develop powerful APIs that boost the functionality of your Java applications. Our APIs are safe, scalable & simple to integrate with other systems ensuring everything works perfectly together.',
    },
    {
      title: 'Java Custom Software Development',
      text: 'We deliver software made just for you! From the very start till deployment, we walk alongside you to build custom Java software that tackles your specific challenges and helps reach your goals a lot easier.',
    },
  ];
  public howWeWorkcards = [
    {
      title: 'Requirements Gathering',
      description:
        'We learn about your goals and ambition, and list down requirements and prioritize them.',
    },
    {
      title: 'Design and Architecture',
      description:
        'Our Java architects design the architecture of Java-based software systems and applications.',
    },
    {
      title: 'Development',
      description:
        'Our Java developers code everything from mobile apps and enterprise software to big data applications and server-side technologies.',
    },
    {
      title: 'Testing',
      description:
        'We test the code and make any modifications that are required to acheive maximum user experience.',
    },
    {
      title: 'Deployment and Maintanance',
      description:
        'We deploy the application or software to the client for their acceptance and make any necessary changes based on their feedback. We also offer 24/7 maintenance support. ',
    },
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle(
      'SprintPark | Your Trusted Partner for Java Development '
    ),
      this.meta.updateTag({
        name: 'description',
        content:
          "From custom development to migration, SprintPark's Java experts build scalable, efficient solutions that align with your business goals. ",
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
}
