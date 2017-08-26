import { ShoppingService } from './../shopping.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  addNewIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.quantity);
    
    this.shoppingService.addIngredient(newIngredient);
  }

}
