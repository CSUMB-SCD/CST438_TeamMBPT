import { Component, OnInit } from '@angular/core';
import {Profile, ProfileService} from '../../services/profile.service';
import {AuthGuard} from '../../../services/auth-guard.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ProfileService]
})
export class PostListComponent implements OnInit {
  public profile: Profile;

  public posts = [
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

  public userPosts = [];

  constructor(private service: ProfileService) { }

  ngOnInit() { // TODO: Get user info from ProfileService and match the username to publisher name to find posts only by user.
    // this.service.query(AuthGuard.getAccessToken()).subscribe(object => {
    //   this.profile = new Profile(object);
    // });
    this.getUserPosts();
  }

  getUserPosts () {
    for (const post of this.posts) {
      if ('root' === post.publisher) {
        this.userPosts.push(post);
      }
    }
  }
}
