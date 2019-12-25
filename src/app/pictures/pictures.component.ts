import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router, NavigationStart } from '@angular/router';
import { filter, map, first } from 'rxjs/operators';
import { Picture } from '../models/picture.model';
import { PicturesService } from '../pictures.service';
import { Topic } from '../models/topic.model';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/comment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

    loginForm: FormGroup;

  loading = false;
  commentLoading = false;
  pictures: Picture[];
  topicID: number;
  error = '';
  toDeletePictureID: number;
  submitted = false;
  comments: Comment[];



  constructor( private formBuilder: FormBuilder, private pictureService: PicturesService,
    public router: Router, private commentService: CommentsService) {
    this.loginForm = this.formBuilder.group({
      commentText: ['', Validators.required],
    });
  }

  onCommentsDropdown(pictureId: number): void {
    this.comments = [];
    this.topicID = history.state.id;

    var selectedPicture = this.pictures.find(({ pk }) => pk === pictureId);
    selectedPicture.fields.showComments = true;

    this.commentLoading = true;
    this.commentService.getAllCommentsByTopicIDPictureID(this.topicID, pictureId).pipe(first()).subscribe(comments => {
      this.commentLoading = false;
      selectedPicture.fields.comments = comments;
    },
    error => {
        selectedPicture.fields.error = error;
        this.loading = false;
      });
  }


  onSubmit(pictureId: number, topicID: number) {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.commentService.createComment(this.f.commentText.value, topicID, pictureId)
      .pipe(first())
      .subscribe(
        data => {
          this.onCommentsDropdown(pictureId);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  deletePicture(pictureID: number): void {
    this.toDeletePictureID = pictureID;
    this.loading = true;
    this.pictureService.deletePictureById(this.topicID, pictureID)
      .pipe(first())
      .subscribe(
        data => {
          var deletedPicture = this.pictures.find(({ pk }) => pk === pictureID);
          deletedPicture.fields.isDeleted = true;
        },
        error => {
          var selectedPicture = this.pictures.find(({ pk }) => pk === pictureID);
          selectedPicture.fields.error = error;
          this.loading = false;
        });
  }

  ngOnInit() {
    this.topicID = history.state.id;

    this.loading = true;
    this.pictureService.getAllPicturesById(this.topicID).pipe(first()).subscribe(pictures => {
      this.loading = false;
      this.pictures = pictures;
    });
  }

}
