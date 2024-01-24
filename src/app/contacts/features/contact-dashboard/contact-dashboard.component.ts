import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CardContactComponent } from '../../ui/card-contact/card-contact.component';
import { Contact } from '../../shared/interfaces/contacts.interface';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-contact-dashboard',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto">
      <app-search-bar (changeQuery)="changeQuery($event)" />
      <section class="grid grid-cols-3 gap-8 mt-8">
        @for (contact of contacts; track contact.id) {
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
  imports: [CardContactComponent, SearchBarComponent],
})
export default class ContactDashboardComponent {
  private _router = inject(Router);

  contacts: Contact[] = [
    {
      id: '1',
      fullName: 'John',
      email: 'dev.mail@gmail.com',
      phoneNumber: '9008983883',
    },
  ];

  async deleteContact(id: string) {}

  editContact(contact: Contact) {
    this._router.navigate(['/dashboard/edit', contact.id]);
  }

  async changeQuery(query: string) {}
}
