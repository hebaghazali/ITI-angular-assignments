import { Component, OnInit } from '@angular/core';

import { Store } from '../../ViewModels/store';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  discount: DiscountOffers;
  clientName: string;
  store: Store;

  constructor() {
    this.store = new Store(
      'ITI',
      ['Qena', 'Cairo', 'Alex', 'Giza'],
      'https://identity.iti.gov.eg/images/ITI%20logo.png'
    );

    this.clientName = 'Heba';

    this.discount = DiscountOffers['15%'];
  }

  ngOnInit() {}
}
