import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactsService {
  constructor(public http: HttpClient) {  }

  getContacts() {
    return this.http.get('http://localhost:8080/chercherContacts?mc=A&size=5&page=0')
    }


}
