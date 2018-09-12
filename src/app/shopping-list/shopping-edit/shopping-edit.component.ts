import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  name: string;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  onAdd(name, amount) {
    // this.name = name.value;
    // this.amount = amount.value;
    // console.log(name, amount);
    this.ingredientAdded.emit({
      name: name.value,
      amount: amount.value
    });
  }


}
