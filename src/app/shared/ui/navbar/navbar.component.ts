import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconContact } from '../icons/contact';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="border-b border-gray-500/50 mb-8">
      <div class="px-4 xl:px-0 w-full max-w-[1200px] m-auto py-6">
        <a routerLink="/dashboard" class="flex gap-x-4">
          <app-icon-contact />
          <p>Contacts</p>
        </a>
      </div>
    </nav>
  `,
  imports: [IconContact, RouterLink],
})
export class NavbarComponent {}
