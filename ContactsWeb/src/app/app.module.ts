import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactsService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoot: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'editContact/:id', component: EditContactComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoot), HttpClientModule, FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
