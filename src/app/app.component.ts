import { fade } from './animations';
import { Todo } from './todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fade
  ]
})
export class AppComponent {
  title = 'Checklist';
  
  todoValue: string;
  list: Todo[];


  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if (this.todoValue !== ""){
      const newItem: Todo = {
        id:Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }
  
  deleteItem(id:number){
    this.list = this.list.filter(item => item.id != id);
  }

}
