import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router, NavigationStart } from '@angular/router';
import { filter, map, first } from 'rxjs/operators';
import { Picture } from '../models/picture.model';
import { PicturesService } from '../pictures.service';
import { Topic } from '../models/topic.model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  loading = false;
  pictures: Picture[];
  topicID: number;
  error = '';
  toDeletePictureID: number;

  onSelect(picure: Picture): void {
    //console.log(Picture.pk);
    //this.router.navigateByUrl('/pictures', { state: topic });

  }

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
          this.error = error;
          this.loading = false;
        });
  }

  constructor(private pictureService: PicturesService, public router: Router) {

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
