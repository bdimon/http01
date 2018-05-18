import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public Users = [];
  searchStr = '';
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    // this.Users = this.usersService.Users;
this.usersService.getData().subscribe((data) => {
  this.Users = data;
});
    }

}
