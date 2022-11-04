import { Component, OnInit } from '@angular/core';
//importing cartservice to retrieve shipping data via HTTP from the shipping.json file
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    //setting the shippingCosts property using the method getShippingPrices from cartService
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}