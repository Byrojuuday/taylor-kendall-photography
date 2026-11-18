import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  host: {
    class: 'photo-frame',
    '[style.aspect-ratio]': 'ratio()',
    '[attr.role]': 'missing() || !image() ? "img" : null',
    '[attr.aria-label]': 'missing() || !image() ? fallbackLabel() : null',
    '[attr.data-tone]': 'tone()',
    '[class.photo-frame--end]': 'captionAlign() === "end"',
  },
  templateUrl: './photo-frame.html',
})
export class PhotoFrame {
  readonly label = input.required<string>();
  readonly path = input.required<string>();
  readonly ratio = input.required<string>();
  readonly tone = input(1);
  readonly captionAlign = input<'center' | 'end'>('center');
  readonly loading = input<'eager' | 'lazy'>('lazy');
  /** False keeps the labeled frame when the photograph is not on disk yet. */
  readonly image = input(true);

  protected readonly missing = signal(false);

  protected readonly fallbackLabel = () => this.label();

  protected onError(): void {
    this.missing.set(true);
  }
}
