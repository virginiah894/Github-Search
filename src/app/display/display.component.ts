import { Component, OnInit } from '@angular/core';
import{ProfileRequestService } from "../profile-http/profile-request.service";
import{ User} from "../user";



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public searchTerm:string ="Virginiah894";
  user:User;

         constructor(public searchUsers:ProfileRequestService){
        }
    

    // =[
//  new User("Virginiah",4,new Date(2018,0,23)),
//  new User("VirginiahA",7,new Date(2017,4,20)),
//  new User("VirginiahA",52,new Date(2019,10,1)),
//  new User("VirginiahA",10,new Date(2016,9,10)),
 
// ];
// toggleDetails(index){
//   this.users[index].showRepositories= !this.users[index].showRepositories;
// }
// currentPage(onPage,index){
//   if(onPage){
//     this.users.splice(index,1);
//   }
// }


  // constructor(public userService:UserService, private Http:HttpClient) { }

  ngOnInit() {

  }
}
    // this.searchUser("virginiah894");
  


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

