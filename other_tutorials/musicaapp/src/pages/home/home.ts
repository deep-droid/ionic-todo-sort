import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic:any = [];

  constructor(public navCtrl: NavController, 
    private musicProvider : MusicProvider,
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController
  ) {


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

  shareSong()
  {
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share song with friends",
      buttons: [{
        text : "Share on FB",
        icon: "logo-facebook"
      },
      {
        text: "Share on TW",
        icon: "logo-twitter"

      },
      {
        text: "Share",
        icon: "share"

      },
      {
        text: "Cancel",
        role: "destructive",
        icon: "close"
      }
    ]
    });

    shareSongActionSheet.present();
  }
}
