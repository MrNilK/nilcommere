import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styles:[`.input-field { 

  width:200px;
  text-align :center;
   
}`]
  
})
export class TempComponent{
  
  log(tempVar) {
    console.clear();
    console.log(tempVar);
    console.log(tempVar.value);
  
  }
  
}
