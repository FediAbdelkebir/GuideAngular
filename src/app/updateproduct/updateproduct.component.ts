import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product!:any;
  constructor(private router: Router,private route: ActivatedRoute,private PS:ProductService) { 
    this.product= new Product();
  }
  ngOnInit(): void {
    this.product.id=this.route.snapshot.paramMap.get('id');
    this.product.name=this.route.snapshot.paramMap.get('name');
    this.product.image=this.route.snapshot.paramMap.get('image');
    this.product.likes=this.route.snapshot.paramMap.get('likes');
    this.product.Prix=this.route.snapshot.paramMap.get('Prix');
  }
  Update(product:Product) {
    this.PS.update(product.id,product.name,product.image,product.likes,product.Prix).subscribe(
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
    this.router.navigate(['/home']);
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
