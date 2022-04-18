import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  filterTerm:any;
  item:any;
  listproducts=[
  { "id": 1001, "name": "Regular" ,"image":"https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/cs-home-shop-1.jpg","likes":10,"Prix":65},
  { "id": 1002, "name": "Chocolate","image":"https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/Untitled-16.jpg","likes":8,"Prix":80 },
  { "id": 1004, "name": "Devil's Food","image":"https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/cs-home-shop-6.jpg","likes":5,"Prix":75 }];
  constructor(private router: Router,private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.findAll().subscribe(
      (data)=>{
console.log(data)
      }
    )
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
