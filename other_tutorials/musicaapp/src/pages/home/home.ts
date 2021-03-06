import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicProvider } from "../../providers/music/music";
import { SocialSharing } from "@ionic-native/social-sharing";
import { MusicPlayerPage } from "../music-player/music-player";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allMusic:any = [];

  constructor(
    public navCtrl: NavController, 
    private socialSharing : SocialSharing,
    private musicProvider : MusicProvider,
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController,
    private splashScreen : SplashScreen
  ) {


  }

  ionViewDidLoad()
  {
    this.splashScreen.show();

    this.splashScreen.hide();

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

  shareSong(music)
  {
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share song with friends",
      buttons: [{
        text : "Share on FB",
        icon: "logo-facebook",
        handler: () => {
          this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url);
        }
      },
      {
        text: "Share on TW",
        icon: "logo-twitter",
        handler: () => {
          this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url);
        }
      },
      {
        text: "Share",
        icon: "share",
        handler: () => {
          this.socialSharing.share(music.name, "", music.image, music.image_url);
        }

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

  goToMusicPlayer(music){
    this.navCtrl.push(MusicPlayerPage, {
      music: music
    });
  }
}
