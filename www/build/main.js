webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmarks_bookmarks__ = __webpack_require__(286);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__bookmarks_bookmarks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browse_browse__ = __webpack_require__(288);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__browse_browse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flashcards_flashcards__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__flashcards_flashcards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flashcards_flashcard_modal_component__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__flashcards_flashcard_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__random_random__ = __webpack_require__(290);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__random_random__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(291);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__search_search__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_entry_model__ = __webpack_require__(292);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_entry_list_component__ = __webpack_require__(293);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__shared_entry_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_word_modal_component__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__shared_word_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stories_stories__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__stories_stories__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stories_story__ = __webpack_require__(205);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__stories_story__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flashcard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mtd_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Flashcard = /** @class */ (function () {
    function Flashcard(audio, alertCtrl, navCtrl, navParams, mtdService, viewCtrl, file, plt, transfer) {
        this.audio = audio;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mtdService = mtdService;
        this.viewCtrl = viewCtrl;
        this.file = file;
        this.plt = plt;
        this.transfer = transfer;
        this.displayImages = true; //default show images, turns to false on 404
        this.startIndex = 0;
        this.audio_playing = [];
        this.audio_path = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* MTDInfo */].config['audio_path'];
        this.fileTransfer = this.transfer.create();
        this.deck = navParams.get('deck');
        this.categories = mtdService.categories;
        this.card = this.categories[this.deck][this.startIndex];
        this.front = true;
        try {
            this.image = 'assets/img/' + this.card.img;
        }
        catch (error) {
            this.image = "";
        }
        this.style = navParams.get('style');
    }
    // Go to previous card in deck
    Flashcard.prototype.prev1 = function () {
        if (this.startIndex - 1 > 0) {
            this.startIndex -= 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img;
            }
            catch (error) {
            }
        }
        else {
            this.startIndex = 0;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img;
            }
            catch (error) {
            }
        }
    };
    // Go to next card in deck
    Flashcard.prototype.next1 = function () {
        if (this.startIndex + 1 < this.categories[this.deck].length) {
            this.startIndex += 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img;
            }
            catch (error) {
            }
        }
        else {
            this.startIndex = this.categories[this.deck].length - 1;
            this.card = this.categories[this.deck][this.startIndex];
            try {
                this.image = 'assets/img/' + this.card.img;
            }
            catch (error) {
            }
        }
    };
    Flashcard.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Flashcard.prototype.onSuccess = function (id) {
        console.log(id);
        // console.log('loaded audio ${id} with path of ${path}'); 
    };
    ;
    Flashcard.prototype.onError = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: "We don't have audio for that entry.",
            buttons: ['OK']
        });
        alert.present();
    };
    ;
    Flashcard.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: 'There is no audio for this yet.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ;
    Flashcard.prototype.stopAllAudio = function () {
        this.audio_playing.forEach(function (element) {
            element.pause();
        });
        this.audio_playing = [];
    };
    Flashcard.prototype.mediaPlay = function (path) {
        var _this = this;
        var audio = this.audio.create(path);
        audio.onError.subscribe(function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        });
        audio.onStatusUpdate.subscribe(function (status) {
            if (status === 1) {
                _this.audio_playing.push(audio);
                console.log('playing');
            }
            if (status === 4) {
                _this.audio_playing.pop();
                console.log('stopped');
            }
        });
        audio.play();
    };
    Flashcard.prototype.htmlAudioPlay = function (path) {
        var _this = this;
        var audio = new Audio(path);
        audio.onerror = function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        };
        audio.onended = function () {
            _this.audio_playing.pop();
        };
        this.audio_playing.push(audio);
        audio.play();
    };
    Flashcard.prototype.playInternal = function (path) {
        var _this = this;
        this.file.resolveDirectoryUrl(this.file.dataDirectory).then(function (rootdir) {
            _this.file.getFile(rootdir, path, { create: false }).then(function (entryFile) {
                _this.mediaPlay(entryFile.toInternalURL());
            });
        });
    };
    Flashcard.prototype.downloadAndPlay = function (external_path, internal_path) {
        var _this = this;
        var targetPath = this.file.dataDirectory + internal_path;
        console.log('downloading to ' + targetPath);
        var trustHosts = true;
        var options = {};
        this.fileTransfer.download(external_path, targetPath, trustHosts, options).then(function (track) {
            _this.mediaPlay(track.toInternalURL());
        }, function (error) { _this.onError(error); });
    };
    Flashcard.prototype.playAudio = function (track) {
        var _this = this;
        if (track !== undefined && track.filename !== undefined) {
            // get path. add config path if it's there.
            var path_1 = track.filename;
            if (this.audio_path && this.audio_path !== undefined) {
                path_1 = this.audio_path + track.filename;
            }
            // set ID and path to internal storage
            var internal_path_1 = "assets/audio/" + track.filename;
            var id = Date.now().toString();
            // if desktop or browser, run as HTML5 Audio
            if (this.plt.is('core') || this.plt.is('mobileweb')) {
                this.htmlAudioPlay(path_1);
                // If iOS or Android, download, store and play
            }
            else if (this.plt.is('android') || this.plt.is('ios')) {
                this.file.checkFile(this.file.dataDirectory, internal_path_1)
                    .then(function (check) {
                    if (check) {
                        _this.playInternal(internal_path_1);
                    }
                    else {
                        _this.downloadAndPlay(path_1, internal_path_1);
                    }
                }).catch(function (err) {
                    _this.downloadAndPlay(path_1, internal_path_1);
                });
            }
            else {
                this.showAlert();
            }
        }
        else {
            this.onError("No audio for this file.");
        }
    };
    Flashcard.prototype.imageError = function () {
        this.displayImages = false;
    };
    Flashcard.prototype.toggleFav = function (entry) {
        this.mtdService.toggleBookmark(entry);
    };
    Flashcard.prototype.favourited = function (entry) {
        return this.mtdService.bookmarks.value.indexOf(entry) > -1;
    };
    Flashcard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'flashcard-modal',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/flashcards/flashcard-modal.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Flashcard Quiz\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ng-switch="style" on-swipe-up="front = !front">\n\n  <ion-card>\n\n    <div *ngIf="displayImages">\n      <img (click)="playAudio(card)" [(src)]="image" onError="this.src=\'assets/img/default.png\'" *ngIf="card.img" />\n    </div>\n    <ion-card-content [ngSwitch]="style">\n      <div *ngSwitchCase="\'Active\'">\n        <ion-card-title *ngIf="!front">\n          {{card.word}}\n        </ion-card-title>\n        <ion-card-title class="definition" *ngIf="front">\n          {{card.definition}}\n        </ion-card-title>\n      </div>\n      <div *ngSwitchCase="\'Passive\'">\n        <ion-card-title *ngIf="!front">\n          {{card.definition}}\n        </ion-card-title>\n        <ion-card-title class="definition" *ngIf="front">\n          {{card.word}}\n        </ion-card-title>\n      </div>\n      <div *ngSwitchCase="\'Non-Written\'">\n        <ion-card-title *ngIf="!front">\n          {{card.word}} - {{card.definition}}\n        </ion-card-title>\n      </div>\n      <div *ngIf="card.optional && optional">\n        <p class="option" *ngFor="let option of checkedOptions; let i = index">\n          {{option}} - {{card.optional[option]}}\n        </p>\n      </div>\n    </ion-card-content>\n\n    <ion-row *ngIf="(card.audio | noNullObjectValues)?.length > 0">\n      <ion-card>\n        <ion-card-header>\n          Audio\n        </ion-card-header>\n\n        <ion-list>\n          <button ion-item *ngFor="let track of (card.audio | noNullObjectValues)" (click)="playAudio(track)">\n            <ion-icon name="musical-notes" item-start></ion-icon>\n            Speaker: {{ track.speaker }}\n          </button>\n\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row *ngIf="(card.example_sentence | noNullValues)?.length > 0">\n      <ion-card>\n        <ion-card-header>\n          Sentences\n        </ion-card-header>\n\n        <ion-list *ngFor="let sentence of (card.example_sentence | noNullValues); let i = index">\n\n          <button ion-item *ngFor="let track of (card.example_sentence_audio[i] | noNullObjectValues)" (click)="playAudio(track)">\n            <ion-icon name="musical-notes" item-start></ion-icon>\n            <h2>{{ sentence }}</h2>\n            <h4>{{ card.example_sentence_definition[i] }}</h4>\n            <h6>Speaker: {{ track.speaker }}</h6>\n          </button>\n\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="primary" icon-left (click)="toggleFav(card)">\n          <ion-icon *ngIf="favourited(card)" name="ios-bookmarks"></ion-icon>\n          <ion-icon *ngIf="!favourited(card)" name="ios-bookmarks-outline"></ion-icon>\n          Bookmark\n        </button>\n        <button ion-button clear small color="primary" icon-left (click)="front = !front">\n          <ion-icon name=\'refresh\'></ion-icon>\n          <span *ngIf="front">Flip to back</span><span *ngIf="!front">Flip to front</span>\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons left class="bar-buttons bar-buttons-ios">\n      <button ion-button icon-only (click)="prev1()">\n        <ion-icon name="ios-arrow-back" class="scroll"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end class="bar-buttons bar-buttons-ios">\n      <button ion-button icon-only (click)="next1()">\n        <ion-icon name="ios-arrow-forward" class="scroll"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/flashcards/flashcard-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_mtd_service__["a" /* MTDService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], Flashcard);
    return Flashcard;
}());

