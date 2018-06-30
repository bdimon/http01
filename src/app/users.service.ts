import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SetupPageComponent } from './setup-page/setup-page.component';

@Injectable()

export class UsersService {

// Users = [];
size = 8;

// tslint:disable-next-line:whitespace
// _url = ;
// results: any;
// u: any;
  constructor (private http: HttpClient) { }
  setSize(size) {
    this.size = size;
  }

  getData(): Observable<[any]> {
    return this.http.get('http://cors.io/?u=http://randomuser.me/api/?inc=name,picture,location&results=' + this.size + '&nat=gb').pipe(map(data => {
      const usersList = data['results'];
      return usersList.map((u: any) => {
          return {name: u.name.first + ' ' + u.name.last,
          img: u.picture.large,
          geo: u.location.city + ': ' + u.location.state + ' ' + u.location.street
        };
       }
      );
     }
   )
  );
 }
}
