import { Component } from '@angular/core';
import { externalLinks, photos } from '../../shared/assets';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame';

@Component({
  selector: 'app-pricing',
  imports: [PhotoFrame],
  templateUrl: './pricing.html',
})
export class PricingPage {
  protected readonly hero = photos.pricingHero;
  protected readonly email = externalLinks.email;
}
