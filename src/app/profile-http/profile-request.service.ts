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
  repositories:any=[];
full:Repositories;
  constructor(private http:HttpClient) { 
this.users=new User("","","",0,new Date,0,0);
this.repositories=new Repositories("","","")
  }

  searchUsers(searchTerm:string){

    interface personInfo{
      url:string;
      avatar_url:string;
      name:string;
      public_repos:number;
      created_at:Date;
      followers:number;
      following:number;
    }
    
    let searchEndpoint= "https://api.github.com/users/"+searchTerm+"?access_token="+environment.githubApi;
    searchEndpoint += "&q="+searchTerm;
    let promise =  new Promise((resolve, reject)=>{
        this.http.get<personInfo>(searchEndpoint).toPromise().then(
          (result)=>{
            this.users=new User(result.url, result.avatar_url,result.name,result.public_repos,result.created_at,result.followers,result.following)
            
            
            // for(let i=0; i<results["data"].length; i++){
            //   let url = results["data"][i]["images"]["fixed_height"]["url"];
            //   let user= new Repositories(url);
            //   this.users.push(user);
            // }
            resolve()
            console.log(result)
          },
          (error)=>{
            console.log(error)
            reject();
          }
        )
    })
    return promise;
}

searchRepositories(searchTerm:string){

  interface personRepos{
    
    name:string;
    description:string;
    html_url:string;
  }
  
  let searchEndpointA= "https://api.github.com/users/"+searchTerm+"/repos?access_token="+environment.githubApi;
  searchEndpointA += "&q="+searchTerm;
  let PromiseA =  new Promise((resolve, reject)=>{
      this.http.get<personRepos>(searchEndpointA).toPromise().then(
        (personRepos)=>{
          this.repositories=personRepos;
          
          
          // for(let i=0; i<results["data"].length; i++){
          //   let url = results["data"][i]["images"]["fixed_height"]["url"];
          //   let user= new Repositories(url);
          //   this.users.push(user);
          // }
          resolve()
          console.log(personRepos)
        },
        (error)=>{
          console.log(error)
          reject(error);
        }
      )
  })
  return PromiseA;
}

}
