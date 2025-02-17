import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-software-service-work-flow',
  templateUrl: './software-service-work-flow.component.html',
  styleUrls: ['./software-service-work-flow.component.scss'],
})
export class SoftwareServiceWorkFlowComponent {
  @Input() howWeWorkcards: { title: string; description: string }[] = [];

  cardBgColors = ['#00375F', '#00538F', '#0070C0', '#2A93FB', '#40B0FF'];

  innerCardBgColors = ['#002D4D', '#004074', '#005A9A', '#2276CA', '#338DCD'];

  getCardStyle(index: number) {
    return {
      'background-color': this.cardBgColors[index % this.cardBgColors.length],
      'margin-left': 50 - index * 10 + '%',
    };
  }

  getInnerCardStyle(index: number) {
    return {
      'background-color':
        this.innerCardBgColors[index % this.innerCardBgColors.length],
    };
  }
}
