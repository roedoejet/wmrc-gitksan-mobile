import { Component } from '@angular/core';

import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';

import { File, FileEntry } from '@ionic-native/file';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { Media, MediaObject } from '@ionic-native/media'

import { MTDInfo } from '../../app/global'

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
    audio_path: string = MTDInfo.config['audio_path']
    constructor(public navParams: NavParams, public alertCtrl: AlertController, public audio: Media, public plt: Platform, private file: File, private transfer: FileTransfer,) {
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


    fileTransfer: FileTransferObject = this.transfer.create();

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: 'There is no audio for this yet.',
            buttons: ['Dismiss']
        });
        alert.present();
    };


    mediaPlay(path) {
        let audio: MediaObject = this.audio.create(path);
        audio.onError.subscribe(() => {
            this.audio_playing.pop();
            this.onError("The audio file wasn't found.");
        })
        audio.onStatusUpdate.subscribe((status) => {
            if (status === 1) {
                this.audio_playing.push(audio)
                console.log('playing')
            }
            if (status === 4) {
                this.audio_playing.pop()
                console.log('stopped')
            }
        })
        audio.play()
    }

    htmlAudioPlay(path) {
        let audio = new Audio(path);
        console.log(audio)
        audio.onerror = () => {
            this.audio_playing.pop();
            this.onError("The audio file wasn't found.");
        }
        audio.onended = () => {
            this.audio_playing.pop()
        }
        this.audio_playing.push(audio)
        audio.play()
    }


    playInternal(path) {
        this.file.resolveDirectoryUrl(this.file.dataDirectory).then((rootdir) => {
            this.file.getFile(rootdir, path, { create: false }).then((entryFile) => {
                this.mediaPlay(entryFile.toInternalURL())
            })
        })
    }

    downloadAndPlay(external_path, internal_path) {
        var targetPath = this.file.dataDirectory + internal_path;
        console.log('downloading to ' + targetPath)
        var trustHosts = true;
        var options = {};
        this.fileTransfer.download(external_path, targetPath, trustHosts, options).then((track: FileEntry) => {
            this.mediaPlay(track.toInternalURL())
        }, (error) => { this.onError(error) });
    }

    playAudio(track) {
        track = { filename: track, path: "https://roedoejet.github.io/wmrc-gitksan/audio/" }
        if (track !== undefined && track.filename !== undefined) {
            // get path. add config path if it's there.
            let path = track.filename
            if (this.audio_path && this.audio_path !== undefined) {
                path = this.audio_path + track.filename
            }
            // set ID and path to internal storage
            let internal_path = "assets/audio/" + track.filename
            let id = Date.now().toString()
            // if desktop or browser, run as HTML5 Audio
            if (this.plt.is('core') || this.plt.is('mobileweb')) {
                this.htmlAudioPlay(path)
                // If iOS or Android, download, store and play
            } else if (this.plt.is('android') || this.plt.is('ios')) {
                this.file.checkFile(this.file.dataDirectory, internal_path)
                    .then((check) => {
                        if (check) {
                            this.playInternal(internal_path);
                        } else {
                            this.downloadAndPlay(path, internal_path)
                        }
                    }).catch(err => {
                        this.downloadAndPlay(path, internal_path)
                    })
            } else {
                this.showAlert()
            }
        } else {
            this.onError("No audio for this file.")
        }
    }

    onError(err) {
        console.log(err)
        let alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: err.toString(),
            buttons: ['OK']
        });
        alert.present();
    };

    stopAudio(track?) {
        if (this.plt.is('core') || this.plt.is('mobileweb')) {
            this.audio_playing.forEach((a) => a.pause());
        } else {
            this.audio_playing.forEach((a) => a.stop());
        }
    }
}

