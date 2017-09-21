import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  // async/await
  async getUserList() {
    const res: any = await this.http.get('https://randomuser.me/api/?results=10').toPromise();
    return res.json();
  }

}
