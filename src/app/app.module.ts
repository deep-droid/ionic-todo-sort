import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoProvider } from '../providers/todo/todo';
/// add "Module" for @NgModule annotation
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ArchivedTodosPage } from "../pages/archived-todos/archived-todos";
import { SettingsPage } from '../pages/settings/settings';
import { TrainingsProvider } from '../providers/trainings/trainings';
import { CalculateStatisticsPipe } from '../pipes/calculate-statistics/calculate-statistics';
import { IonicStorageModule } from "@ionic/storage";
// import { BrowserModule } from "@angular/platform-browser";
import { TimerPage } from "../pages/timer/timer";

//Template app:
//https://www.joshmorony.com/creating-a-time-tracking-app-in-3-hours-and-57-minutes/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchivedTodosPage,
    SettingsPage,
    TimerPage, 
    CalculateStatisticsPipe
  ],
  imports: [
    ///Add "Module" for @NgModule annotation
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchivedTodosPage,
    SettingsPage,
    TimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    TrainingsProvider
  ]
})
export class AppModule {}
