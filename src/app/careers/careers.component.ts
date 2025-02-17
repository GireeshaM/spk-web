import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
  public source = 'http://www.google.com/custom?q=&btnG=Search';
  cards = [
    {
      title: 'Growth',
      description:
        'We are dedicated to providing a workplace where employees can grow and thrive.',
      points: ['Equal Opportunities', 'Career Advancement'],
      image: 'assets/careers/growBw.png',
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerLearnCard.png',
    },
    {
      title: 'Compensation and Benefits',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerCompCard.png', // Replace with your image path
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerProfCard.png', // Replace with your image path
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerWorkCard.png', // Replace with your image path
    },
  ];

  demoCards = [
    {
      title: 'Growth',
      description:
        'We are dedicated to providing a workplace where employees can grow and thrive.',
      points: ['Equal Opportunities', 'Career Advancement'],
      image: 'assets/careers/growBw.png',
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerLearnCard.png',
    },
    {
      title: 'Compensation and Benefits',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerCompCard.png', // Replace with your image path
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerProfCard.png', // Replace with your image path
    },
    {
      title: 'Learning',
      description:
        'Every employee should get their fair share of opportunities to share their ideas and become a part of the organization’s success.',
      points: ['Technical and Leadership Training', 'Team Building Workshops'],
      image: 'assets/careers/careerWorkCard.png', // Replace with your image path
    },
  ];

  constructor(private meta: Meta, private title: Title) {}

  private setMetaData(): void {
    this.title.setTitle('Careers at SprintPark | Grow with Us'),
      this.meta.updateTag({
        name: 'description',
        content:
          'Join SprintPark for a dynamic career with competitive salaries, flexible hours, and a supportive culture. We offer equal opportunities, professional development, and work-life balance.',
      });
  }
  public ngOnInit(): void {
    this.setMetaData();
  }
}
