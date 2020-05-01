/**
 * @copyright: (C) 2020 Pradhiksha.  All Rights Reserved.
 * @author:    Pradhiksha {@link mailto:dd46pradhiksha@vfs.com}
 * @version:   1.0
 */
'use strict';

import PlayList from './PlayList';

export default class App {

    constructor(device = 'web') {

        this.trackId = 0;

        // build a playlist
        this.thePlayList = new PlayList();
        this.thePlayList.populate();
            .then(playList => {
                for(let song of playList) {
                let entryMarkup = this.generatePlaylistEntry(year, song.trackName, album);
                $("#the-playlist").append(entryMarkup);
                }
            })

        // Debug playlist editor handler
        $("playlist-item").on('submit', event => this.addToPlayList(event));

        // handle user input
        $("#beginning").on("click", event => this.defaultHandler(event));
        $("#rewind").on("click", event => this.defaultHandler(event));
        $("#play").on("click", event => this.handlePlay(event));
        $("#stop").on("click", event => this.handleStop(event));
        $("#forward").on("click", event => this.defaultHandler(event));
        $("#next").on("click", event => this.nextSong(event));
        $("#end").on("click", event => this.defaultHandler(event));
    }

    generatePlaylistEntry( id, year, name, album ){

        return `<li id="item-${this.trackId++}"> ${year} ${name} - ${album}</li>`;
    }

    addToPlayList(event) {
        event.preventDefault();
        // grab the input data into some object
        let name = $('input[name="track-name-entry"]').val();
        let album = $('input[name="track-album-entry"]').val();
        let year = $('input[name="track-year-entry"]').val();

        let entryMarkup = this.generatePlaylistEntry(year, name, album);
        $("#the-playlist").append(entryMarkup);
    }

    defaultHandler(event) {
        $("virtual-console").html("something Happened");
    }

    handleStop( event ) {

        this.updateCurrentTrack("Hello", "Stop pressed");
        this.playList.stop();
        // Dont change name of the song & stop playing
    }

    handlePlay( event ){
        this.playList.play();
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