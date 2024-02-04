import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor() {}
  @Input('sidenav')
  sidenav!: MatSidenav;
  @Input() navBarData: any;
  toggle: boolean = false;
}
