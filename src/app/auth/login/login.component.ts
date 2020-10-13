import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
}) 
export class LoginComponent {
 errMsg;
 constructor(private router : Router){}
 login(username , password){
   console.log('username' , username);
   console.log('password' , password);

   if(username == 'admin' && password == 'admin@1'){
     this.router.navigate(['/dash']);
     localStorage.setItem('isAdmin', 'admin');
   }
   this.errMsg = 'please enter valid username and password...!'

 } 
}



