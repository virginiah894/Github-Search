export class User {
  // constructor(public url:string)
  showRepositories:Boolean;
  constructor(public name:string, public repositories:number, public memberDate:Date){
    this.showRepositories=false;
  }
}
