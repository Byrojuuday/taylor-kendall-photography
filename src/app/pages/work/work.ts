import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { externalLinks, homePhotos, workPhotos, type PhotoSlot } from '../../shared/assets';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame';

@Component({
  selector: 'app-work',
  imports: [RouterLink, PhotoFrame],
  templateUrl: './work.html',
})
export class WorkPage {
  protected readonly youtube = externalLinks.youtube;
  protected readonly feature = homePhotos.cake;

  protected readonly openingLeft: PhotoSlot[] = [
    {
      id: 'getting-ready',
      label: 'Getting ready',
      path: workPhotos.gettingReady,
      ratio: '3 / 2',
      tone: 1,
    },
    {
      id: 'party-laughing',
      label: 'With the wedding party',
      path: workPhotos.partyLaughing,
      ratio: '3 / 2',
      tone: 2,
    },
    {
      id: 'bride-window',
      label: 'Bride by the window',
      path: workPhotos.brideWindow,
      ratio: '2 / 3',
      tone: 3,
    },
  ];

  protected readonly openingRight: PhotoSlot[] = [
    {
      id: 'father-daughter',
      label: 'Father and daughter',
      path: workPhotos.fatherDaughter,
      ratio: '3 / 2',
      tone: 2,
    },
    {
      id: 'processional',
      label: 'Walking to the ceremony',
      path: workPhotos.processional,
      ratio: '2 / 3',
      tone: 1,
    },
    {
      id: 'bride-laughing',
      label: 'Laughing before the ceremony',
      path: workPhotos.brideLaughing,
      ratio: '3 / 2',
      tone: 3,
    },
  ];

  protected readonly pairs: PhotoSlot[] = [
    frame('flower-girls', 'Flower girls', workPhotos.flowerGirls, '3 / 2', 1),
    frame('bride-bar', 'Before the ceremony', workPhotos.brideBar, '2 / 3', 2),
    frame('hug', 'A hug at the reception', workPhotos.hug, '3 / 2', 3),
    frame('down-the-hall', 'Down the hall', workPhotos.downTheHall, '2 / 3', 1),
    frame('courtyard', 'On the courtyard', workPhotos.courtyard, '3 / 2', 2),
    frame('first-dance', 'The first dance', workPhotos.firstDance, '2 / 3', 3),
    frame('dance-child', 'A dance with a child', workPhotos.danceWithChild, '3 / 2', 1),
    frame('groom', 'The groom', workPhotos.groom, '2 / 3', 2),
    frame('night-dance', 'Dancing together', workPhotos.nightDance, '3 / 2', 3),
    frame('mother-daughter', 'Mother and daughter', workPhotos.motherDaughter, '2 / 3', 1),
    frame('dance-floor', 'The dance floor', workPhotos.danceFloor, '3 / 2', 2),
    frame('boutonniere', 'The boutonniere', workPhotos.boutonniere, '2 / 3', 3),
    frame('makeup', 'Makeup', workPhotos.makeup, '3 / 2', 1),
    frame('balcony', 'Guests on the balcony', workPhotos.balcony, '3 / 2', 2),
    frame('dinner', 'Dinner', workPhotos.dinner, '3 / 2', 3),
    frame('dress-bed', 'Working on the dress', workPhotos.dressOnBed, '3 / 2', 1),
    frame('groomsmen', 'The groomsmen', workPhotos.groomsmen, '3 / 2', 2),
    frame('guest-shoes', 'Guest shoes', workPhotos.guestShoes, '3 / 2', 3),
    frame('high-five', 'A high five', workPhotos.highFive, '3 / 2', 1),
    frame('walking-out', 'Walking out together', workPhotos.walkingOut, '3 / 2', 2),
    frame('bubbles', 'Bubbles', workPhotos.bubbles, '3 / 2', 3),
    frame('leaving', 'Leaving on foot', workPhotos.leavingOnFoot, '3 / 2', 1),
    frame('hands-up', 'Hands in the air', workPhotos.handsUp, '3 / 2', 2),
    frame('phone-outside', 'A phone call outside', workPhotos.phoneOutside, '3 / 2', 3),
    frame('venue', 'The venue', workPhotos.venue, '3 / 2', 1),
    frame('guests-talking', 'Guests talking', workPhotos.guestsTalking, '3 / 2', 2),
  ];
}

function frame(id: string, label: string, path: string, ratio: string, tone: number): PhotoSlot {
  return { id, label, path, ratio, tone };
}
