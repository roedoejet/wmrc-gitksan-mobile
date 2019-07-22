import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';

import { Media } from '@ionic-native/media'

@Component({
    templateUrl: 'story.html'
})
export class StoryPage {
    checkedOptions: string[] = [];
    title: string;
    index: number = 0;
    image: string;
    optionalSelection: string[];
    subtitle: string;
    storyPages: any[];
    storySlides: any[] = [];
    audio_playing = [];
    constructor(public navParams: NavParams, public alertCtrl: AlertController, public audio: Media, public plt: Platform) {
        this.image = this.navParams.get('cover')
        this.title = this.navParams.get('title')
        this.subtitle = this.navParams.get('subtitle')
        this.storyPages = this.navParams.get('storyPages')
        if (this.storyPages[0].optional) {
            this.optionalSelection = Object.keys(this.storyPages[0].optional)
        }
    }
    slides = this.navParams.get('storyPages')

    showOptions() {
        // Object with options used to create the alert
        let options = {
            title: 'Optional fields',
            message: 'Choose which optional fields to display',
            inputs: [],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: data => {
                        let checkedOptions = []
                        for (let item of data) {
                            for (let key in this.storyPages[this.index].optional) {
                                if (this.storyPages[this.index].optional[key] === item) {
                                    checkedOptions.push(key)
                                }
                            }
                        }
                        this.checkedOptions = checkedOptions
                    }
                }
            ]
        };


        // Now we add the radio buttons
        for (let option of this.optionalSelection) {
            options.inputs.push({ name: 'options', value: this.storyPages[0].optional[option], label: option, type: 'checkbox', checked: this.checkChecked(option) });
        }
        let alert = this.alertCtrl.create(options);
        alert.present();

    }

    checkChecked(option) {
        if (this.checkedOptions.indexOf(option) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    playAudio(track) {
        if (this.plt.is('core') || this.plt.is('mobileweb')) {
            let audio = new Audio(track)
            this.audio_playing.push(audio)
            audio.onended = () => {
                this.audio_playing.pop()
            }
            audio.play()
        } else {
            let audio = this.audio.create(track)
            this.audio_playing.push(audio)
            audio.onStatusUpdate.subscribe((status) => {
                if (status === 4) {
                    this.audio_playing.pop()
                }
            })
            audio.play();
        }
    }

    stopAudio(track?) {
        if (this.plt.is('core') || this.plt.is('mobileweb')) {
            this.audio_playing.forEach((a) => a.pause());
        } else {
            this.audio_playing.forEach((a) => a.stop());
        }
    }
}