//# sourceMappingURL=flashcard-modal.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_mtd_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WordModal = /** @class */ (function () {
    function WordModal(navCtrl, navParams, viewCtrl, audio, alertCtrl, file, transfer, storage, plt, mtdService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.audio = audio;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.transfer = transfer;
        this.storage = storage;
        this.plt = plt;
        this.mtdService = mtdService;
        this.displayImages = true; //default show images, turns to false on 404
        this.optional = false;
        this.objectKeys = Object.keys;
        this.default_sentence_i = 0;
        this.audio_playing = [];
        this.audio_path = __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* MTDInfo */].config['audio_path'];
        this.fileTransfer = this.transfer.create();
        console.log(this.entry);
        this.entry = navParams.get('entry');
        if (this.entry.optional) {
            this.optionalSelection = this.entry.optional.map(function (x) { return Object.keys(x); })[0];
        }
        console.log(this.optionalSelection);
        this.checkedOptions = this.optionalSelection;
        console.log(this.checkedOptions);
        try {
            this.image = 'assets/img/' + this.entry.img;
        }
        catch (error) {
            console.log(error);
        }
    }
    WordModal.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: 'There is no audio for this yet.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ;
    WordModal.prototype.showExpAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: 'There is no audio for this yet. Are you sure you are connected to the internet?',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ;
    WordModal.prototype.stopAllAudio = function () {
        this.audio_playing.forEach(function (element) {
            try {
                element.stop();
            }
            catch (error) {
                element.pause();
            }
        });
        this.audio_playing = [];
    };
    WordModal.prototype.mediaPlay = function (path) {
        var _this = this;
        var audio = this.audio.create(path);
        audio.onError.subscribe(function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        });
        audio.onStatusUpdate.subscribe(function (status) {
            if (status === 1) {
                _this.audio_playing.push(audio);
                console.log('playing');
            }
            if (status === 4) {
                _this.audio_playing.pop();
                console.log('stopped');
            }
        });
        audio.play();
    };
    WordModal.prototype.htmlAudioPlay = function (path) {
        var _this = this;
        var audio = new Audio(path);
        audio.onerror = function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        };
        audio.onended = function () {
            _this.audio_playing.pop();
        };
        this.audio_playing.push(audio);
        audio.play();
    };
    WordModal.prototype.playInternal = function (path) {
        var _this = this;
        this.file.resolveDirectoryUrl(this.file.dataDirectory).then(function (rootdir) {
            _this.file.getFile(rootdir, path, { create: false }).then(function (entryFile) {
                _this.mediaPlay(entryFile.toInternalURL());
            });
        });
    };
    WordModal.prototype.downloadAndPlay = function (external_path, internal_path) {
        var _this = this;
        var targetPath = this.file.dataDirectory + internal_path;
        console.log('downloading to ' + targetPath);
        var trustHosts = true;
        var options = {};
        this.fileTransfer.download(external_path, targetPath, trustHosts, options).then(function (track) {
            _this.mediaPlay(track.toInternalURL());
        }, function (error) { _this.onError(error); });
    };
    WordModal.prototype.playAudio = function (track) {
        var _this = this;
        if (track !== undefined && track.filename !== undefined) {
            // get path. add config path if it's there.
            var path_1 = track.filename;
            if (this.audio_path && this.audio_path !== undefined) {
                path_1 = this.audio_path + track.filename;
            }
            // set ID and path to internal storage
            var internal_path_1 = "assets/audio/" + track.filename;
            var id = Date.now().toString();
            // if desktop or browser, run as HTML5 Audio
            if (this.plt.is('core') || this.plt.is('mobileweb')) {
                this.htmlAudioPlay(path_1);
                // If iOS or Android, download, store and play
            }
            else if (this.plt.is('android') || this.plt.is('ios')) {
                this.file.checkFile(this.file.dataDirectory, internal_path_1)
                    .then(function (check) {
                    if (check) {
                        _this.playInternal(internal_path_1);
                    }
                    else {
                        _this.downloadAndPlay(path_1, internal_path_1);
                    }
                }).catch(function (err) {
                    _this.downloadAndPlay(path_1, internal_path_1);
                });
            }
            else {
                this.showAlert();
            }
        }
        else {
            this.onError("No audio for this file.");
        }
    };
    WordModal.prototype.onError = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: err.toString(),
            buttons: ['OK']
        });
        alert.present();
    };
    ;
    WordModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WordModal.prototype.showOptions = function () {
        var _this = this;
        // Object with options used to create the alert
        var options = {
            title: 'Optional fields',
            message: 'Choose which optional fields to display',
            inputs: [],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        var checkedOptions = [];
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var item = data_1[_i];
                            for (var _a = 0, _b = _this.optionalSelection; _a < _b.length; _a++) {
                                var key = _b[_a];
                                if (key === item) {
                                    checkedOptions.push(key);
                                }
                            }
                        }
                        _this.checkedOptions = checkedOptions;
                    }
                }
            ]
        };
        // Now we add the radio buttons
        for (var _i = 0, _a = this.optionalSelection; _i < _a.length; _i++) {
            var option = _a[_i];
            options.inputs.push({ name: 'options', value: option, label: option, type: 'checkbox', checked: this.checkChecked(option) });
        }
        var alert = this.alertCtrl.create(options);
        alert.present();
    };
    WordModal.prototype.checkChecked = function (option) {
        console.log(option);
        if (this.checkedOptions.indexOf(option) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    WordModal.prototype.imageError = function () {
        this.displayImages = false;
    };
    WordModal.prototype.toggleFav = function (entry) {
        this.mtdService.toggleBookmark(entry);
    };
    WordModal.prototype.favourited = function (entry) {
        return this.mtdService.bookmarks.value.indexOf(entry) > -1;
    };
    WordModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'word-modal',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/shared/word-modal.component.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Word Info\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf="displayImages">\n      <img [(src)]="entry.img" onError="this.src=\'assets/img/default.png\'" *ngIf="entry.img" />\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n        {{entry.word}}\n      </ion-card-title>\n      <p class="definition">\n        {{entry.definition}}\n      </p>\n      <div *ngIf="entry.optional && optional">\n        <div class="option" *ngFor="let optional_dict of entry.optional; let i = index">\n          <p *ngFor="let option of objectKeys(optional_dict)">\n            <span *ngIf="checkChecked(option)">{{ option }} - {{ entry.optional[i][option]}} </span>\n          </p>\n        </div>\n      </div>\n    </ion-card-content>\n\n    <ion-row *ngIf="(entry.audio | noNullObjectValues)?.length > 0">\n      <ion-card>\n        <ion-card-header>\n          Audio\n        </ion-card-header>\n\n        <ion-list>\n          <button ion-item *ngIf="audio_playing?.length > 0" (click)="stopAllAudio()">\n            Stop all audio\n            <ion-icon name="hand" item-start></ion-icon>\n          </button>\n          <button ion-item *ngFor="let track of (entry.audio | noNullObjectValues)" (click)="playAudio(track)">\n            <ion-icon name="musical-notes" item-start></ion-icon>\n            <span *ngIf="track.speaker">Speaker: {{ track.speaker }}</span>\n          </button>\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row *ngIf="(entry.example_sentence | noNullValues)?.length > 0">\n      <ion-card>\n        <ion-card-header>\n          Sentences\n        </ion-card-header>\n\n        <ion-list *ngFor="let sentence of (entry.example_sentence | noNullValues); let i = index">\n\n          <button ion-item *ngFor="let track of (entry.example_sentence_audio[i] | noNullObjectValues)"\n            (click)="playAudio(track)">\n            <ion-icon name="musical-notes" item-start></ion-icon>\n            <h2>{{ sentence }}</h2>\n            <h4>{{ entry.example_sentence_definition[i] }}</h4>\n            <h6 *ngIf="track.speaker">Speaker: {{ track.speaker }}</h6>\n          </button>\n\n        </ion-list>\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="primary" icon-left (click)="toggleFav(entry)">\n          <ion-icon *ngIf="favourited(entry)" name="ios-bookmarks"></ion-icon>\n          <ion-icon *ngIf="!favourited(entry)" name="ios-bookmarks-outline"></ion-icon>\n          Bookmark\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf="entry.optional">\n  <ion-toolbar>\n    <ion-item>\n      <ion-toggle checked="false" [(ngModel)]="optional"></ion-toggle>\n      <ion-label (click)="showOptions()">Show optional information</ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/shared/word-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__app_mtd_service__["a" /* MTDService */]])
    ], WordModal);
    return WordModal;
}());

