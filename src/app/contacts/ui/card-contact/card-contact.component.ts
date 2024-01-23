import { Component } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  template: `
    <div class="border border-gray-500/50 rounded-md p-4">
      <h4 class="text-white mb-2 font-bold">Carlos Morales</h4>
      <small class="text-yellow-500 mb-2">+51 995948944</small>
      <p class="text-gray-300 mb-2">dev.carlos.morales&#64;gmail.com</p>
      <p class="text-gray-400 text-sm">Description here.</p>
    </div>
  `,
  standalone: true,
})
export class CardContactComponent {}
