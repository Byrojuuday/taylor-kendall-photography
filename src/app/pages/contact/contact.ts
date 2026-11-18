import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { externalLinks, photos } from '../../shared/assets';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, PhotoFrame],
  templateUrl: './contact.html',
})
export class ContactPage {
  protected readonly hero = photos.contactHero;
  protected readonly email = externalLinks.email;
  protected readonly attempted = signal(false);
  protected readonly acknowledged = signal(false);

  protected onSubmit(form: NgForm): void {
    this.attempted.set(true);
    if (form.invalid) {
      const first = document.querySelector<HTMLElement>(
        '.contact-form input.ng-invalid, .contact-form textarea.ng-invalid',
      );
      first?.focus();
      return;
    }
    this.acknowledged.set(true);
  }
}
