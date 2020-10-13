import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styles: [
  ]
})
export class ReactComponent {
 formObj = new FormGroup({
   uNameObj: new FormControl ('',Validators.required),
   passObj: new FormControl ('', Validators.required),
  


 })
 
  

}
