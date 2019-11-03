import { Injectable } from '@angular/core';
import{ User} from "../user"


@Injectable({
  providedIn: 'root'
})

export class DisplayService {
  users:User[]=[
 new User("Virginiah",4,new Date(2018,0,23)),
 new User("VirginiahA",7,new Date(2017,4,20)),
 new User("VirginiahA",52,new Date(2019,10,1)),
 new User("VirginiahA",10,new Date(2016,9,10)),
 
];
getUsers(){
  return User
}
  constructor() { }
}
