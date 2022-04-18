import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClientModule,HttpHeaders,HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import {Product} from './product';
let httpOptions = { responseType: 'text' };
@Injectable({
  providedIn: 'root'
})
export class ProductService {
product!:Product;
  private BackEndURL:String;
  constructor(private http:HttpClient) { 
    this.product= new Product();
    this.BackEndURL="http://localhost:3000/";
  }
  public Save(product:Product){
    console.log(product);
    return this.http.post<Product>(this.BackEndURL+"product",product)
  }
  public findAll(): Observable<any> {
    return this.http.get(this.BackEndURL+"product")
  }
  Delete(id:number){
    console.log("clicked"+id)
    return this.http.delete('http://localhost:3000/product/'+id);
    
  }
  update(id:number,name:String,image:String,likes:number,prix:number){
    this.product.id=id;
    this.product.name=name;
    this.product.image=image;
    this.product.likes=likes;
    this.product.Prix=prix;
    /*return this.http.put(this.BackEndURL+"product/"+this.product,httpOptions).pipe(
       map(
         userData => {

         }
       )
 
     );*/
      return this.http.put(this.BackEndURL+"product/"+id,this.product).pipe(
       map(
         userData => {

         }
       )
 
     );
 }
}
