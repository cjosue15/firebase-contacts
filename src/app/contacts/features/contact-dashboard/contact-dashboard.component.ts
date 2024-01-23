import { Component } from '@angular/core';

import { CardContactComponent } from '../../ui/card-contact/card-contact.component';
import { IconPlus } from '../../../shared/ui/icons/plus';
import { RouterLink } from '@angular/router';

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
        @for (contact of [1, 2, 3]; track contact) {
          <app-card-contact />
        }
      </section>
    </div>
  `,
  standalone: true,
  imports: [CardContactComponent, IconPlus, RouterLink],
})
export default class ContactDashboardComponent {}
