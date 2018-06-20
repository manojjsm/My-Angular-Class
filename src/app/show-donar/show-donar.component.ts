import { Component, OnInit } from '@angular/core';
import { DonarService } from '../donar.service';
import { Donar } from 'src/app/donar';

@Component({
  selector: 'app-show-donar',
  templateUrl: './show-donar.component.html',
  styleUrls: ['./show-donar.component.css']
})
export class ShowDonarComponent implements OnInit {

  donarList: Donar[];
  constructor(private service: DonarService) { 
    console.log('Show Donar Initialized');
  }

  ngOnInit() {
    console.log('Show Donar on Init Called');

    this.service.findAll().
    subscribe(respData => this.donarList = respData,
       err => console.log(err));

  }

}