//# sourceMappingURL=word-modal.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoryPage = /** @class */ (function () {
    function StoryPage(navParams, alertCtrl, audio, plt, file, transfer) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.audio = audio;
        this.plt = plt;
        this.file = file;
        this.transfer = transfer;
        this.checkedOptions = [];
        this.index = 0;
        this.storySlides = [];
        this.audio_playing = [];
        this.audio_path = __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* MTDInfo */].config['audio_path'];
        this.slides = this.navParams.get('storyPages');
        this.fileTransfer = this.transfer.create();
        this.image = this.navParams.get('cover');
        this.title = this.navParams.get('title');
        this.subtitle = this.navParams.get('subtitle');
        this.storyPages = this.navParams.get('storyPages');
        if (this.storyPages[0].optional) {
            this.optionalSelection = Object.keys(this.storyPages[0].optional);
        }
    }
    StoryPage.prototype.showOptions = function () {
        var _this = this;
        // Object with options used to create the alert
        var options = {
            title: 'Optional fields',
            message: 'Choose which optional fields to display',
            inputs: [],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        var checkedOptions = [];
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var item = data_1[_i];
                            for (var key in _this.storyPages[_this.index].optional) {
                                if (_this.storyPages[_this.index].optional[key] === item) {
                                    checkedOptions.push(key);
                                }
                            }
                        }
                        _this.checkedOptions = checkedOptions;
                    }
                }
            ]
        };
        // Now we add the radio buttons
        for (var _i = 0, _a = this.optionalSelection; _i < _a.length; _i++) {
            var option = _a[_i];
            options.inputs.push({ name: 'options', value: this.storyPages[0].optional[option], label: option, type: 'checkbox', checked: this.checkChecked(option) });
        }
        var alert = this.alertCtrl.create(options);
        alert.present();
    };
    StoryPage.prototype.checkChecked = function (option) {
        if (this.checkedOptions.indexOf(option) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    StoryPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: 'There is no audio for this yet.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ;
    StoryPage.prototype.mediaPlay = function (path) {
        var _this = this;
        var audio = this.audio.create(path);
        audio.onError.subscribe(function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        });
        audio.onStatusUpdate.subscribe(function (status) {
            if (status === 1) {
                _this.audio_playing.push(audio);
                console.log('playing');
            }
            if (status === 4) {
                _this.audio_playing.pop();
                console.log('stopped');
            }
        });
        audio.play();
    };
    StoryPage.prototype.htmlAudioPlay = function (path) {
        var _this = this;
        var audio = new Audio(path);
        console.log(audio);
        audio.onerror = function () {
            _this.audio_playing.pop();
            _this.onError("The audio file wasn't found.");
        };
        audio.onended = function () {
            _this.audio_playing.pop();
        };
        this.audio_playing.push(audio);
        audio.play();
    };
    StoryPage.prototype.playInternal = function (path) {
        var _this = this;
        this.file.resolveDirectoryUrl(this.file.dataDirectory).then(function (rootdir) {
            _this.file.getFile(rootdir, path, { create: false }).then(function (entryFile) {
                _this.mediaPlay(entryFile.toInternalURL());
            });
        });
    };
    StoryPage.prototype.downloadAndPlay = function (external_path, internal_path) {
        var _this = this;
        var targetPath = this.file.dataDirectory + internal_path;
        console.log('downloading to ' + targetPath);
        var trustHosts = true;
        var options = {};
        this.fileTransfer.download(external_path, targetPath, trustHosts, options).then(function (track) {
            _this.mediaPlay(track.toInternalURL());
        }, function (error) { _this.onError(error); });
    };
    StoryPage.prototype.playAudio = function (track) {
        var _this = this;
        track = { filename: track, path: "https://roedoejet.github.io/wmrc-gitksan/audio/" };
        if (track !== undefined && track.filename !== undefined) {
            // get path. add config path if it's there.
            var path_1 = track.filename;
            if (this.audio_path && this.audio_path !== undefined) {
                path_1 = this.audio_path + track.filename;
            }
            // set ID and path to internal storage
            var internal_path_1 = "assets/audio/" + track.filename;
            var id = Date.now().toString();
            // if desktop or browser, run as HTML5 Audio
            if (this.plt.is('core') || this.plt.is('mobileweb')) {
                this.htmlAudioPlay(path_1);
                // If iOS or Android, download, store and play
            }
            else if (this.plt.is('android') || this.plt.is('ios')) {
                this.file.checkFile(this.file.dataDirectory, internal_path_1)
                    .then(function (check) {
                    if (check) {
                        _this.playInternal(internal_path_1);
                    }
                    else {
                        _this.downloadAndPlay(path_1, internal_path_1);
                    }
                }).catch(function (err) {
                    _this.downloadAndPlay(path_1, internal_path_1);
                });
            }
            else {
                this.showAlert();
            }
        }
        else {
            this.onError("No audio for this file.");
        }
    };
    StoryPage.prototype.onError = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Sorry',
            subTitle: err.toString(),
            buttons: ['OK']
        });
        alert.present();
    };
    ;
    StoryPage.prototype.stopAudio = function (track) {
        if (this.plt.is('core') || this.plt.is('mobileweb')) {
            this.audio_playing.forEach(function (a) { return a.pause(); });
        }
        else {
            this.audio_playing.forEach(function (a) { return a.stop(); });
        }
    };
    StoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/stories/story.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button icon-only id="options" (click)="showOptions()">\n        <ion-icon name="ios-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager #storySlider>\n    <ion-slide>\n      <img [src]="image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="title"></h2>\n      <p [innerHTML]="subtitle"></p>\n    </ion-slide>\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image"/>\n      <ion-toolbar class="audio">\n        <ion-icon class="audio" name="play" (click)="playAudio(slide.audio)"></ion-icon>\n        <!-- <ion-icon class="audio" name="pause" (click)="pauseAudio(slide.audio)"></ion-icon> -->\n        <ion-icon class="audio stop" name="square" (click)="stopAudio(slide.audio)"></ion-icon>\n      </ion-toolbar>\n      <p class="slide-title" [innerHTML]="slide.gitksan" id="target"></p>\n      <p class="option" *ngFor="let option of checkedOptions">\n        {{slide.optional[option]}}\n      </p>\n      <p [innerHTML]="slide.english" id="english"></p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/stories/story.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], StoryPage);
    return StoryPage;
}());

