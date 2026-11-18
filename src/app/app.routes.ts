import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
    title: 'Home — Kendall Photo and Film',
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work').then((m) => m.WorkPage),
    title: 'Work — Kendall Photo and Film',
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then((m) => m.PricingPage),
    title: 'Pricing — Kendall Photo and Film',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutPage),
    title: 'About — Kendall Photo and Film',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactPage),
    title: 'Contact — Kendall Photo and Film',
  },
  { path: '**', redirectTo: '' },
];
