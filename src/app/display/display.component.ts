import { Component, OnInit } from '@angular/core';
// import{ HttpClient} from "@angular/common/http"
// import{ UserService} from "../user-service/user.service";
import{ User} from "../user";
import { ActivationEnd } from '@angular/router';
import { O_NOFOLLOW } from 'constants';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    users:User[]=[
 new User("Virginiah",4),
 new User("VirginiahA",7),
 new User("VirginiahA",52),
 new User("VirginiahA",10),
 
];
toggleDetails(index){
  this.users[index].showRepositories= !this.users[index].showRepositories;
}
currentPage(onPage,index){
  if(onPage){
    this.users.splice(index,1);
  }
}

constructor(){}

  // constructor(public userService:UserService, private Http:HttpClient) { }

  ngOnInit() {
    // this.searchUser("virginiah894");
  }
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

