import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      'id': 1,
      'title': 'Mock Discussion From Database 1',
      'created': '2018-04-09T19:18:50.002000Z',
      'publisher': 'root',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 2,
      'title': 'Mock Discussion From Database 2',
      'created': '2018-04-09T19:18:50.002000Z',
      'publisher': 'root',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 3,
      'title': 'Mock Discussion From Database 3',
      'created': '2018-04-09T19:18:50.002000Z',
      'publisher': 'root',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 4,
      'title': 'hmmm',
      'created': '2018-04-18T06:37:12.038000Z',
      'publisher': 'xdong2',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 5,
      'title': 'Class canceled',
      'created': '2018-04-18T07:01:25.092000Z',
      'publisher': 'root',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 6,
      'title': 'test',
      'created': '2018-04-18T16:04:00.825000Z',
      'publisher': 'xdong2',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    },
    {
      'id': 7,
      'title': 'This should work now',
      'created': '2018-04-18T16:26:05.168000Z',
      'publisher': 'xdong2',
      'view_count': 0,
      'upvotes': 0,
      'tags': []
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
