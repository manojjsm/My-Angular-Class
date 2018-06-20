import { Component, OnInit } from '@angular/core';
import {camp1, camp2, camp3} from '../../PrintCampSchedule';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  campList = [camp1, camp2, camp3];
  btnText = 'More';
  info: string;
  location = '';
  canApply = false;
  constructor() { }


  ngOnInit() {
  }

  showMore() {
    this.canApply = !this.canApply;
    if (this.canApply) {
      this.info = 'More Details will be uploaded Shortly';
       } else {
      this.info = '';
    }
    this.btnText = 'Less Info';

  }
}
