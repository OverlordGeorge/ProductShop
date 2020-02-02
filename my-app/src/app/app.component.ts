import {Component, OnInit} from '@angular/core';
import {OrderService} from "./order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{

  products: Array<any>;

  constructor(private orderService: OrderService, public router: Router) {
    orderService.getItems().subscribe( data => {
      this.products =data;
    })
  }

  ngOnInit(): void {
    this.orderService.getAllProducts();
  }


}

