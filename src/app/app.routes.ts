import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/status',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./private/home/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'deliver',
    loadComponent: () => import('./private/deliver/deliver.page').then( m => m.DeliverPage)
  },
  {
    path: 'signature',
    loadComponent: () => import('./private/signature/signature.page').then( m => m.SignaturePage)
  },
];
