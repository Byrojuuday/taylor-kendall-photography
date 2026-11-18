import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homePhotos, type PhotoSlot } from '../../shared/assets';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PhotoFrame],
  templateUrl: './home.html',
})
export class HomePage {
  protected readonly hero = homePhotos.cake;

  protected readonly galleryLeft: PhotoSlot[] = [
    {
      id: 'bridesmaids',
      label: 'Bridesmaids with the bride',
      path: homePhotos.bridesmaids,
      ratio: '3 / 2',
      tone: 1,
    },
    {
      id: 'shoes',
      label: 'Shoes in the grass',
      path: homePhotos.shoes,
      ratio: '3 / 2',
      tone: 2,
    },
    {
      id: 'violet-dance',
      label: 'Dancing in violet light',
      path: homePhotos.violetDance,
      ratio: '3 / 2',
      tone: 3,
    },
  ];

  protected readonly galleryRight: PhotoSlot[] = [
    {
      id: 'ceremony',
      label: 'Outdoor ceremony',
      path: homePhotos.ceremony,
      ratio: '2 / 3',
      tone: 2,
    },
    {
      id: 'children',
      label: 'Children with their cards',
      path: homePhotos.children,
      ratio: '3 / 2',
      tone: 1,
    },
  ];

  protected readonly storyLeft: PhotoSlot[] = [
    {
      id: 'dress',
      label: 'The wedding dress',
      path: homePhotos.dress,
      ratio: '2 / 3',
      tone: 3,
    },
  ];

  protected readonly storyRight: PhotoSlot[] = [
    {
      id: 'guests-dancing',
      label: 'Guests dancing',
      path: homePhotos.guestsDancing,
      ratio: '3 / 2',
      tone: 2,
    },
    {
      id: 'bride-spin',
      label: 'The bride on the dance floor',
      path: homePhotos.brideSpin,
      ratio: '3 / 2',
      tone: 1,
    },
  ];
}
