import { Component, OnInit ,Input,Output,EventEmitter,} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  @Input() user:User;
@Output() onPage = new EventEmitter<boolean>();

currentSearch(on:boolean){
  this.onPage.emit(on);
}
  constructor() { }

  ngOnInit() {
  }

}
