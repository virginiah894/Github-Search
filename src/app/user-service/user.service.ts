import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{ environment} from "../../environments/environment";
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];

  constructor(private http:HttpClient){}

  searchUser(searchTerm:string){
  let searchEndpoint= "https://api.github.com/users/virginiah894?access_token="+environment.githubApi;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=[];
            for(let i=0; i<results["data"].length; i++){
              let url = results["data"][i]["images"]["fixed_height"]["url"];
              let user = new User(url);
              this.users.push(user);
            }
            resolve()
          },
          (error)=>{
            console.log(error)
            reject()
          }
        )
    })
    return promise;
  }
}