//# sourceMappingURL=story.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mtd_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["a" /* About */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["b" /* Bookmarks */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["c" /* Browse */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["f" /* Flashcards */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["g" /* Random */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["h" /* Search */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["d" /* EntryList */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["k" /* WordModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["e" /* Flashcard */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["i" /* StoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["j" /* StoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["a" /* About */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["b" /* Bookmarks */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["c" /* Browse */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["f" /* Flashcards */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["g" /* Random */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["h" /* Search */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["d" /* EntryList */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["k" /* WordModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["e" /* Flashcard */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["i" /* StoriesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages__["j" /* StoryPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_11__mtd_service__["a" /* MTDService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MTDInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var MTDInfo = Object.freeze({
    allEntries: window['getAllEntries'](),
    allAudioEntries: window['getAllAudioEntries'](),
    config: window['config'],
    dataDict: window['dataDict'],
    dataKeys: Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["uniq"])(window['dataDict'].map(function (x) { return x['source']; })),
});
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mtd_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, mtdService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.mtdService = mtdService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["h" /* Search */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_5__pages__["h" /* Search */] },
            { title: 'Browse', component: __WEBPACK_IMPORTED_MODULE_5__pages__["c" /* Browse */] },
            { title: 'Pick a Random Word!', component: __WEBPACK_IMPORTED_MODULE_5__pages__["g" /* Random */] },
            { title: 'Bookmarks', component: __WEBPACK_IMPORTED_MODULE_5__pages__["b" /* Bookmarks */] },
            { title: 'Stories', component: __WEBPACK_IMPORTED_MODULE_5__pages__["i" /* StoriesPage */] },
            { title: 'Flashcards', component: __WEBPACK_IMPORTED_MODULE_5__pages__["f" /* Flashcards */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* About */] }
        ];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.storage.ready().then(function () {
                var language_name = __WEBPACK_IMPORTED_MODULE_6__global__["a" /* MTDInfo */].config.L1.name;
                var build_no = __WEBPACK_IMPORTED_MODULE_6__global__["a" /* MTDInfo */].config.build;
                var id = language_name + build_no;
                // retrieve favourited entries from storage and tag favourited entries
                _this.storage.get(id).then(function (val) {
                    if (val) {
                        val = JSON.parse(val);
                        var favs = [];
                        var _loop_1 = function (fav) {
                            for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_6__global__["a" /* MTDInfo */].dataDict.filter(function (x) { return x['source'] == fav['source']; }); _i < _a.length; _i++) {
                                var entry = _a[_i];
                                if (entry.entryID === fav.entryID) {
                                    entry.favourited = true;
                                    favs.push(entry);
                                    break;
                                }
                            }
                        };
                        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                            var fav = val_1[_i];
                            _loop_1(fav);
                        }
                        _this.mtdService.setBookmarks(favs);
                    }
                });
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.isiPad = function () {
        return this.platform.is('iPad');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/app/app.html"*/'<!--<ion-split-pane [when]="isiPad">-->\n  <ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content scrollbar-y-auto on-swipe-right="menuOpen">\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!--</ion-split-pane>-->'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__mtd_service__["a" /* MTDService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var About = /** @class */ (function () {
    function About(navCtrl) {
        this.navCtrl = navCtrl;
        this.language = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* MTDInfo */].config['L1']['name'];
        console.log(this.language);
    }
    About = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <div class="col-md-8 col-md-offset-2" id="text">\n    <p class="whiteText">Hello! Welcome to the demonstration version of the Online <b>Gitksan</b> Dictionary with 5000 new audio files added in July 2019. The\n      dictionary is\n      an initiative of the <a href="http://lingserver.arts.ubc.ca/linguistics/research/Gitxsan_group">Gitksan Research\n        Lab</a></p>\n    <p class="whiteText">Please feel free to use this dictionary for educational purposes only.</p>\n    <p class="whiteText">Please be aware that this should <em>not</em> be considered a working version of the\n      dictionary. Search\n      functionality is being updated and algorithms are being worked on to ensure better searching capabilities,\n      but in the interim, full search functionality for the dictionary should not be expected. More information\n      about this dictionary will be posted to this site soon.</p>\n    <p class="whiteText">We would like to thank the generous time of all of the people involved in the dictionary, and\n      we hope\n      to update this site soon with more information about everybody involved.</p>\n    <p class="whiteText">We would also like to thank artist Maaslik’i’nsxw (Ken Mowatt)\'s generous donation of artwork\n      to this project.</p>\n    <p class="whiteText">This project was supported by the SSHRC Insight Grant 435-2016-1694, \'Enhancing Lexical\n      Resources for\n      BC First Nations Languages\'.</p>\n    <p class="whiteText">For any questions or concerns, please contact <a href="mailto:henry.davis@ubc.ca">Henry\n        Davis</a></p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], About);
    return About;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bookmarks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mtd_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Bookmarks = /** @class */ (function () {
    function Bookmarks(navCtrl, mtdService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.mtdService = mtdService;
        this.edit = false;
        this.mtdService.bookmarks.subscribe(function (bookmarks) { _this.bookmarks = bookmarks; });
    }
    Bookmarks.prototype.removeEntries = function (bookmarks) {
        this.mtdService.setBookmarks(bookmarks.filter(function (bookmark) { return !bookmark.checked; }));
        this.toggleEdit();
    };
    Bookmarks.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    Bookmarks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/bookmarks/bookmarks.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bookmarks</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="edit = !edit">\n      <ion-icon name="trash" *ngIf="!edit"></ion-icon>\n      <span *ngIf="edit">cancel</span>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <entry-list [entries]=\'bookmarks\' [parentEdit]="edit"></entry-list>\n  <div class=\'center\'>\n    <button ion-button color="danger" class="remove" *ngIf="edit" (click)="removeEntries(bookmarks)">Remove selected bookmarks</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/bookmarks/bookmarks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_mtd_service__["a" /* MTDService */]])
    ], Bookmarks);
    return Bookmarks;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_mtd_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Browse = /** @class */ (function () {
    function Browse(navCtrl, mtdService) {
        this.navCtrl = navCtrl;
        this.mtdService = mtdService;
        this.currentEntries = window['dataDict'];
        this.currentTen = window['get10'](window['dataDict'], 0);
        this.letters = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* MTDInfo */].config.L1.lettersInLanguage;
        this.selectedCategory = "words";
        this.startIndex = 0;
        // currentBrowsingLetter: String = this.letters[this.currentBrowsingEntries[0].sorting_form[0]];
        this.letterSelectOptions = { title: "Select a Letter" };
        this.categorySelectOptions = { title: "Select a Category" };
        this.initializeEntries(mtdService);
    }
    Browse.prototype.initializeEntries = function (mtdService) {
        console.log(mtdService.categories);
        this.displayCategories = Object.keys(mtdService.categories);
        // Add letter index to first words of that letter in entries
        this.letterInit();
    };
    // Determine whether letter occurs word-initially
    Browse.prototype.letterInit = function () {
        var letters = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* MTDInfo */].config.L1.lettersInLanguage;
        var newLetters = [];
        for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
            var letter = letters_1[_i];
            var ind = letters.indexOf(letter);
            for (var _a = 0, _b = this.currentEntries; _a < _b.length; _a++) {
                var entry = _b[_a];
                if (entry.sorting_form[0] === ind) {
                    entry.firstWordIndex = ind;
                    newLetters.push(letter);
                    break;
                }
            }
        }
        this.displayLetters = newLetters;
    };
    // Scroll to previous 10 entries
    Browse.prototype.prev10 = function () {
        if (this.startIndex - 10 > 0) {
            this.startIndex -= 10;
            this.currentTen = window['get10'](this.currentEntries, this.startIndex);
        }
        else {
            this.startIndex = 0;
            this.currentTen = window['get10'](this.currentEntries, this.startIndex);
        }
    };
    // Scroll to next 10 entries
    Browse.prototype.next10 = function () {
        if (this.startIndex + 10 < this.currentEntries.length) {
            this.startIndex += 10;
            this.currentTen = window['get10'](this.currentEntries, this.startIndex);
        }
        else {
            this.startIndex = this.currentEntries.length - 10;
            this.currentTen = window['get10'](this.currentEntries, this.startIndex);
        }
    };
    // Scroll to letter
    // Still needed: change selected letter dynamically
    Browse.prototype.scrollTo = function (letter) {
        var letterIndex = this.letters.indexOf(letter);
        for (var _i = 0, _a = this.currentEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.firstWordIndex === letterIndex) {
                this.startIndex = this.currentEntries.indexOf(entry);
                this.currentTen = window['get10'](this.currentEntries, this.startIndex);
                break;
            }
        }
    };
    Browse.prototype.selectCategory = function (category) {
        this.currentEntries = this.mtdService.categories[category];
        this.currentTen = window['get10'](this.currentEntries, 0);
        this.letterInit();
    };
    Browse = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-browse',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/browse/browse.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Browse</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scrollbar-y-auto>\n\n  <ion-list mode="ios">\n    <ion-item mode="ios">\n      <ion-label class="label-left" mode="ios">Select a Category</ion-label>\n      <ion-select mode="ios" [(ngModel)]="selectedCategory" (ngModelChange)="selectCategory(selectedCategory)" [selectOptions]="categorySelectOptions">\n        <ion-option *ngFor=\'let category of displayCategories\'>{{category}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item mode="ios">\n      <ion-label class="label-left" mode="ios">Select a Letter</ion-label>\n      <ion-select mode="ios" [(ngModel)]="selectedLetter" (ngModelChange)="scrollTo($event)" [selectOptions]="letterSelectOptions">\n        <ion-option *ngFor=\'let letter of displayLetters\'>{{letter}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <div class="entry-container">\n    <entry-list [entries]=\'currentTen\'></entry-list>\n  </div>\n \n\n</ion-content>\n\n <ion-footer>\n    <ion-toolbar>\n      <ion-buttons left class="bar-buttons bar-buttons-ios">\n        <button ion-button icon-only (click)="prev10()">\n        <ion-icon name="ios-arrow-back" class="scroll"></ion-icon>\n      </button>\n      </ion-buttons>\n      <ion-buttons end class="bar-buttons bar-buttons-ios">\n        <button ion-button icon-only (click)="next10()">\n        <ion-icon name="ios-arrow-forward" class="scroll"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/browse/browse.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_mtd_service__["a" /* MTDService */]])
    ], Browse);
    return Browse;
}());

