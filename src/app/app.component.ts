import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kay-jewellers';
  banners: any = [
    {
      url: 'https://images-aka.kay.com/kay/homepage/2022/4.11/k_april22_hp_engagement.jpg',
      price: '$110.99',
      waspPrice: '$128.99',
      name: 'RINGS',
    },
    {
      url: 'https://images-aka.kay.com/kay/homepage/2023/10.2/WMJ-24-014116-BEST_SELLERS-NECKLACES-410x410.jpg',
      price: '$1110.99',
      waspPrice: '$1208.99',
      name: 'NECKLACE',
    },
    {
      url: 'https://images-aka.kay.com/kay/homepage/2022/5.19/k_may22_hp_earrings.jpg',
      price: '$193.99',
      waspPrice: '$195.99',
      name: 'EARRINGS',
    },
    {
      url: 'https://images-aka.kay.com/kay/homepage/2022/5.19/k_may22_hp_bracelets.jpg',
      price: '$1193.99',
      waspPrice: '$1195.99',
      name: 'BRACELET',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-994487205_0_260.jpg?pristine=true',
      price: '$193.99',
      waspPrice: '$195.99',
      name: 'LAB-CROWN',
    },
    {
      url: 'https://images-aka.kay.com/kay/homepage/2022/6.23/k_may22_hp_personalized.jpg',
      price: '$1193.99',
      waspPrice: '$1195.99',
      name: 'PERSONALIZED',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-023065509_0_260.jpg?pristine=true',
      price: '$1193.99',
      waspPrice: '$1195.99',
      name: 'SHOP ALL',
    },
  ];
  navBarData: any = [
    {
      id: 1,
      name: 'DEALS',
      active: false,
      children: [
        {
          id: 2,
          name: 'Featured Deals',
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
          name: 'Clearance Deals',
          active: false,
        },
      ],
    },
    {
      id: 4,
      name: 'ENGAGEMENT',
      active: false,
      children: [
        {
          id: 7,
          name: 'Rings',
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
    {
      id: 9,
      name: 'RINGS',
      active: false,
      children: [],
    },
    {
      id: 10,
      name: 'NECKLACE',
      active: false,
      children: [],
    },
    {
      id: 11,
      name: 'EARRINGS',
      active: false,
      children: [],
    },
    {
      id: 12,
      name: 'BRACELETS',
      active: false,
      children: [],
    },
    {
      id: 13,
      name: 'PERSONALIZED',
      active: false,
      children: [],
    },
    {
      id: 14,
      name: 'GIFTS',
      active: false,
      children: [],
    },
    {
      id: 15,
      name: 'SERVICES',
      active: false,
      children: [],
    },
  ];
  originalData: any = [];
  toggle: boolean = false;

  ngOnInit(): void {
    this.originalData = this.navBarData;
  }

  makeitActive(id: number) {
    // this.navBarData = this.originalData;
    const children = this.navBarData.find(
      (item: any) => item.id === id
    )?.children;
    if (children.length) {
      this.navBarData = children;
    }
  }

  toggleMenu() {
    this.navBarData = this.originalData;
  }
}
