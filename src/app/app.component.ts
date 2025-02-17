import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showHeader = true;
  public showFooter = true;
  public showChatBot = true;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route.firstChild?.snapshot.data ?? {})
      )
      .subscribe((data) => {
        this.showHeader = data['showHeader'] ?? true;
        this.showFooter = data['showFooter'] ?? true;
        this.showChatBot = data['showChatBot'] ?? true;
      });
  }
}
