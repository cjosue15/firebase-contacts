import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { CardContactComponent } from '../../ui/card-contact/card-contact.component';
import { ContactsService } from '../../data-access/contacts.service';
import { Contact } from '../../shared/interfaces/contacts.interface';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact-dashboard',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto">
      <app-search-bar (changeQuery)="changeQuery($event)" />
      <section class="grid grid-cols-3 gap-8 mt-8">
        @for (contact of contacts$ | async; track contact.id) {
          <app-card-contact
            [contact]="contact"
            (deleteContact)="deleteContact($event)"
            (editContact)="editContact($event)"
          />
        }
      </section>
    </div>
  `,
  standalone: true,
  imports: [CardContactComponent, SearchBarComponent, AsyncPipe],
})
export default class ContactDashboardComponent {
  private _contactsService = inject(ContactsService);

  private _router = inject(Router);

  contacts$ = this._contactsService.getContacts();

  async deleteContact(id: string) {
    try {
      await this._contactsService.deleteContact(id);
    } catch (error) {}
  }

  editContact(contact: Contact) {
    this._router.navigate(['/dashboard/edit', contact.id]);
  }

  async changeQuery(query: string) {
    try {
      const contacts = await this._contactsService.searchContactByQuery(query);
      this.contacts$ = of(contacts);
    } catch (error) {}
  }
}
