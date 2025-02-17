import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insights-blog',
  templateUrl: './insights-blog.component.html',
  styleUrls: ['./insights-blog.component.scss'],
})
export class InsightsBlogComponent {
  currentSection: string = 'marketing'; // Default section
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Listen for query parameter changes
    this.route.queryParams.subscribe((params) => {
      this.currentSection = params['section'] || 'marketing';
    });
  }
}
