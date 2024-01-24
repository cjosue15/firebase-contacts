import {
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { IconPlus } from '../../../shared/ui/icons/plus';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="flex items-center gap-x-4">
      <input
        type="text"
        placeholder="Search contacts"
        class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
        [formControl]="control"
      />
      <a
        class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
        routerLink="/dashboard/create"
      >
        <app-icon-plus class="size-4" />
        Create new contact
      </a>
    </div>
  `,
  standalone: true,
  imports: [IconPlus, ReactiveFormsModule, RouterLink],
})
export class SearchBarComponent {
  @Output() changeQuery = new EventEmitter<string>();

  control = new FormControl('');

  query = toSignal(
    this.control.valueChanges.pipe(debounceTime(500), distinctUntilChanged()),
  );

  newQuery = computed(() => this.query());

  constructor() {
    effect(() => {
      this.changeQuery.emit(this.newQuery()!);
    });
  }
}
