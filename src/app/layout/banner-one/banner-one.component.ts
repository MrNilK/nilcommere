import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-one',  
  template: `

  <div id="index-banner" class="parallax-container">
  <div class="parallax">
    <div class="slider" id="sliders">

    <ul class=" slides  left-align">
        <li>
            <img src="./../assets/img/ss.png"> 
           
            <div class="caption right-align">
            <div class="row center">
             
        <h5 class="header col s12 light"><b>
         The biggest platform for online shopping..!</b>
        </h5></div>
      </div>
      <div class="row center">
        <a href="#" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get
          Started</a>
      </div>  
        </li>
 <li>
        <div class="parallax">
            <img src="./../assets/img/buy.jpg "> 
            <div class="caption left-align">
                <h3><b> </b></h3>
                <h5 class="dark red-text text-lighten-3"></h5>
            </div>
            </div>
        </li>

        <li>
       
        <div class="parallax">
            <img src="./../assets/img/poco.jfif "> 
            <div class="caption left-align">
                <h3><b>Buy  Redmi Mi mobile phones at lowest prices </b></h3>
                <h5 class="dark red-text text-lighten-3">10 % discount on HDFC credit/debit cards & EMI</h5>
            </div>
            </div>
        </li>
    
        <li>    
        <div class="parallax"> 
            <img src="./../assets/img/friday.jpg" > 
            <div class="caption left-align">
                <h3>A <b> Black </b>  friday sale </h3>
                <h5 class="light grey-text text-lighten-3"><b> on next Friday </b></h5>
            </div>
            </div> 
        </li>
        <li>
        <div class="parallax">
            <img src="./../assets/img/phones.jpg"> 
            <div class="caption center-align">
                <h3 class="light black-text text-dark-3"><b> Get all the android phones, tablets and laptops</b> </h3>
                <h5 class="light black-text text-dark-3"><b>starting from ₹8000 </b></h5>
            </div>
            </div>
        </li>
    </ul>
</div>
  
</div>
  `,
  styles: [
  ]
})
export class BannerOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
