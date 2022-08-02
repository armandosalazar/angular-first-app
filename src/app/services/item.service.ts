import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../components/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url: string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  items: Item[] = [
    {
      id: 1,
      title: 'iPhone X',
      price: 10,
      quantity: 1,
      completed: false,
    },
    {
      id: 2,
      title: 'Samsung S10',
      price: 20,
      quantity: 2,
      completed: true,
    },
    {
      id: 3,
      title: 'Xiaomi Mi8',
      price: 30,
      quantity: 3,
      completed: false,
    },
    {
      id: 4,
      title: 'OnePlus 7',
      price: 30,
      quantity: 3,
      completed: false,
    },
  ];

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    // return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    // this.items.push(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item: Item): Observable<Item> {
    return this.http.put<Item>(
      `${this.url}/${item.id}`,
      item,
      this.httpOptions
    );
  }

  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(`${this.url}/${item.id}`, this.httpOptions);
  }
}
