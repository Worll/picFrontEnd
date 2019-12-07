import { ApiCallService } from '../api-call.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = 'Data binding using Property Binding';
  fullName = 'Hello JavaTpoint';
  topics = [];
  counter = 0;
  onSave($event) {
    this.counter++;
    console.log('Save button is clicked!', $event);
    this.apiService.getFoods();
    this.apiService.getFoods().subscribe((data: any[]) => {
      console.log(data);
      this.topics = data;
    });
  }

  constructor(private apiService: ApiCallService) {}

  ngOnInit() {
    this.apiService.getFoods().subscribe((data: any[]) => {
      console.log(data);
      this.topics = data;
    });
  }



}
