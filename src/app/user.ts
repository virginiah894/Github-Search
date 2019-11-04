export class User {
  // constructor(public url:string)
  showRepositories:Boolean;
  constructor(public name:any, public repositories:number, public memberDate:Date){
    this.showRepositories=false;
  }
}
