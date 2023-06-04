import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails:any;
  public products:any;

public getProductDetail(product:any){
console.log(product);
this.productDetails=product;
}
  
public product=[
 { id:1,
  name:'product 1',
  price:300,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
  imgurl:'assets/images/home/t-shirt.jpg'
 },
 { id:2,
  name:'product 2',
  price:350,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
  imgurl:'assets/images/home/t-shirt.jpg'
 },
 { id:3,
  name:'product 3',
  price:500,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
  imgurl:'assets/images/home/t-shirt.jpg'
 },
 { id:4,
  name:'product 4',
  price:250,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
  imgurl:'assets/images/home/t-shirt.jpg'
 },
 { id:5,
  name:'product 5',
  price:640,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content.',
  imgurl:'assets/images/home/t-shirt.jpg'
 }

];
constructor(public apiService:ApiService) {
  this.apiService.getProducts().subscribe((productResponse)=>{
    console.log(productResponse)
    this.products=productResponse.data
  });
}

 

}
