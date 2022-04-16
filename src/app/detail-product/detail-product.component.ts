import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  IdProduct:any;
  ImageProduct:any;
  constructor(private router: Router,private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.IdProduct=this.route.snapshot.paramMap.get('id');
    this.ImageProduct=this.route.snapshot.paramMap.get('image');
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
