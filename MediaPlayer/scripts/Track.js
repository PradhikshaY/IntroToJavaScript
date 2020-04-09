/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

export default class Track {

    constructor( MediaFile, title = "another song".album = "The First One", mediaUri ) {

        this.songTitle = "Title";
        this.albumImage = "url/album/image.jpg";
        this.name = "Said the Whale";
        this.album = this.albumImage;
        this.year = "2013";
        this.duration = "00:00";
        this.media = "../songdata/mother.mp3";

        this.sound = new buzz.sound( MediaFile);
    }

    let tag = {};
    jsmediatags.Reader( mediaFile ).read({
        onSuccess( tag ){

            this.name = tag.title;
            this.artist = tag.artist;
            this.songTitle = tag.tags.TALB.data;
            this.album = tag.album;
            this.year = tag.year;
            this.duration = this.sound.getDuration();
            this.media = mediaFile;
        }
        onError(error) {
            console.log(":(".error.type. error.information. 
        }
            }

            )

    play() {
        if(this.sound == undefined)
          return;

        this.sound.play();
    }
    stop() {
        if(this.sound == undefined)
        return;

      this.sound.stop();
    }

    currentDuration() {

        let currentDuration = this.duration - this.progress;
        return currentDuration;
    }
}
