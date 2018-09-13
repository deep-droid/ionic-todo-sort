import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {

  public music = {};
  private songMedia: MediaObject = null;
  private isMusicPaused = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mediaPlugin: Media) {
    // console.log(this.navParams.get("music"));
    this.music = this.navParams.get("music");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MusicPlayerPage');
    // this.music = this.navParams.get("music");
  }

  inonViewWillLeave()
  {
    this.stopMusic();
  }

  playMusic() {
    if (this.songMedia == null)
    {
      this.songMedia = this.mediaPlugin.create(this.music["music_url"]);
      this.songMedia.play();
    } else {
      if (this.isMusicPaused == true) {
        this.songMedia.play();
        this.isMusicPaused = false;
        this.mediaPlugin.
      }
    }
  }

  pauseMusic() {
    if (this.songMedia !== null)
    {
      this.songMedia.pause();
      this.isMusicPaused = true;
    }
  }

  stopMusic() {
    if (this.songMedia !== null)
    {
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia = null;
    }    

  }
}
