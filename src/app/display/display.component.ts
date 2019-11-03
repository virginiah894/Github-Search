import { Component, OnInit } from '@angular/core';
// import{ HttpClient} from "@angular/common/http"
// import{ UserService} from "../user-service/user.service";
import{ User} from "../user";
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
users:User=[
 { name:"Virginiah"},

 { name:"Virginiah"},

 { name:"Virginiah"},

 { name:"Virginiah"}


];



  // constructor(public userService:UserService, private Http:HttpClient) { }

  ngOnInit() {
    // this.searchUser("virginiah894");
  }

  // searchUser(searchTerm){
  //   this.userService.searchUser(searchTerm).then(
  //     ()=>{
  //       this.users=this.userService.users;
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )
  //   }
  
  // }
