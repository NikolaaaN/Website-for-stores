import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Goods } from '../models/goods';
import { CategoryService } from '../services/category.service';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-articlegroup',
  templateUrl: './articlegroup.component.html',
  styleUrls: ['./articlegroup.component.css']
})
export class ArticlegroupComponent implements OnInit {

  constructor(private categoryService: CategoryService,private companyService: CompanyService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Array<Category>) => {
      this.categories = resp
    });
    this.companyService.getAllGoods().subscribe((data : Goods[]) => {
      this.goods = data
    })
  }

  goods: Goods[] = []
  
  category: string
  categories: Array<Category>

  categoryChoice: string
  subCategory: string
  popup: boolean
  message: string

  add(){
    this.categoryService.addCategory(this.category).subscribe((resp: Category) => {
      console.log(resp)
      this.categoryService.getAllCategories().subscribe((resp: Array<Category>) => {
        this.categories = resp
      });
    });
  }

  addSubCategory(){
    this.categoryService.addSubCategory(this.categoryChoice, this.subCategory).subscribe((resp: string) => {

    })
  }

  openPopup(){
    if (this.subCategory == null)
      this.message = "Niste dodali potkategoriju"
    else
      this.popup = true
  }

  submitCategory(code){
    this.companyService.submitGoodCategory(code, this.subCategory).subscribe((message: string) => {
      console.log(message)
    })
  }

  closePopup(){
    this.popup = false
  }

}
