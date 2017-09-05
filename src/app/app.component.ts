import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component'
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <todo-form>
    </todo-form>
    <div *ngIf="data.itemList.length > 0">
      <ul>
        <li *ngFor="let item of data.itemList; let i = index"> 
          <input type='checkbox' [(ngModel)]="item.completed"> 
          <span [ngClass]="{'strike': item.completed}"> {{item.text}} </span>
          <span (click)="data.itemList.splice(i, 1)" class="pointer bold-hover"> [X] </span>
        </li>
      </ul>
      <button class='btn btn-warning' (click)="data.removeSelected()"> Clear selected </button>
      <button class='btn btn-danger' (click)="data.removeAll()">Clear ALL</button>
    </div>
    <div *ngIf="data.itemList.length == 0">
      <p> Added items will appear here </p>
    </div>
  `
})
export class AppComponent {
  constructor(private data: TodoDataService) { 
    console.log("Items in list");
    console.log(this.data.itemList);
  }
  title = 'app';
}
