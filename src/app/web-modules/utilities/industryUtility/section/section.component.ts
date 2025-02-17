import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() img!: string;
  @Input() itHeader!: string;
  @Input() itContent!: string;
  @Input() cards: { title: string; description: string; link: string }[] = [];
  @Input() isTwoPerRow: boolean = false;
  @Input() headerBgImg!: string;
  @Input() industryImg!: string;

  getCardClass(index: number): string {
    const classes = [
      'background-1',
      'background-2',
      'background-3',
      'background-4',
      'background-5',
      'background-6',
    ];
    return classes[index % classes.length];
  }
}