//# sourceMappingURL=browse.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flashcards; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flashcard_modal_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_mtd_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Flashcards = /** @class */ (function () {
    function Flashcards(navCtrl, modalCtrl, mtdService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.mtdService = mtdService;
        this.alertCtrl = alertCtrl;
        this.deckSelectOptions = { title: "Select a Deck" };
        this.decks = Object.keys(mtdService.categories);
        this.flashcardStyles = [
            { "title": "Passive", "info": "This is the easiest method. It involves seeing the {{name}} word and guessing English." },
            { "title": "Active", "info": "This method is designed to test your spelling of the {{ name }} word. You are provided with the English, and have to guess the {{ name } } word." },
            { "title": "Non-Written", "info": "This method is entirely without any written prompt. Try and guess the word in both English and {{ name }}!" }
        ];
    }
    Flashcards.prototype.startFlashcards = function () {
        if (this.deck === undefined) {
            var alert_1 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'Did you select a deck?',
                buttons: ['Try again']
            });
            alert_1.present();
        }
        else if (this.selectedFlashcardStyle === undefined) {
            var alert_2 = this.alertCtrl.create({
                title: 'Oops!',
                subTitle: 'Did you select a flashcard style?',
                buttons: ['Try again']
            });
            alert_2.present();
        }
        else {
            var flashcardModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__flashcard_modal_component__["a" /* Flashcard */], { deck: this.deck, style: this.selectedFlashcardStyle });
            flashcardModal.present();
        }
    };
    Flashcards = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flashcards',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/flashcards/flashcards.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Flashcards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n\n  <ion-list class="deck-select">\n    <ion-list-header>\n      First, select a flashcard deck:\n    </ion-list-header>\n    <ion-item mode="ios">\n      <ion-label class="label-left" mode="ios">Select a Deck</ion-label>\n      <ion-select mode="ios" [(ngModel)]="deck" [selectOptions]="deckSelectOptions">\n        <ion-option *ngFor=\'let deck of decks\'>{{deck}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list radio-group [(ngModel)]="selectedFlashcardStyle">\n    <ion-list-header text-wrap>\n      Then, select a style of learning between the following options:\n    </ion-list-header>\n    <ion-item *ngFor="let style of flashcardStyles">\n      <ion-label>{{style.title}}</ion-label>\n      <p>{{style.info}}</p>\n      <ion-radio value="{{style.title}}"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <div class="center"><button ion-button secondary (click)=\'startFlashcards()\'>Click here to start!</button></div>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/flashcards/flashcards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__app_mtd_service__["a" /* MTDService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Flashcards);
    return Flashcards;
}());

