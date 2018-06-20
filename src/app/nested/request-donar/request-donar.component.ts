import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-donar',
  templateUrl: './request-donar.component.html',
  styleUrls: ['./request-donar.component.css']
})
export class RequestDonarComponent implements OnInit {

  reqFromParent = 'apos';
  willingDonars: string[];
  constructor() { }

  ngOnInit() {
  }

  onChange(val) {

    this.willingDonars = val;
  }
}
