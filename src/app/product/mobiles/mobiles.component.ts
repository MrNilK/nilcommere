import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { MobParts } from './../../model/mob-parts'; 
// import { MOBPARTS } from './../../database/mock'; 
import { MobDataService } from './../../services/mob-data.service';
import { MOBPARTS } from './../../database/mock';

 

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styles:[`
  .input {
    width : 30px;
    text-align : center;
  }
  `,
],
})
export class MobilesComponent implements OnInit {
  public inputvl : string; 
  constructor(private mobDataServices: MobDataService){
    this.inputvl = "Hello Nilesh";
  } 
  


  ngOnInit():void {
    console.log('%c 1 ngOnInit Block...!', 'color:red');
  // this.mobParts = MOBPARTS;
  // let mobDataServices = new MobDataServices();
  // this.mobParts = mobDataServices.getMobParts(); 
  //  this.mobParts = this.mobDataServices.getMobParts();
  this.mobDataServices.getMobParts().subscribe((data)=>{
    console.clear();
    console.log('data :' , data['data']);
    this.mobParts = data['data'];

  });  
  
}

  // constructor(){
  //   console.log('% 2 Constructor Block...!', 'color:blue');
  // } 

  // ngOnDestroy(){
  //   console.log('%c 4 ngOnInit Block...!', 'color:green');
  // }
  // ngAfterViewInit() {
  //   console.log('4 ngAfterViewInit Block...!');
  // }
  // ngAfterContentInit() {
  //   console.log('5 ngAfterViewInit Block...!');
  // }

   title : string = 'this is my title';
   mobParts : MobParts[]; //mobparts : MobParts[] = MOBPARTS;


 calcProd(){
   let sum = 0;
   for (let mobPart of this.mobParts){
     sum += mobPart.InStock;
   }
   return sum;
 } 

 upQuantity(mobPart){
   if(mobPart.quantity < mobPart.InStock) mobPart.quantity++;
 }

 downQuantity(mobPart){
   if(mobPart.quantity != 0)  mobPart.quantity--;
 }
 catchVal(qntt){
   console.clear();
   console.log(qntt);
 }

 
  
}
