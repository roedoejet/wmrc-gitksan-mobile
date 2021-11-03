import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StoryPage } from './story'

@Component({
    selector: 'page-stories',
    templateUrl: 'stories.html'
})
export class StoriesPage {
    storyPage = StoryPage
    constructor(public navCtrl: NavController) {

    }

    stories = [
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

    push(story) {
        this.navCtrl.push(this.storyPage, story)
    }

}