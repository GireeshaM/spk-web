import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
})
export class WhatComponent {
  @Input() whatList!: any[];

  @Input() whatHeader!: string;
  @Input() btn!: string;

  public responsiveOptions!: any[];

  public ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
