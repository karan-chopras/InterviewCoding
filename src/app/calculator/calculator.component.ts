import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  value= 1000;
  yourMethod(e){
   this.value=e
   
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
