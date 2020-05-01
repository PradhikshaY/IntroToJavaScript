/**
 * @copyright: (C) 2020 Pradhiksha.  All Rights Reserved.
 * @author:    Pradhiksha {@link mailto:dd46pradhiksha@vfs.com}
 * @version:   1.0
 */
'use strict';

import Track from "./Track.js";
import MediaManager from "./MediaManager.js";

export default class PlayList {

    constructor(){
        this.playList = [];  // a list of Track objects
        this.current = -1; //this is out of bounds until playlist is loaded
        this.currentTrack = null; //This should be a track object

        this.mediaMgr = new MediaManager();

    }

   populate() {
        // somehow make a list of tracks
        return new Promise( async ( resolve, reject ) => {
            this.playList = await this.mediaMgr.fetchPlayList().catch( error => {
                console.log(error)
                reject (error)
             )};
            this.first()
            resolve( this.playList )
        })
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
        if(this.current >= this.playList.length)
            this.current = this.playList.length - 1;
        
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


