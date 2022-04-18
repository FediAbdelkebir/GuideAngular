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

  private BackEndURL:String;
  constructor(private http:HttpClient) { 
    this.BackEndURL="http://localhost:3000/";
  }
  public Save(product:Product){
    console.log(product);
    return this.http.post<Product>(this.BackEndURL+"",product)
  }
  public findAll(): Observable<any> {
    return this.http.get(this.BackEndURL+"product")
  }
  Delete(id:number){
    console.log("clicked"+id)
    return this.http.delete('http://localhost:3000/product/'+id);
    
  }
  update(id:number,title:String,author:String){
    return this.http.post(this.BackEndURL+""+id+'/'+title+'/'+author,httpOptions).pipe(
       map(
         userData => {

         }
       )
 
     );
 }
}
