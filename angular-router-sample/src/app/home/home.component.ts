import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Topic } from '../models/topic.model';
import { TopicService } from '../topic.service';

import { AuthenticateService } from '../authenticate.service';

@Component({ templateUrl: './home.component.html' , styleUrls: ['./home.component.css'] } )

export class HomeComponent implements OnInit {
  loading = false;
  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.loading = true;
    this.topicService.getAll().pipe(first()).subscribe(topics => {
      this.loading = false;
      this.topics = topics;


    });
  }
}
