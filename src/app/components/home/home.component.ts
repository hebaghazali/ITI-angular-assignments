import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '../../ViewModels/store';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  discount: DiscountOffers;
  clientName: string;
  store: Store;
  private subscriptions: Subscription[] = [];

  ad: string = '';

  constructor(private promotionAds: PromotionAdsService) {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

    this.discount = DiscountOffers['15%'];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit() {
    const observer = {
      next: (data: string) => {
        // console.log(data);
        this.ad = data;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        // console.log('Ads complete!');
      },
    };

    // const adsSub = this.promotionAds.getScheduledAds(2).subscribe(observer);
    // const adsSub = this.promotionAds.getSerialAds().subscribe(observer);

    const filteredObservable = this.promotionAds.getScheduledAds(2).pipe(
      // filter((ad) => ad.includes('black friday')),
      map((ad) => `Ad: ${ad}`)
    );

    const adsSub = filteredObservable.subscribe(observer);

    this.subscriptions.push(adsSub);
  }
}
