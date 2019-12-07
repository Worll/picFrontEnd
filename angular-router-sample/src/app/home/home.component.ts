import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { TopicService } from '../topic.service';

import { AuthenticateService } from '../authenticate.service';

@Component({ templateUrl: './home.component.html' })

export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.loading = true;
    this.topicService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }
}
