import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private ads: string[];

  constructor() {
    this.ads = [
      'Big Discounts',
      'Sale up to 50%',
      // '',
      'Check our black friday offers',
      'Special black friday offers up to 80%',
    ];
  }

  getScheduledAds(intervalInSec: number): Observable<string> {
    return new Observable((observer) => {
      let counter = 0;
      const adsTimer = setInterval(() => {
        if (counter === this.ads.length) observer.complete();
        if (this.ads[counter] === '') observer.error('Error: empty ad.');

        observer.next(this.ads[counter++]);
      }, intervalInSec * 1000);
      console.log('Subscribed! :)');

      return {
        unsubscribe() {
          clearInterval(adsTimer);
          console.log('Unsubscribed!');
        },
      };
    });
  }

  getSerialAds(): Observable<string> {
    // return of(...this.ads);
    return from(this.ads);
  }
}
