import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kay-jewellers';

  navBarData: any = {
    isParent: true,
    children: [
      {
        id: 1,
        name: 'DEALS',
        children: [
          {
            id: 2,
            name: 'Featured Deals',
            children: [
              {
                id: 21,
                name: 'Up to 60% Off Valentine Day Deals',
                url: 'https://www.kay.com/holiday-savings/c/9000001859?icid=MM:DEALS:VDAYDEALS',
              },
              {
                id: 22,
                name: '30-40% Off Everything',
                url: 'featured-deals',
              },
              {
                id: 23,
                name: '40% Off 10-14K Gold',
              },
              {
                id: 24,
                name: '30% Off Fashion',
              },
              {
                id: 25,
                name: '30% Off Bridal',
              },
              {
                id: 26,
                name: '30% Off Personalized Fashion',
              },
            ],
          },
          {
            id: 3,
            name: 'Clearance Deals',
            children: [
              {
                id: 31,
                name: '10% Off Personalized Gifts',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'ENGAGEMENT',
        children: [
          {
            id: 7,
            name: 'Rings',
            children: [
              {
                id: 8,
                name: 'Wedding Rings',
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: 'RINGS',
        children: [],
      },
      {
        id: 10,
        name: 'NECKLACE',
        children: [],
      },
      {
        id: 11,
        name: 'EARRINGS',
        children: [],
      },
      {
        id: 12,
        name: 'BRACELETS',
        children: [],
      },
      {
        id: 13,
        name: 'PERSONALIZED',
        children: [],
      },
      {
        id: 14,
        name: 'GIFTS',
        children: [],
      },
      {
        id: 15,
        name: 'SERVICES',
        children: [],
      },
    ],
  };
  originalData: any = {};
  toggle: boolean = false;

  ngOnInit(): void {
    this.originalData = this.navBarData;
  }

  expandAndCollapse(item: any) {
    // this.navBarData = this.originalData;
    if (item?.children?.length) {
      if (!this.navBarData.isParent) {
        item.index = this.navBarData.children.indexOf(item);
      }
      this.navBarData = item;
    } else if (item?.url) {
      window.location.href = item.url;
    }
  }

  toggleMenu() {
    this.navBarData = this.originalData;
  }

  back() {
    // this.navBarData = this.originalData;
    if (this.navBarData?.index !== undefined) {
      this.navBarData = this.originalData.children[this.navBarData.index];
    } else {
      this.navBarData = this.originalData;
    }
  }
}
