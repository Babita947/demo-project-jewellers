import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor() {}
  originalData: any = [];
  toggle: boolean = false;
  navBarData: any = [
    {
      id: 1,
      name: 'Item 1',
      active: false,
      children: [
        {
          id: 2,
          name: 'Child 1',
          active: false,
          children: [
            {
              id: 5,
              name: 'Grandchild 1',
              active: false,
            },
            {
              id: 6,
              name: 'Grandchild 2',
              active: false,
            },
          ],
        },
        {
          id: 3,
          name: 'Child 2',
          active: false,
        },
      ],
    },
    {
      id: 4,
      name: 'Item 2',
      active: false,
      children: [
        {
          id: 7,
          name: 'Child 3',
          active: false,
          children: [
            {
              id: 8,
              active: false,
              name: 'Grandchild 3',
            },
          ],
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.originalData = this.navBarData;
  }

  makeitActive(id: number) {
    this.navBarData = this.originalData;
    if (this.toggle) {
      this.navBarData = this.navBarData.find(
        (item: any) => item.id === id
      )?.children;
    }
  }

  toggleMenu() {
    this.toggle = !this.toggle;
    if (!this.toggle) {
      this.navBarData = this.originalData;
    }
  }
}
