import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-static-header',
  templateUrl: './static-header.component.html',
  styleUrls: ['./static-header.component.css'],
})
export class StaticHeaderComponent implements OnInit {
  title: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.setTitle();
  }

  back() {
    history.back();
  }

  checkConditionForBackButton() {
    return window.location.href.includes('home');
  }

  setTitle() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.title = this.route?.root?.firstChild?.snapshot.data['title'];
      }
    });
  }
}
