import { Component, OnInit } from '@angular/core';
import { STORE_DETAIL } from 'src/app/constants/core-constant';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  lists = STORE_DETAIL.LIST;
  constructor() { }

  ngOnInit(): void {
    console.log(this.lists.length)
  }

}
