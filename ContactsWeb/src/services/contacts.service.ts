import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';
import {map} from 'rxjs/operators';

@Injectable()
export class ContactsService {
  constructor(public http: HttpClient) {  }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/chercherContacts?mc=' + motCle + '&size=' + size + ' &page=' + page);
    }
  saveContacts(contact: Contact) {
    return this.http.post('http://localhost:8080/contacts', contact);

  }

}
