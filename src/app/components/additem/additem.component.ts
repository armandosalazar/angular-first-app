import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;
    // this.itemService.addItem(item);
    this.itemService.addItem(item).subscribe((data) => {
      this.router.navigate(['']);
    });
    // this.router.navigate(['']);
  }
}
