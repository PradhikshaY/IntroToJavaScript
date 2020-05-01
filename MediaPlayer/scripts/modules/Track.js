/**
 * @copyright: (C) 2020 Pradhiksha.  All Rights Reserved.
 * @author:    Pradhiksha {@link mailto:dd46pradhiksha@vfs.com}
 * @version:   1.0
 */
'use strict';

export default class Track {

    constructor( mediaData ) {

        {
            id:
            mediaURI:
            playlistName:
            trackName:

        }

        this.songTitle = mediaData.title;
        this.albumImage = "url/album/image.jpg";
        this.name = "Said the Whale";
        this.album = albumImage;
        this.year = "2013";
        this.duration = "00:00";
        this.media = mediaData.mediaURI;

        this.sound = undefined;
}

    fetchSound( songURI ) {
        this.sound = new buzz.sound( MediaURI);
        this.duration = this.sound.getDuration();

        this.readTags( songURI );
    }

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

    updateMedia( songURI ) {
  /*       
    

   let tag = {};
    let reader = new jsmediatags.Reader( mediaFile );
    reader.read({
        onSuccess( tag ){

            this.name = tag.title;
            this.artist = tag.artist;
            this.album = tag.album;
            this.genre = tag.genre;
            this.year = tag.year;
            this.albumImage = tag.picture;
            this.duration = this.sound.getDuration();
            this.media = mediaFile;
        }
        onError(error) {
            console.log(":(".error.type. error.information)
        }
    }); */
    }
}
