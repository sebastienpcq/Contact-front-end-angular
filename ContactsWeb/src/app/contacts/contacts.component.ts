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
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number>;
  constructor(public contactService: ContactsService) { }

  ngOnInit() {
    this.chercher();

  }
  doSearch () {
    this.contactService.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContact = data;
        this.pages = new Array(data['totalPages']);
      }, err => {
        console.log(err);
      });
  }
  chercher() {
    this.doSearch();
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

}
