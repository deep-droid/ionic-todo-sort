import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MusicPlayerPage } from '../pages/music-player/music-player';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicProvider } from '../providers/music/music';

import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Media } from '@ionic-native/media';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    //SocialSharing, 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing, 
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider
  ]
})
export class AppModule {}
