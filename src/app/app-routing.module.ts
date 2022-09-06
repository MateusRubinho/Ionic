import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/componentes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/componentes/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/componentes/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'testes',
    loadChildren: () => import('./pages/componentes/testes/testes.module').then( m => m.TestesPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/componentes/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'acordeon',
    loadChildren: () => import('./pages/componentes/acordeon/acordeon.module').then( m => m.AcordeonPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/componentes/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/componentes/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./pages/componentes/js/js.module').then( m => m.JsPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/componentes/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/Native/camera/camera.module').then( m => m.CameraPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
