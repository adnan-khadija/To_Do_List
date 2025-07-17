import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}



@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css'
})
export class ToDoList {
  todos: Todo[] = [];
  newTodoText = '';

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({
        id: Date.now(),
        text: this.newTodoText,
        completed: false
      });
      this.newTodoText = '';
    }
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  get remainingCount() {
    return this.todos.filter(t => !t.completed).length;
  }
}
