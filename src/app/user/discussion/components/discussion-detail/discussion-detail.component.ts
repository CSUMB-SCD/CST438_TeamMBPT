import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css']
})
export class DiscussionDetailComponent implements OnInit {

  comments = {
    'id': 1,
    'publisher': 'root2',
    'comments': [
      {
        'id': 1,
        'content': 'I agree with this',
        'created': '2018-04-15T00:10:07.331000Z',
        'publisher': 'root1',
        'upvotes': 0,
        'parent_comment': null
      },
      {
        'id': 2,
        'content': 'I disagree with this',
        'created': '2018-04-15T00:10:36.328000Z',
        'publisher': 'root2',
        'upvotes': 0,
        'parent_comment': null
      },
      {
        'id': 3,
        'content': 'I have no idea what\'s going on',
        'created': '2018-04-15T00:11:06.211000Z',
        'publisher': 'root3',
        'upvotes': 0,
        'parent_comment': {
          'id': 2,
          'content': 'I disagree with this',
          'created': '2018-04-15T00:10:36.328000Z',
          'publisher': 'root2',
          'upvotes': 0,
          'parent_comment': null
        }
      },
      {
        'id': 4,
        'content': 'I agree as well',
        'created': '2018-04-15T01:08:40.101000Z',
        'publisher': 'root4',
        'upvotes': 0,
        'parent_comment': {
          'id': 3,
          'content': 'I have no idea what\'s going on',
          'created': '2018-04-15T00:11:06.211000Z',
          'publisher': 'root3',
          'upvotes': 0,
          'parent_comment': {
            'id': 2,
            'content': 'I disagree with this',
            'created': '2018-04-15T00:10:36.328000Z',
            'publisher': 'root2',
            'upvotes': 0,
            'parent_comment': null
          }
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
