import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoItem } from './todo-item';
import { TodoDataService } from './todo-data.service';

@Component ({
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html'
})

export class TodoFormComponent {
    constructor(private data: TodoDataService) { }
    isSubmitted: boolean = false;
    model: TodoItem = {
        text: 'Sample Item',
        completed: false
    };
    onSubmit(): void {
        const todoItem: TodoItem = {
            text: this.model.text,
            completed: false
        }
        console.log("Adding item to list: " + todoItem);
        console.dir(todoItem);
        this.data.itemList.push(todoItem);
        console.log("Updated List: " + this.data.itemList);
        console.dir(this.data.itemList);
        this.isSubmitted = true;
        this.model.text = '';
    }
}
