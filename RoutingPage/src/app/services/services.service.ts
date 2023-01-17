import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  products: any[] =[
    {
      id: 1,
      title: 'laptop',
      description: 'Equipo tech',
      price: 1999,
      img: 'https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5'
    },
    {
      id: 2,
      title: 'celular',
      description: 'Celular de 6GB RAM y 128GB de memoria',
      price: 5000,
      img:'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42736954-dFrbeluZ.jpg'
    },
    {
      id: 3,
      title: 'PC Gamer',
      description: 'PC con disco SSD de 1TB y tarjeta de video RTX 4070',
      price: 12000,
      img:'https://infotron.pe/wp-content/uploads/2022/05/pc-gamer-core-i3-gtx1050ti-infotron.png'
    }
  ]

  constructor(
  ) { }

  getProducts() { 
    return this.products;
  }

  getProduct(id: number) { 
    return this.products[id];
  }
}
