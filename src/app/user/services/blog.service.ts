import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  get_blogposts() {
    return this.http.get('/api/blogs');
  }
}
