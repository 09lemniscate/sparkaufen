import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  @Input() lists:any=[];
  @Input() title:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.lists)
  }

}
