import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kay-jewellers';
  banners: any = [
    {
      url: 'https://www.kay.com/productimages/processed/V-581126808_0_260.jpg?pristine=true',
      price: '$110.99',
      waspPrice: '$128.99',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-023635307_0_260.jpg?pristine=true',
      price: '$1110.99',
      waspPrice: '$1208.99',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-994487205_0_260.jpg?pristine=true',
      price: '$193.99',
      waspPrice: '$195.99',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-023065509_0_260.jpg?pristine=true',
      price: '$1193.99',
      waspPrice: '$1195.99',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-994487205_0_260.jpg?pristine=true',
      price: '$193.99',
      waspPrice: '$195.99',
    },
    {
      url: 'https://www.kay.com/productimages/processed/V-023065509_0_260.jpg?pristine=true',
      price: '$1193.99',
      waspPrice: '$1195.99',
    },
  ];
}