//# sourceMappingURL=flashcards.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MTDService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MTDService = /** @class */ (function () {
    function MTDService(storage) {
        this.storage = storage;
        this.bookmarks = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.categories = {};
        if (__WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allAudioEntries.length > 0 && __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allAudioEntries.length < (__WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allEntries.length * .5)) {
            this.categories["audio"] = {};
            this.categories["audio"] = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allAudioEntries;
        }
        var _loop_1 = function (key) {
            this_1.categories[key] = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].dataDict.filter(function (x) { return x['source'] == key; });
        };
        var this_1 = this;
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].dataKeys; _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        var semantic_categories = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["uniq"])(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allEntries.map(function (entry) {
            if (entry.theme) {
                entry.theme = entry.theme.toLowerCase();
            }
            return entry.theme;
        })).sort();
        var _loop_2 = function (cat) {
            if (cat) {
                this_2.categories[cat] = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].allEntries.filter(function (entry) { return entry.theme === cat; });
            }
        };
        var this_2 = this;
        for (var _b = 0, semantic_categories_1 = semantic_categories; _b < semantic_categories_1.length; _b++) {
            var cat = semantic_categories_1[_b];
            _loop_2(cat);
        }
        console.log(this.categories);
    }
    MTDService.prototype.setBookmarks = function (val) {
        this.bookmarks.next(val);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].config.L1.name + __WEBPACK_IMPORTED_MODULE_1__global__["a" /* MTDInfo */].config.build, JSON.stringify(val));
    };
    MTDService.prototype.toggleBookmark = function (entry) {
        var i = this.bookmarks.value.indexOf(entry);
        var bookmarks;
        if (i > -1) {
            bookmarks = this.bookmarks.value;
            bookmarks.splice(i, 1);
        }
        else if (i < 0) {
            bookmarks = this.bookmarks.value.concat([entry]);
        }
        this.setBookmarks(bookmarks);
    };
    MTDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MTDService);
    return MTDService;
}());

//# sourceMappingURL=mtd.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Random; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Random = /** @class */ (function () {
    function Random(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Random.prototype.getRandom = function () {
        this.entries = window['getRandom10']();
    };
    Random = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-random',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/random/random.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Random</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <div class="center"><button ion-button color="ternary" (click)=\'getRandom()\'>Click here for 10 Random words</button></div>\n  <div class="entry-container" *ngIf="entries">\n    <entry-list [entries]="entries"></entry-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/random/random.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Random);
    return Random;
}());

