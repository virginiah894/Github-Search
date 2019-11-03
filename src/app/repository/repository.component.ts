import { Component, OnInit ,Input} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
@Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
