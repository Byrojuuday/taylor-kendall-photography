/**
 * Photographs are the original files in public/assets/images.
 * Paths are served from the site root. Originals are not renamed or copied.
 *
 * about/hazy.JPG and about/sami.JPG open as solid black frames and are unused.
 */
const home = 'assets/images/home';
const work = 'assets/images/work';
const about = 'assets/images/about';

export const homePhotos = {
  cake: `${home}/cake-cutting-davis.jpg`,
  bridesmaids: `${home}/897336_0016.jpg`,
  shoes: `${home}/897336_0036.jpg`,
  violetDance: `${home}/lovers-dancin.jpg`,
  ceremony: `${home}/897336_0025.jpg`,
  children: `${home}/897336_0034.jpg`,
  dress: `${home}/897336_0003.jpg`,
  guestsDancing: `${home}/happy-feet.jpg`,
  brideSpin: `${home}/bride-spin.jpg`,
} as const;

export const workPhotos = {
  brideWindow: `${work}/000077290029.jpg`,
  makeup: `${work}/897336_0001.jpg`,
  processional: `${work}/897336_0024.jpg`,
  balcony: `${work}/897336_0027.jpg`,
  flowerGirls: `${work}/babies-smilin.jpg`,
  hug: `${work}/besties.jpg`,
  brideBar: `${work}/bride-bar-smile.jpg`,
  courtyard: `${work}/bride-cute.jpg`,
  downTheHall: `${work}/bride-dancing-down-hall.jpg`,
  danceWithChild: `${work}/bride-holding-her-baby.jpg`,
  partyLaughing: `${work}/bridesmaids-laughin.jpg`,
  firstDance: `${work}/cute-first-dance.jpg`,
  fatherDaughter: `${work}/dad-sees-his-daughter.jpg`,
  nightDance: `${work}/dance-with-me.jpg`,
  danceFloor: `${work}/dancing-heads.jpg`,
  dinner: `${work}/dinner-shot.jpg`,
  dressOnBed: `${work}/env-dress-emergency.jpg`,
  gettingReady: `${work}/env-shot-getting-ready.jpg`,
  groom: `${work}/groom-standing.jpg`,
  groomsmen: `${work}/groomsmen-fix-tie.jpg`,
  guestShoes: `${work}/guest-feet.jpg`,
  highFive: `${work}/high-five.jpg`,
  walkingOut: `${work}/just-marriedd.jpg`,
  brideLaughing: `${work}/laughin-bride-mulligan.jpg`,
  bubbles: `${work}/man-and-his-bubbles.jpg`,
  leavingOnFoot: `${work}/married-feet.jpg`,
  motherDaughter: `${work}/mom-daughter-hug.jpg`,
  boutonniere: `${work}/mom-doing-boutinerre.jpg`,
  handsUp: `${work}/moms-found-each-other.jpg`,
  phoneOutside: `${work}/smoke-break.jpg`,
  venue: `${work}/venue.jpg`,
  guestsTalking: `${work}/wasnt-me.jpg`,
} as const;

export const aboutPhotos = {
  taylor: `${about}/profile-picture.jpg`,
  balcony: `${about}/me-smilling.jpg`,
  stringLights: `${about}/reception.jpg`,
  cats: `${about}/the-girls.jpg`,
  lawn: `${about}/wedding2.jpg`,
} as const;

export const photos = {
  pricingHero: 'assets/images/pricing/church-exit.jpg',
  contactHero: 'assets/images/contact/celebration.jpg',
} as const;

/** Instagram and YouTube URLs are not in the design reference. */
export const externalLinks = {
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  email: 'kendallpictures@pm.me',
} as const;

export interface PhotoSlot {
  id: string;
  label: string;
  path: string;
  ratio: string;
  tone: number;
}
