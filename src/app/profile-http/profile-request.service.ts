import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import { Repositories } from '../repositories';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  users:User;
  constructor(private http:HttpClient) { }

  searchUsers(searchTerm:string){
    interface personInfo{
      url:string;
      avatar_url:string;
      name:string;
      repositories:number;
      memberDate:Date;
      followers:number;
      following:number;
    }
    
    let searchEndpoint= "https://api.github.com/users/"+searchTerm+"?access_token"+environment.githubApi;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get<personInfo>(searchEndpoint).toPromise().then(
          (results)=>{
            this.users=new User(results.url, results.avatar_url,results.name,results.repositories,results.memberDate,results.followers,results.following)
            
            
            // for(let i=0; i<results["data"].length; i++){
            //   let url = results["data"][i]["images"]["fixed_height"]["url"];
            //   let user= new Repositories(url);
            //   this.users.push(user);
            // }
            resolve()
            console.log
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
