import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from "../../providers/todo/todo";
import { HttpClient } from '@angular/common/http';
import { ArchivedTodosPage } from "../../pages/archived-todos/archived-todos";
import { SettingsPage } from "../../pages/settings/settings";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TimerPage } from "../../pages/timer/timer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = ["Run", "Jump", "Rol"];
  public reorderIsEnabled = false;
  public archivedTodosPage = ArchivedTodosPage;

  public trainingIsStarted = false;

  synctocloudSetting = false;
  remainderSetting = true;
  daysofweekSetting = [];
  resttimeSetting = [];
  languageSetting = "English";
  
  testRadioOpen = false;
  testRadioResult: any;
  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(
    public navCtrl: NavController, 
    private toastController: ToastController, 
    public  alertCtrl: AlertController, 
    private todoProvider: TodoProvider,
    private http: HttpClient,
    private splashScreen : SplashScreen
    ) 
    {
    this.todos = this.todoProvider.getTodos();
  }

  public sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  ionViewDidLoad()
  {
    this.splashScreen.show();
    this.sleep(2000).then( () => {

    });
    //this.splashScreen.hide();

  }

  archiveTodo(todoIndex){
    this.todoProvider.archiveTodo(todoIndex);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  goToSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  toggleTrainingStatus(){
    this.trainingIsStarted = !this.trainingIsStarted;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  openTodoAlert(){
    let alert = this.alertCtrl.create({
      title: "Add Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addTodo(todoText);

            alert.onDidDismiss(() => {
              let addTodoToast = this.toastController.create({
                message: " Todo added",
                duration: 2000
              });
              addTodoToast.present();
            })

          }
        }
      ]
    });

    alert.present();
  }

  updateTodo(todoIndex){
    let alert = this.alertCtrl.create({
      title: "Edit Todo",
      message: "Edit Your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Update Todo",
          handler: (inputData) => {
            let editTodoText;
            editTodoText = inputData.editTodoInput;
            this.todoProvider.editTodo(editTodoText, todoIndex);

            alert.onDidDismiss(() => {
              let editTodoToast = this.toastController.create({
                message: " Todo updated",
                duration: 2000
              });
              editTodoToast.present();
            })

          }
        }
      ]
    });

    alert.present();
  }


  removeTodoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    alert.present();
  }


  showVideo(todoIndex)
  {
    let showVideoToast = this.toastController.create({
      message: "Displaying video",
      duration: 2000
    });
    showVideoToast.present();
  }

  skipTraining(todoIndex)
  {
    this.todos.splice(todoIndex, 1);
    let skipTrainingToast = this.toastController.create({
      message: "Training skipped",
      duration: 2000
    });
    skipTrainingToast.present();
  }

  doneTraining(todoIndex)
  {
    this.todos.splice(todoIndex, 1);
    let doneTrainingToast = this.toastController.create({
      message: "Done training",
      duration: 2000
    });
    doneTrainingToast.present();

    let alert = this.alertCtrl.create({
      title: 'Rest time',
      subTitle: 'Time to rest',
      buttons: ['Dismiss']
    });

    alert.present();
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Cookies policy',
      subTitle: 'We do use cookies. We value your privacy.',
      buttons: ['Ok']
    });

    alert.present();
  }

  doConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Train on your own risk',
      message: 'You confirm that you perform workout on your own risk. Please consult the doctor \
      before training. Stretch your muscles and do pretraining! By clicking Agree you \
      state that you did so and are healthy to perform the training!',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });

    alert.present();
  }

  // doPrompt() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Login',
  //     message: 'Enter a name for this new album you\'re so keen on adding',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Title'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: () => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });

  //   alert.present();
  // }

  // doRadio() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Lightsaber color');

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Blue',
  //     value: 'blue',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Green',
  //     value: 'green'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Red',
  //     value: 'red'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Yellow',
  //     value: 'yellow'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Purple',
  //     value: 'purple'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'White',
  //     value: 'white'
  //   });

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Black',
  //     value: 'black'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Ok',
  //     handler: (data: any) => {
  //       console.log('Radio data:', data);
  //       this.testRadioOpen = false;
  //       this.testRadioResult = data;
  //     }
  //   });

  //   alert.present();
  // }

  // doCheckbox() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Which planets have you visited?');

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Alderaan',
  //       value: 'value1',
  //       checked: true
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Bespin',
  //       value: 'value2'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Coruscant',
  //       value: 'value3'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Endor',
  //       value: 'value4'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Hoth',
  //       value: 'value5'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Jakku',
  //       value: 'value6'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Naboo',
  //       value: 'value6'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Takodana',
  //       value: 'value6'
  //   });

  //   alert.addInput({
  //       type: 'checkbox',
  //       label: 'Tatooine',
  //       value: 'value6'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Okay',
  //     handler: (data: any) => {
  //         console.log('Checkbox data:', data);
  //         this.testCheckboxOpen = false;
  //         this.testCheckboxResult = data;
  //     }
  //   });

  //   alert.present();
  // }

}
