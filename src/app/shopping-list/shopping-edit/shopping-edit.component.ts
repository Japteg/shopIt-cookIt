import { ShoppingService } from './../shopping.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputQuantity') inputQuantityRef: ElementRef;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
  }

  addNewIngredient(name: string, quantity: number){
    const inputNameValue = this.inputNameRef.nativeElement.value;
    const inputQuantityValue = this.inputQuantityRef.nativeElement.value;
    const newIngredient = new Ingredient(inputNameValue, inputQuantityValue);
    this.shoppingService.addIngredient(newIngredient);
  }

}
