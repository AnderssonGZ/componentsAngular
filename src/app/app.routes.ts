import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path : '',
      loadComponent : () => import('./components/silder/silder.component').then(m => m.SilderComponent)
    },
    {
        path:'card',
        loadComponent: () => import('./components/card/card.component').then(m => m.CardComponent)
    },
    {
        path:'input',
        loadComponent: () => import('./components/input/input.component').then(m => m.InputComponent)
    }
];
