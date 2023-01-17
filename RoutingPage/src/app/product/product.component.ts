import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any [] = []

  constructor(
    private route:Router,
    private serviceService : ServicesService
  ){
    this.products = serviceService.getProducts();
  }
  showProduct(id: number) { 
    this.route.navigate([id]); 
  }
  
  ngOnInit(): void{}

}
