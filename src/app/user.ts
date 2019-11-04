export class User {
  
  showRepositories:Boolean;
  constructor(public url:string,  public avatar_url:string, public name:string, public repositories:number, public memberDate:Date,public followers:number,public following:number){
    this.showRepositories=false;
  }
}
