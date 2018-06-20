import { Component, OnInit } from '@angular/core';
import {camp1, camp2, camp3} from '../../PrintCampSchedule';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  campList = [camp1, camp2, camp3];
  constructor() { }

  ngOnInit() {
  }

}
