import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
