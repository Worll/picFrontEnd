import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Topic } from '../models/topic.model';
import { TopicService } from '../topic.service';

import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({ templateUrl: './home.component.html' , styleUrls: ['./home.component.css'] } )

export class HomeComponent implements OnInit {
  loading = false;
  topics: Topic[];
  chunkedTopics: any[];

  constructor(private topicService: TopicService, private authenticationService: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.topicService.getAll().pipe(first()).subscribe(topics => {
      this.loading = false;
      this.topics = topics;
      this.chunkedTopics = this.chunk(topics, 3);
    });
  }

  chunk(array, size) {
        const chunked_arr = [];
      for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
          chunked_arr.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }
      return chunked_arr;
    }
}
