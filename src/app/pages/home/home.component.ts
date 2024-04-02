import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  inputValue: string = '';
  Todo: [] = [];
  todos: Todo[] = [
    {
      id: 1,
      title: ' 밥먹기',
      done: false,
    },
    {
      id: 2,
      title: '눕기',
      done: false,
    },
  ];

  addtodo() {
    if (!this.inputValue) {
      alert('입력하신후 눌러주세요!');
    }
    const lastItem = this.todos[this.todos.length - 1].id;

    const newTodo = {
      id: lastItem + 1,
      title: this.inputValue,
      done: false,
    };
    this.todos.push(newTodo);
  }

  remove(todos: Todo) {
    this.todos.filter((item) => item.id !== todos.id);
  }
}