//# sourceMappingURL=random.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Search = /** @class */ (function () {
    function Search(navCtrl) {
        this.navCtrl = navCtrl;
        this.entries = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* MTDInfo */].allEntries;
        this.searchQuery = '';
    }
    Search.prototype.getL2 = function () {
        var results = [];
        var re = new RegExp(this.searchQuery, 'i');
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (re.test(entry.definition)) {
                results.push(entry);
            }
        }
        var sorted_answers = results.sort(function (a, b) {
            return a["definition"].length - b["definition"].length;
        });
        return (sorted_answers.slice(0, 9));
    };
    ;
    // Get English and target results
    Search.prototype.getResults = function () {
        if (this.searchQuery.length > 1) {
            var english_1 = this.getL2();
            var target_1 = window["searchL1"](this.searchQuery);
            var matches_1 = [];
            var partMatches_1 = [];
            var maybeMatches_1 = [];
            var populateEng = function () {
                for (var _i = 0, english_2 = english_1; _i < english_2.length; _i++) {
                    var result = english_2[_i];
                    var entry = result;
                    entry.type = "L2";
                    matches_1.push(entry);
                }
            };
            var populateTarget = function () {
                for (var _i = 0, target_2 = target_1; _i < target_2.length; _i++) {
                    var result = target_2[_i];
                    var entry = result[1];
                    if (entry.distance === 0) {
                        entry.type = "L1";
                        matches_1.push(entry);
                    }
                    if (entry.distance <= 1 && entry.distance > 0) {
                        entry.type = "L1";
                        partMatches_1.push(entry);
                    }
                    if (entry.distance <= 2 && entry.distance > 1) {
                        entry.type = "L1";
                        maybeMatches_1.push(entry);
                    }
                }
            };
            populateEng();
            populateTarget();
            this.matches = matches_1;
            this.partMatches = partMatches_1;
            this.maybeMatches = maybeMatches_1;
        }
    };
    ;
    Search = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <ion-searchbar (ionInput)="getResults()" [(ngModel)]="searchQuery" autocapitalize="none"></ion-searchbar>\n  <div *ngIf="searchQuery?.length > 1">\n    <div class="result-container" *ngIf="matches?.length > 0">\n      <h4>Matches</h4>\n      <entry-list [entries]="matches" [searchterm]="searchQuery"></entry-list>\n    </div>\n    <div class="result-container" *ngIf="partMatches?.length > 0">\n      <h4>Partial Matches</h4>\n      <entry-list [entries]="partMatches" [searchterm]="searchQuery"></entry-list>\n    </div>\n    <div class="result-container" *ngIf="maybeMatches?.length > 0">\n      <h4>Maybe you meant this?</h4>\n      <entry-list [entries]="maybeMatches" [searchterm]="searchQuery"></entry-list>\n    </div>\n    <div class="result-container" *ngIf="matches?.length === 0 && partMatches?.length === 0 && maybeMatches?.length === 0">\n      <h6>Sorry, we couldn\'t find any words matching \'{{ searchQuery }}\'. Please try something else.</h6>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Search);
    return Search;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Entry */
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());

//# sourceMappingURL=entry.model.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_modal_component__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryList = /** @class */ (function () {
    function EntryList(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.edit = false;
        this.pageName = viewCtrl.name;
    }
    EntryList.prototype.showModal = function (clicked_entry) {
        var wordModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__word_modal_component__["a" /* WordModal */], { entry: clicked_entry });
        wordModal.present();
    };
    EntryList.prototype.highlight = function (text) {
        if (!this.searchterm) {
            return text;
        }
        return text.replace(new RegExp(this.searchterm, 'gi'), '<span class="langMatched">$&</span>');
    };
    EntryList.prototype.ngOnChanges = function () {
        this.edit = this.parentEdit;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EntryList.prototype, "parentEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], EntryList.prototype, "entries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EntryList.prototype, "searchterm", void 0);
    EntryList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'entry-list',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/shared/entry-list.component.html"*/'<div id="browseEntries" class="browseElements">\n  <ion-list>\n    <div>\n      <ion-item class="matchContainer" (click)="showModal(entry)" *ngFor="let entry of entries" text-wrap>\n        <ion-checkbox color="danger" checked="false" *ngIf="edit" [(ngModel)]="entry.checked"></ion-checkbox>\n        <ion-label>\n          <div class="matchLeftContainer">\n            <span class="response matchLeftDiv" [ngClass]="{\'langMatched\': entry.type === \'L1\' && pageName === \'Search\'}">{{entry.word}}</span>\n          </div>\n          <div class="matchRightContainer">\n            <span class="response matchRightDiv" [innerHTML]="highlight(entry.definition)"></span>\n          </div>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</div>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/shared/entry-list.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], EntryList);
    return EntryList;
}());

