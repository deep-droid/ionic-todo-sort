import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic:any = [];

  constructor(public navCtrl: NavController, private musicProvider : MusicProvider,
  private loadingController: LoadingController) {


  }

  ionViewDidLoad()
  {
    let allMusicLoadingController = this.loadingController.create({
      content: "Getting your music from server"

    });

    allMusicLoadingController.present();

    this.musicProvider.getMusic()
      .subscribe((musicList) => {
        allMusicLoadingController.dismiss();
        this.allMusic = musicList;
      });
  }

  addOneSong(refresher)
  {
    this.musicProvider.getOneSong()
    .subscribe(oneSong => {
      this.allMusic.unshift(oneSong[0]);
      refresher.complete();
    });

  }
}
