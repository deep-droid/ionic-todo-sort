// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { IonicStorageModule } from '@ionic/storage';
import { TrainingDataModel } from '../../models/trainingdata-model';
import { reorderArray } from 'ionic-angular';

/*
  Generated class for the TrainingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrainingsProvider {

  projects: any[] = [];
  projectActive = true;
  projectDone = false;

  timerInterval: any;
  secondsElapsed: number = 0;
  // public name: string,
  // public lastChecked: Date,
  // public repetitions: number,
  // public totalRepetitions: number,
  // public active: boolean,
  // public done: boolean,

  constructor(public storage: Storage) {

  }

  load(): void {

      this.storage.get('permatimerProjects').then((projects) => {

          if(projects){

              for(let project of projects){

                  let savedProject = new TrainingDataModel(project.name, new Date(project.lastChecked), project.repetitions, project.totalRepetitions, project.active, project.done);
                  this.projects.push(savedProject);

                  // if(project.active){
                  //     this.startTiming(savedProject, true);
                  // }

              }

          }

      });

      this.storage.get('permatimerTime').then((time) => {
          this.secondsElapsed = time;
      });

  }

  save(): void {
      this.storage.set('permatimerProjects', this.projects);
      this.storage.set('permatimerTime', this.secondsElapsed);
  }

  reorder(indexes): void {

      this.projects = reorderArray(this.projects, indexes);
      this.save();

  }

/*   startTiming(project, restarting): void {

      this.projectActive = true;

      if(!restarting){
          project.setIsActive(true);
          project.setLastChecked(new Date());
      }

      this.timerInterval = setInterval(() => {

          let now = new Date();
          let timeDifference = now.getTime() - project.lastChecked.getTime();
          let seconds = timeDifference / 1000;

          this.secondsElapsed += seconds;
          project.addToTotalSeconds(seconds);

          project.setLastChecked(now);
          this.save();

      }, 1000);
  }

  stopTiming(project): number {

      let totalTimeElapsed = this.secondsElapsed;

      this.projectActive = false;

      project.setIsActive(false);
      clearInterval(this.timerInterval);
      this.timerInterval = false;
      this.secondsElapsed = 0;
      this.save();

      return totalTimeElapsed;

  }

  increaseSeconds(project, amount): void {
      project.addToTotalSeconds(amount);
      this.save();
  }

  decreaseSeconds(project, amount): void {
      project.deductFromTotalSeconds(amount);
      this.save();
  } */

  addProject(project): void {

      this.projects.push(project);
      this.save();

  }

  editProject(project, title): void {

      project.setName(title);
      this.save();

  }

  removeProject(project): void {

      let index = this.projects.indexOf(project);

      if(index > -1){
          this.projects.splice(index, 1);
          this.save();
      }

  }

}

