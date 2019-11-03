export class User {
  // constructor(public url:string)
  showRepositories:Boolean;
  constructor(public name:string, public repositories:number){
    this.showRepositories=false;
  }
}
