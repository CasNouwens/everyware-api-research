import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card-response',
  templateUrl: './basic-card-response.component.html',
  styleUrls: ['./basic-card-response.component.scss']
})
export class BasicCardResponseComponent implements OnInit {

  @Input() cardData: any;

  constructor() { }

  ngOnInit() {
  }

}
