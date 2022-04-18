import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
product!:Product;
  constructor(private router: Router,private PS:ProductService) { 
    this.product= new Product();
  }

  ngOnInit(): void {
  }
  save() {
    this.PS.Save(this.product).subscribe(
      (data:any) => {
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
      );
this.home();
   
  }
  home(){
    this.router.navigate(['home']);
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
