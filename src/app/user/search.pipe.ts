import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
transform(Users, value) {
return Users.filter(user => {
  return user.name.includes(value);
    }
   );
  }
}
