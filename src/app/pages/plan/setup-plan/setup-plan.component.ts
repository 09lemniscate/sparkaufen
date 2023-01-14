import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-plan',
  templateUrl: './setup-plan.component.html',
  styleUrls: ['./setup-plan.component.scss']
})
export class SetupPlanComponent implements OnInit {
  hideInput = true;
  value = 1000;
  valuetext = 1000;
  max = 4000;
  min = 1000;
  step = 1;
  minValue = 90;
  maxValue = 910;
  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(e:any){
    console.log(e.value)
    this.value = e.value || e.target.value;
    this.minValue = Math.floor(0.09*this.value)
    this.maxValue = Math.floor(0.91*this.value)
  }

}
