import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
})
export class ProjectManagementComponent implements OnInit {
  // Main Hero
  public whatMainHeader = 'Project Management';
  public heroImage = 'assets/projectManagement/projectHero.jpg';
  public smallImage = 'assets/projectManagement/pmMedia.jpg';
  // Why ProjectManagement
  public whyheader = 'Why Project Management?';
  public images = [
    'assets/staffing/time.png',
    'assets/icons/clock8.png',
    'assets/icons/clock9.png',
    'assets/icons/clock2.png',
  ];
  public whyList = [
    'Save Time and Money',
    'With the right planning, you can ensure that your work is delivered on time and within budget.',
    'Improve Internal Communications',
    'With more efficient project management processes, you can reduce the complexity and increase transparency.',
    'Make Better Decisions ',
    'With clearer records of how your project is progressing, you get a deeper understanding of where your resources are being spent, when and what you need to prioritize.',
    'Find Best Practises',
    'External IT consultants can audit your application to provide an objective point of view on how your solution operates.',
  ];

  constructor(private title: Title, private meta: Meta) {}
  private setMetaData(): void {
    this.title.setTitle('SprintPark | Expert Project Management Solutions'),
      this.meta.updateTag({
        name: 'description',
        content:
          'SprintPark excels in project management, offering services from implementation to consulting. Our expert team ensures efficient, on-time project delivery with strategic oversight and resource management.',
      });
  }

  public ngOnInit(): void {
    this.setMetaData();
  }
  // What Header
  public whatHeader =
    'SprintPark offers wide range of Project Management services which include';
  public whatList = [
    {
      image: 'assets/projectManagement/pmImg.png',
      title: 'Project Consulting',
      link: '/contactUs',
      description:
        'Take advantage of our wealth of knowledge to gain strategic insights and project guidance. Our consulting services offer specialized advice and solutions to meet your unique requirements and objectives.',
      btn: 'contact us',
    },
    {
      image: 'assets/projectManagement/pmImp.png',
      title: 'Project Implementation',
      link: '/contactUs',
      description:
        'From planning to rolling out, we guarantee the smooth execution of projects that achieve your targets on schedule and within your allocated budget. Our methodical approach and close attention to detail make sure the project is completed successfully.',
      btn: 'contact us',
    },
    {
      image: 'assets/projectManagement/pmAug.png',
      title: 'Project Augmentation',
      link: '/contactUs',
      description:
        'Employ our augmentation services to expand the skill set of your team. We offer qualified professionals to supplement your current workforce and quicken project completion, whether you require more resources or specific expertise.',
      btn: 'contact us',
    },
    {
      image: 'assets/projectManagement/pmOut.png',
      title: 'Project Outsourcing',
      link: '/contactUs',
      description:
        'SprintPark helps in sourcing and finding your offshore team. We’ll help you work out your hiring needs and preparing your job profiles.We’ll help you identify key performance indicators, performance targets and reporting structures for your offshore staff.',
      btn: 'contact us',
    },
  ];
}
