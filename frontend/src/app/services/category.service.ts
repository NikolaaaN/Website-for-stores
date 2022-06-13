import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(category){
    const data = {
      category: category
    }

    return this.http.post('http://localhost:4000/categories/addcategory', data)
  }

  getAllCategories(){
    return this.http.get('http://localhost:4000/categories/getcategories')
  }

  addSubCategory(category, subCategory){
    const data = {
      category: category,
      subCategory: subCategory
    }

    return this.http.post('http://localhost:4000/categories/addsubcategory', data)
  }
}
