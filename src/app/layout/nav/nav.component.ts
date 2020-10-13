import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl:'./nav.component.html',
  styles:[ `#navlist li:hover { background-color:yellow; }`]
})
 
export class NavComponent{

  logout(){
    localStorage.removeItem('isAdmin');
    window.alert('you are logged out..!'); 
  }
  

  loginFirst(){
   
    if(localStorage.getItem('isAdmin')){
  
    }
    else{
       window.alert(' Please login first');
    }
  }
}
