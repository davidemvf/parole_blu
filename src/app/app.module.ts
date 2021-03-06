import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './shell/home/home.component';
import { AboutMeComponent } from './shell/about-me/about-me.component';
import { RomanziComponent } from './shell/romanzi/romanzi.component';
import { RaccontiComponent } from './shell/racconti/racconti.component';
import { SaggiComponent } from './shell/saggi/saggi.component';
import { ContattiComponent } from './shell/contatti/contatti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomeComponent,
    AboutMeComponent,
    RomanziComponent,
    RaccontiComponent,
    SaggiComponent,
    ContattiComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
