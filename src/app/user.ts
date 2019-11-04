export class User {
  
  showRepositories:Boolean;
  constructor(public url:string,  public avatar_url:string, public name:string, public public_repos:number, public created_at:Date,public followers:number,public following:number){
    this.showRepositories=false;
  }
}
