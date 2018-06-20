import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   leftLogo: string;
   rightLogo: string;
   heading: string;
  constructor() {

    this.leftLogo = 'assets/images/logo_left.jpg';
    this.rightLogo = 'assets/images/logo_right.jpg';
    this.heading = 'Jeevan Blood Bank';
   }

  ngOnInit() {
  }

}
