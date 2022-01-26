import { Component, OnInit } from '@angular/core';

import { Store } from '../../ViewModels/store';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { PromotionAdsService } from './../../promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discount: DiscountOffers;
  clientName: string;
  store: Store;

  constructor(private promotionAds: PromotionAdsService) {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

    this.discount = DiscountOffers['15%'];
  }

  ngOnInit() {
    const observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('Ads complete!');
      },
    };

    this.promotionAds.getScheduledAds(2).subscribe(observer);
  }
}
