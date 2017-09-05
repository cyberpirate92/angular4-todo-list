import { Injectable } from '@angular/core';

import { TodoItem } from './todo-item';

@Injectable()
export class TodoDataService {
  public itemList: TodoItem[] = [];
  public removeSelected(): void {
    const temp = this.itemList.slice();
    this.itemList = [];
    for(let item of temp) {
      if(!item.completed) {
        this.itemList.push(item);
      }
    }
  }
  public removeAll(): void {
    this.itemList = [];
  }
}
