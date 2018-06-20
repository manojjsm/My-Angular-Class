import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constants } from 'zlib';


@Component({
  selector: 'app-send-donar',
  templateUrl: './send-donar.component.html',
  styleUrls: ['./send-donar.component.css']
})
export class SendDonarComponent implements OnInit {

   @Input() requiredGroup: string;

   @Output() availableDonars:
            EventEmitter<string[]> = new EventEmitter<string[]>();

            donarList: Map<string, string[]>;
  constructor() {

     this.donarList = new Map<string, string[]>();

     this.donarList.set('apos', ['ram-484848', 'shyam-45050', 'ganesh-4848']);

     this.donarList.set('bpos', ['ravi-1484848', 'kavi-425050', 'pavi-34848']);

   }

  ngOnInit() {

    console.log(this.requiredGroup);
  }

  getData() {

    const donars = this.donarList.get(this.requiredGroup);

    this.availableDonars.emit(donars);

    console.log(this.requiredGroup);
  }
}
