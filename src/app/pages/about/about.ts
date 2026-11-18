import { Component } from '@angular/core';
import { aboutPhotos, type PhotoSlot } from '../../shared/assets';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame';

@Component({
  selector: 'app-about',
  imports: [PhotoFrame],
  templateUrl: './about.html',
})
export class AboutPage {
  protected readonly taylor = aboutPhotos.taylor;

  protected readonly life: PhotoSlot[] = [
    {
      id: 'balcony',
      label: 'On the balcony',
      path: aboutPhotos.balcony,
      ratio: '3 / 4',
      tone: 1,
    },
    {
      id: 'string-lights',
      label: 'Under the string lights',
      path: aboutPhotos.stringLights,
      ratio: '3 / 4',
      tone: 2,
    },
    {
      id: 'cats',
      label: 'Two cats at the table',
      path: aboutPhotos.cats,
      ratio: '3 / 4',
      tone: 3,
    },
    {
      id: 'lawn',
      label: 'On the lawn',
      path: aboutPhotos.lawn,
      ratio: '3 / 4',
      tone: 1,
    },
  ];
}
