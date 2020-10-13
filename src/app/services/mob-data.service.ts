import { Injectable } from '@angular/core';
import { MobParts } from './../model/mob-parts';
import { HttpClient } from '@angular/common/http'; 
import { MOBPARTS } from  './../database/mock';



@Injectable({
  providedIn: 'root' 
})
export class MobDataService {
  constructor(private http: HttpClient){} 
  getMobParts(){
    // return MOBPARTS;
    return this.http.get<MobParts>("./../../../assets/api/mobdata.json");
    
  }
 
}