//# sourceMappingURL=entry-list.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoriesPage = /** @class */ (function () {
    function StoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.storyPage = __WEBPACK_IMPORTED_MODULE_2__story__["a" /* StoryPage */];
        this.stories = [
            {
                title: "Mr. Alayst",
                subtitle: "Written by Dr. M. Jane Smith & Illustrated by Michelle Stoney",
                cover: "assets/img/stories/titlemrlazy.jpg",
                storyPages: [{
                        'english': "Mr. Alayst resided in Lax Alayst, this was the name of the village. All they did was sleep in this village. Even the trees were lazy. Little flowers, hung their heads and slept. The grass didn’t grow, all they did was sleep. The bird songs were funny, one would start singing and fall asleep.",
                        'gitksan': "Jok̲t Mr. Alayst g̲o’ohl Lax̲ Alayst, ‘nit wahl g̲alts’apdiit. HLaa wowax̲ japdiit g̲o’ohl anjok̲diit. Ts’ahl g̲ang̲an, ii ap hoti alalaystdiit. K’uba majag̲alee, ii hoti dip hislisxw g̲at’img̲esdiit, wowax̲diit. Needii ’wihl limxshl habasxw, sa wowax̲ japdiit. Am asgiihl hehl limx k’uba ts’uuts’, wo sit’aa’maahl ligi k’yulit, ii wox̲wok̲t.",
                        'image': "assets/img/stories/p1mrlazy.jpg",
                        'audio': "alayst_1.mp3",
                        'optional': {
                            'breakdown': "Jok̲=t Mr. Alayst g̲o’o=hl Lax̲ Alayst, ‘nit wa=hl g̲alts’ap-diit. HLaa wowax̲ jap-diit g̲o’o=hl anjok̲-diit. Ts’a=hl g̲an~g̲an-ii, ii ap hoti al~alayst-diit. k’uba majag̲alee, ii hoti dip hislisxw g̲a-t’img̲es-diit, wowax̲-diit. Nee=dii ’wihl limxs=hl habasxw, xsa wowax̲ jap-diit. Am asgi=hl he=hl limx k’uba ts’uuts’, wo sit’aa’maa=hl ligi k’yul-it, ii wox̲~wok̲-t.",
                            'gloss': "live=dm Mr. Lazy loc=cn On Lazy, 3sg.iii name=cn village-3pl.ii. incep sleep make-3pl.ii loc=cn live-3pl.ii. even?=cn pl~tree-like cl.cnj ver again pl~lazy-3pl.ii. small flower, cl.cnj again 1pl.i hung? distr-head-3pl.ii, sleep-3pl.ii. neg=foc around grow=cn grass, only sleep make-3pl.ii. only ugly=cn say=cn sing small bird, start=cn dwid one.animal-sx, cl.cnj pl~sleep-3sg.ii"
                        }
                    }, {
                        'english': 'Mr. Alayst didn’t get up until after lunch because he was lazy. Finally he would get up and sit and eat. This took awhile because he would sleep. After he finished eating he would sit on the porch and sleep. He did nothing. He did not chop wood. He did not go fishing. Perhaps the fish were lazy.',
                        'gitksan': "’Wagayt galanhl silxwsa  wil  dii  gyuksxwhl  Mr.  Alayst. Wil guu alaysit’. Ii gas ligi gwinitxw’t ii t’aa wo ga yookxwt’, nakw ’wihl wilt, wil wo ga wok’t. Ii hlaa hleekxw’t ii wo t’aat’ lax tawnt’ ii wo ga wok’t. Nee dii gwi ji jabit. Nee dii yats lakxw’t. Nee dii ixw’t. Hoti alalys’t dim mahl hon.",
                        'image': "assets/img/stories/p2mrlazy.jpg",
                        'audio': "alayst_2.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }, {
                        'english': 'Once when he was sleeping he dreamt that someone came to give him big money he had won. They couldn’t wake him up.That was the end of his laziness. He got up early after his dream. He was afraid to sleep in.',
                        'gitksan': "Ii k’i’yhl ho wok’t, ii xsiwogihl ’witxwhl ant ginamhl wii tisim daala  xsdaa’t. Ii gos jiit gyuksin diit nit.  Ii nit wil ha’xw wihl alaysit. Gan wila ’wihl hlook galanhl xsiwok’t.  Xpts’axw nit dim gina wok’t.",
                        'image': "assets/img/stories/p3mrlazy.jpg",
                        'audio': "alayst_3.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }, {
                        'english': 'He was energetic. He was no longer called Mr. Alayst. He did good for as long as he lived.',
                        'gitksan': "Ii ’wihl hlgu galx’t. Ii nee diit hoti sa wa diit’ nit as Mr. Alays’t. Ii amhl laa ’wihl wilt’ ga’nakw didilst’t.",
                        'image': "assets/img/stories/p4mrlazy.jpg",
                        'audio': "alayst_4.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }]
            },
            {
                title: "Ts'onny G̲o'ohl Wilp Sihon",
                subtitle: "Written by Dr. M. Jane Smith & Illustrated by Michelle Stoney",
                cover: "assets/img/stories/titlesmokehouse.jpg",
                storyPages: [{
                        'english': 'Johnny went to the smokehouse. He washed the poles. Johnny washed the filleting table. Johnny hung the fish. Johnny let it smoke overnight.',
                        'gitksan': "Yee’t Ts’onny go’ohl wilpsihon. Saksin’thl ’wit. Saksin’thl ha nii ts’al. Lixswis Ts’onnyhl hon’txw’t. K’i’yhl axxw’t mi’indins Ts’onnyhl hontxw’t.",
                        'image': "assets/img/stories/p1smokehouse.jpg",
                        'audio': "tsonny_1.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }, {
                        'english': 'Johnny let the fire go out. He was going to fillet. Johnny cut off the tails of the fish. Johnny cut off the belly. Johnny filleted the fish. Johnny cut off strips. Johnny hung his filleted fish, strips and bellies.',
                        'gitksan': "Ts’akdis Ts’onnyhl mi’in. Wil hlaa yukw dim ts’al’t. Saa k’otsdis Ts’onny hlatsx. Saa k’otsdis Ts’onnyhl ts’ok’. Ts’al’t Ts’onny. Si huxws’t Ts’onny. Liswis Ts’onnyhl ts’al’t, huxws ganhl ts’ok’.",
                        'image': "assets/img/stories/p2smokehouse.jpg",
                        'audio': "tsonny_2.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }, {
                        'english': 'Johnny again built a fire.  Johnny guarded the smokehouse. He did not want the fish to burn. He did not want the bear to steal his fish. Nice smokehouse.',
                        'gitksan': "Ii hatsim hoo si lakxws Ts’onny. Lihlxis Ts’onny wilpsihon. Nee dii hasak’t dim mihl hontxw’t. Nee dii hasak’t dim’t liluxws hl smaxhl hontxw’t. Amhl wilp sihons Ts’onny.",
                        'image': "assets/img/stories/p3smokehouse.jpg",
                        'audio': "tsonny_3.mp3",
                        'optional': {
                            'breakdown': "Check back soon for a detailed breakdown",
                            'gloss': "Check back soon for a detailed gloss"
                        }
                    }]
            }
        ];
    }
    StoriesPage.prototype.push = function (story) {
        this.navCtrl.push(this.storyPage, story);
    };
    StoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stories',template:/*ion-inline-start:"/Users/pinea/wmrc-gitksan-mobile/src/pages/stories/stories.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Stories</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card *ngFor="let story of stories" (click)="push(story)">\n    <img [src]="story.cover"/>\n    <div class="card-title">{{story.title}}</div>\n    <!--<div class="card-subtitle">{{story.subtitle}}</div>-->\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/pinea/wmrc-gitksan-mobile/src/pages/stories/stories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], StoriesPage);
    return StoriesPage;
}());

//# sourceMappingURL=stories.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__no_null_values_no_null_values__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__no_null_values_no_null_values__["a" /* NoNullObjectValuesPipe */], __WEBPACK_IMPORTED_MODULE_1__no_null_values_no_null_values__["b" /* NoNullValuesPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__no_null_values_no_null_values__["a" /* NoNullObjectValuesPipe */], __WEBPACK_IMPORTED_MODULE_1__no_null_values_no_null_values__["b" /* NoNullValuesPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoNullValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoNullObjectValuesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the NoNullValuesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NoNullValuesPipe = /** @class */ (function () {
    function NoNullValuesPipe() {
    }
    /**
     * Removes empty strings from array
     */
    NoNullValuesPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value) {
            return value.filter(function (x) { return x !== null && x !== ''; });
        }
    };
    NoNullValuesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'noNullValues',
        })
    ], NoNullValuesPipe);
    return NoNullValuesPipe;
}());

var NoNullObjectValuesPipe = /** @class */ (function () {
    function NoNullObjectValuesPipe() {
    }
    /**
     * Removes empty objects from array
     */
    NoNullObjectValuesPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value) {
            return value.filter(function (x) {
                var not_empty = true;
                Object.keys(x).forEach(function (k) {
                    if (!x[k]) {
                        not_empty = false;
                        return not_empty;
                    }
                });
                return not_empty;
            });
        }
    };
    NoNullObjectValuesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'noNullObjectValues',
        })
    ], NoNullObjectValuesPipe);
    return NoNullObjectValuesPipe;
}());

//# sourceMappingURL=no-null-values.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map