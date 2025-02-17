import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-it-assess',
  templateUrl: './it-assess.component.html',
  styleUrls: ['./it-assess.component.scss'],
})
export class ItAssessComponent {
  public data!: any[];

  public whatMainHeader = 'IT Assessment';

  public heroImage = 'assets/itImages/itAssessHero.jpg';
  public smallImage = 'assets/itImages/itAssessMedia.jpg';
  constructor(private titleService: Title, private metaService: Meta) {}
  private setMetaData(): void {
    this.titleService.setTitle(
      'SprintPark | Expert IT Infrastructure & Application Assessments'
    );
    this.metaService.updateTag({
      name: 'description',
      content:
        'SprintPark evaluates your IT infrastructure and applications and provides actionable insights and solutions to enhance technology alignment and optimize business processes.',
    });
  }
  public ngOnInit(): void {
    this.setMetaData();
    this.data = [
      {
        image: 'assets/itImages/assess1.jpg',
        title: 'Infrastructure Assessment',
        description:
          'Sprintpark reviews your current state by analyzing your businesses processes, technology and technology platforms (servers, network, computers, email and others). We’ll provide a report with potential solutions on how to achieve a better state with optimized technology and applications.',
      },
      {
        image: 'assets/itImages/assess2.jpg',
        title: 'Application Assessment',
        description:
          'SprintPark analyzes how good your applications align with your current and future service needs and technical requirements and provides potential solutions.',
      },
    ];
  }
}
