import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  item:any;
  listproducts=[
  { "id": 1001, "name": "Regular" ,"image":"","likes":10},
  { "id": 1002, "name": "Chocolate","image":"","likes":8 },
  { "id": 1004, "name": "Devil's Food","image":"","likes":5 }];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home']);
  }
  like(id:any){
     this.item =this.listproducts.find(x => x.id === id);
  this.item.likes++;
  }
  addProduct(){
    this.router.navigate(['addProduct']);
  }
  NotFound(){
    this.router.navigate(['NotFound']);
  }
  DetailProduct(id:any){
    this.router.navigate(['/DetailProduct',id]);
  }
}
