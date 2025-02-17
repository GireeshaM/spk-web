import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-software-service-what',
  templateUrl: './software-service-what.component.html',
  styleUrls: ['./software-service-what.component.scss'],
})
export class SoftwareServiceWhatComponent {
  @Input() whatWeDo!: string;
  @Input() whatContent!: string;
  @Input() cards: { title: string; text: string }[] = [];
  @Input() isTwoPerRow: boolean = false;
}
