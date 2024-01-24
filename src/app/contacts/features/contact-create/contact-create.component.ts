import { Component, Input, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { IconRocket } from '../../../shared/ui/icons/rocket';
import { IconBack } from '../../../shared/ui/icons/back';

export interface CreateForm {
  fullName: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  description?: FormControl<string | undefined>;
}

@Component({
  selector: 'app-contact-create',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[600px] m-auto">
      <form [formGroup]="form" (ngSubmit)="createContact()">
        <div class="mb-8">
          <label for="first_name" class="block mb-2 text-sm font-medium"
            >First name</label
          >
          <input
            type="text"
            id="first_name"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="John Doe"
            formControlName="fullName"
          />
        </div>
        <div class="mb-8">
          <label for="email" class="block mb-2 text-sm font-medium"
            >Email</label
          >
          <input
            type="text"
            id="email"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="example@mail.com"
            formControlName="email"
          />
        </div>
        <div class="mb-8">
          <label for="phoneNumber" class="block mb-2 text-sm font-medium"
            >Phone number</label
          >
          <input
            type="text"
            id="phoneNumber"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="+51 995123233"
            formControlName="phoneNumber"
          />
        </div>
        <div class="mb-8">
          <label for="description" class="block mb-2 text-sm font-medium"
            >Description (optional)</label
          >
          <textarea
            rows="5"
            type="text"
            id="description"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="Your description goes here"
            formControlName="description"
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <a
            class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
            routerLink="/dashboard"
          >
            <app-icon-back />
            Back to dashboard
          </a>

          <button
            class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
            type="submit"
          >
            <app-icon-rocket />
            @if (contactId) {
              Edit your contact
            } @else {
              Create your contact
            }
          </button>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, IconRocket, IconBack, RouterLink],
})
export default class ContactCreateComponent {
  private _formBuilder = inject(FormBuilder).nonNullable;

  private _contactId = '';

  get contactId(): string {
    return this._contactId;
  }

  @Input() set contactId(value: string) {
    this._contactId = value;
    this.setFormValues(this._contactId);
  }

  form = this._formBuilder.group<CreateForm>({
    fullName: this._formBuilder.control('', Validators.required),
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    phoneNumber: this._formBuilder.control('', Validators.required),
    description: this._formBuilder.control(''),
  });

  async createContact() {
    if (this.form.invalid) return;
  }

  async setFormValues(id: string) {}
}
