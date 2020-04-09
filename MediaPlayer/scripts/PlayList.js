/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import Track from "./Track.js";
import MediaManager from "./MediaManager.js";

export default class PlayList {

    constructor(){
        this.playList = [];  // a list of Track objects
        this.current = -1; //this is out of bounds until playlist is loaded
        this.currentTrack = {}; //This should be a track object 
    }

   populate() {
        // somehow make a list of tracks

        //go ask Media Manager to get media files 
        this.playList.push( new Track('../media/Going Home.mp3'));
        /*
        this.playList = this.MediaManager.fetchPlayList("PlayListName")
            .then(theList => {
                this.playList = theList;
                this.first();)
            .catch ( error => console.log("error"))
            }
    }


    first() {
        this.current = 0;
        this.currentTrack = this.playList[ this.current ];
    }

    play() {

        // go get some code from a library to look up the uri and play the mp3
        if (this.currentTrack == null)
            return;

        this.currentTrack.play();
    }

    stop(){
        if (this.currentTrack == null)
            return;

        this.currentTrack.stop();
    }

    nextSong(){
        if(this.current>=this.playList.length){
            //can't go back forward again
            return;
        }

        this.current++;
        this.currentTrack = this.PlayList[this.current];
    }

    prevSong(){
        if(this.current<1){
            //can't go back further
            return;
        }
        this.current--;
        this.currentTrack = this.PlayList[this.current];
    }
}


