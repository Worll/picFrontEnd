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

  onSelect(picure: Picture): void {
    //console.log(Picture.pk);
    //this.router.navigateByUrl('/pictures', { state: topic });

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
