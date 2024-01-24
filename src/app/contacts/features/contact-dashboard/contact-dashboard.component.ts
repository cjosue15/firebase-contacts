import { Component, inject } from '@angular/core';

import { CardContactComponent } from '../../ui/card-contact/card-contact.component';
import { IconPlus } from '../../../shared/ui/icons/plus';
import { Router, RouterLink } from '@angular/router';
import { ContactsService } from '../../data-access/contacts.service';
import { AsyncPipe } from '@angular/common';
import { Contact } from '../../shared/interfaces/contacts.interface';

@Component({
  selector: 'app-contact-dashboard',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto">
      <div class="flex items-center gap-x-4">
        <input
          type="text"
          placeholder="Search contacts"
          class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
        />
        <a
          class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
          routerLink="/dashboard/create"
        >
          <app-icon-plus class="size-4" />
          Create new contact
        </a>
      </div>
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
  imports: [CardContactComponent, IconPlus, RouterLink, AsyncPipe],
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
}
