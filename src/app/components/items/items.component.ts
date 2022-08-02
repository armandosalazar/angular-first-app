import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    // this.items = [];
    // this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
      this.getTotal();
    });
    this.getTotal();
  }

  deleteItem(item: Item): void {
    // this.items = this.items.filter((i) => i.id !== item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item: Item): void {
    this.itemService.toggleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter((item) => !item.completed)
      .map((item) => item.price * item.quantity)
      .reduce((acc, item) => acc + item, 0);
  }
}
