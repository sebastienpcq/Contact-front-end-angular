import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContactsService} from '../../services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContact: any;
  constructor(public contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(data => {
        this.pageContact = data;
      }, err => {
        console.log(err);
      });

  }

}
