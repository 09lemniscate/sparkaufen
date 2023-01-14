import { Component, OnInit } from '@angular/core';
import { HOWITWORKS, STORE_DETAIL, YOUSHOULDKNOW } from 'src/app/constants/core-constant';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})

export class StoreListComponent implements OnInit {
  storeList = STORE_DETAIL.LIST;
  howItWorks = HOWITWORKS;
  yoiShouldKnow = YOUSHOULDKNOW;

  constructor() { }

  ngOnInit(): void {
  }

}
