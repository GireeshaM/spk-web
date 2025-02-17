import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-it-common',
  templateUrl: './it-common.component.html',
  styleUrls: ['./it-common.component.scss'],
})
export class ItCommonComponent {
  @Input() data: any[] | undefined;

  formatText(text: string): string {
    // Replace newlines with <br> tags
    // console.log(text)
    return text.replace(/\n/g, '<br><br>');
  }
}
