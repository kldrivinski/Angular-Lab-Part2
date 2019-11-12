import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  searchText: string = "";

  todos: Todo[] = [


    { task: "fold clothes", complete: false },
    { task: "put clothes in dresser", complete: false },
    { task: "relax", complete: false },
    { task: "try to pet cat", complete: true },
    { task: "pet cat", complete: false },
    { task: "be awesome", complete: false },


  ]


  newTodo: Todo = {
    task: "",
    complete: false,

  }

  getFilteredTodos(): Todo[] {
    if (!this.searchText.trim()) {
      return this.todos;
    }
    const match = this.searchText.trim().toLowerCase();
    return this.todos.filter(todo =>
      todo.task.toLowerCase().includes(match)
    );
  }


  //   if (!this.searchText)
  //   return this.todo;
  // else if (this.searchText !== "")
  //   return this.todo.filter(
  //     d => d.task === this.searchText)

  addTodoItem() {
    this.todos.push(this.newTodo);
    this.newTodo = {
      task: "",
      complete: false,
    }

  }

  removeListItem(i: number): void {
    this.todos.splice(i, 1);
  }

  markComplete(i: number): void {

    let item = this.todos[i]
    item.complete = true;


  }

  constructor() { }

  ngOnInit() {

  }


}


