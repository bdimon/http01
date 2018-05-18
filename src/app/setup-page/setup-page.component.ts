import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {
  size;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.size = this.service.size;
  }
 onChange() {
      this.service.setSize(this.size);
console.log(this.size);
    }
}
