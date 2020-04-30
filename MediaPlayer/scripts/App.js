/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:dd46Pradhiksha@vfs.com}
 * @version:   1.0
 */
'use strict';

import PlayList from './PlayList.js';

export default class App {

    constructor(device = 'web') {

        // build a playlist
        this.thePlayList = new PlayList();
        this.thePlayList.populate();
        this.currentTrack = new buzz.sound('../media/Stay With You.mp3');

        // Debug playlist editor handler
        $("playlist-item").on('submit', event => this.addToPlayList(event));

        // handle user input
        $("#beginning").on("click", event => this.defaultHandler(event));
        $("#rewind").on("click", event => this.defaultHandler(event));
        $("#play").on("click", event => this.handlePlay(event));
        $("#stop").on("click", event => this.handleStop(event));
        $("#forward").on("click", event => this.defaultHandler(event));
        $("#end").on("click", event => this.defaultHandler(event));
    }

    addToPlayList(event) {
        event.preventDefault();
        // grab the input data into some object
        let name = $('input[name="track-name-entry"]').val();
        let album = $('input[name="track-album-entry"]').val();
        let year = $('input[name="track-year-entry"]').val();

        $("#the-playlist").append(`<li id="item-1"> ${year} ${name} - ${album} </li>`); 
    }

    defaultHandler(event) {
        $("virtual-console").html("something Happened");
    }

    handleStop( event ) {

        this.updateCurrentTrack("Hello", "Stop pressed");
        // Dont change name of the song & stop playing
    }

    handlePlay( event ){
        this.currentTrack.play();
    }
    updateCurrentTrack( songName = "", userMsg = "Nothing happened") {

        this.currentSongName = songName;
        $("#virtual-console").html(userMsg); 
        console.log( userMsg );
        $("#track-name").val( this.currentSongName );
    }

    run() {

        this.updateCurrentTrack();
        // just waiting around for something to happen...
    }

}