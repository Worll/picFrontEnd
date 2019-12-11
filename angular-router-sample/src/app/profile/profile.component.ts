import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() topic: Topic;

  constructor() { }



  ngOnInit() {
  }

}
