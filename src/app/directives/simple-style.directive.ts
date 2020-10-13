import { Directive, ElementRef,Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'appSimpleStyle',

})
export class SimpleStyleDirective {
  @Input () defaultColor : string;

  constructor(private elementRef : ElementRef , private renderer : Renderer2 ) { 
    // this.elementRef.nativeElement.style.color = 'red';
    // renderer.setStyle(elementRef.nativeElement, 'color' , 'red')


    // this.setBgColor('pink')

    
   

}
ngOnInit() : void {
  //called after the constructer, initializing  input properties and the first call to the ngOnchanges.
  //add 'implements onInit' to the class.
  if(this.defaultColor){
    console.log('defaultColor', this.defaultColor)
    this.setBgColor(this.defaultColor)
  }
  else{
    this.setBgColor('blue');
  }

}
setBgColor(color : string){
  this.renderer.setStyle(
    this.elementRef.nativeElement,
    'backgroundColor',
    color
  );
}
@HostListener ('mouseenter') onMouseEnter(){
  this.setBgColor('lightgreen');
}
@HostListener ('mouseleave') onMouseLeave(){
  this.setBgColor('skyblue');
}

}
//document.getelementById('demo').style.color = 'blue'
