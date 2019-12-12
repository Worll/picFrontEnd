
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user.model';
import { Topic } from '../models/topic.model';
import { TopicService } from '../topic.service';

import { AuthenticateService } from '../authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  topics: Topic[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService,
    private pictureService: PicturesService
  ) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      pictureUrl: ['', Validators.required],
      topic: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.loading = true;
    this.topicService.getAll().pipe(first()).subscribe(topics => {
      this.loading = false;
      this.topics = topics;


    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.pictureService.createPicture(this.f.topic.value, this.f.pictureUrl.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

  }

}
