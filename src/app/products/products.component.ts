import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  filterTerm:any;
  item:any;
  listproducts!:Product[];
  constructor(private router: Router,private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.findAll().subscribe(
      (data)=>{
        this.listproducts=data;
console.log(data)
      }
    )
  }
  home(){
    this.router.navigate(['home']);
  }
  delete(id:number){
    this.ps.Delete(id).subscribe(
      (data)=>{
console.log(data)
this.ngOnInit();
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("Treatment Complete")
      }
    )
    
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
