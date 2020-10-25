import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './shell/home/home.component';
import { AboutMeComponent } from './shell/about-me/about-me.component';
import { RomanziComponent } from './shell/romanzi/romanzi.component';
import { RaccontiComponent } from './shell/racconti/racconti.component';
import { SaggiComponent } from './shell/saggi/saggi.component';
import { ContattiComponent } from './shell/contatti/contatti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
      path: '',
      component: ShellComponent,
      children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'su_di_me', component: AboutMeComponent },
          { path: 'romanzi', component: RomanziComponent },
          { path: 'racconti', component: RaccontiComponent },
          { path: 'saggi', component: SaggiComponent },
          { path: 'contatti', component: ContattiComponent}
      ],
  },
  {   
      path: 'home', 
      component: HomeComponent 
  },
  { 
      path: 'error', 
      component: PageNotFoundComponent 
  },
  {
      path: '**',
      redirectTo: '/error',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
