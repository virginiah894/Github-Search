import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';
import { Repositories } from '../repositories';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileRequestService {
//   users:User[]=[];
//   constructor(private http:HttpClient) { }

//   searchUsers(searchTerm:string){
    
//     let searchEndpoint= "https://api.github.com/users/" +  + "?access_token"+environment.githubApi;
//     searchEndpoint += "&q="+searchTerm;
//     let promise =  new Promise((resolve, reject)=>{
//         this.http.get(searchEndpoint).toPromise().then(
//           (results)=>{
//             this.users=[];
//             for(let i=0; i<results["data"].length; i++){
//               let url = results["data"][i]["images"]["fixed_height"]["url"];
//               let user= new Repositories(url);
//               this.users.push(user);
//             }
//             console.log(this.users);
//             resolve()
//           },
//           (error)=>{
//             console.log(error)
//             reject()
//           }
//         )
//     })
//     return promise;
//   }
// }
