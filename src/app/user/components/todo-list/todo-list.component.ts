import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthGuard} from '../../../services/auth-guard.service';
import {DataSource} from '@angular/cdk/collections';
import {TodoService} from '../../services/todo.service';
import {Challenge} from '../../services/challenge.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  dataSource: TodoListDataSource;
  displayedColumns = ['title', 'description', 'difficulty', 'submission_count', 'accepted_count'];

  constructor(
    private service: TodoService
  ) {
    this.dataSource = new TodoListDataSource(this.service);
  }

  ngOnInit(): void {
  }
}

export class TodoListDataSource extends DataSource<any> {

  constructor(private service: TodoService) {
    super();
  }

  connect(): Observable<Challenge[]> {
    return this.service.query(AuthGuard.getAccessToken()).map(object => {
      return object['challenges'] as Challenge[];
    });
  }

  disconnect() { }
}
