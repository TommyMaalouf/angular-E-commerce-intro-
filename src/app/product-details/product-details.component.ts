import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    /*the activatedroute is specific to each routed component that the angular router
    loads*/
    private route: ActivatedRoute,
    /*Injecting the cart service by adding it to the constructor */
    private cartService: CartService
  ) { }

  ngOnInit() {
    //subscribing to route parameters and fetching the product based on the productId
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  //receiving the current product
  addToCart(product){
    //using cartService addToCart() to add the product to the cart
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}