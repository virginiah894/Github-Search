import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
searchTerm:string;
@Output() emitresults = new EventEmitter<any>();

Onclick(){
  this.emitresults.emit(this.searchTerm);
}
  constructor() { }

  ngOnInit() {
  }

}
