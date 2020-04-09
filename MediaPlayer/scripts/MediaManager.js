'use strict';
export default class MediaManager{

  constructor (){
    //do the firebase thing, login, connect
    this.config (){
      apiKey: "AIzaSyCZagTzlWEjCK_ycyd7uR5g7MvHI7T2vEA",
      authDomain: "MediaPlayer.firebaseapp.com",
      databaseURL: "https://MediaPlayer.firebaseio.com",
      projectId: "MediaPlayer",
      storageBucket: "MediaPlayer.appspot.com",
      messagingSenderId: "sender-id",
      appId: "app-id",
      measurementId: "G-measurement-id",
    }
    firebase.initializeApp(firebaseConfig);
    this.songData = firebase.firestore();
    this.media = firebase.firestorage();
  }
  //methods to fetch the song/playlist
  fetchPlayList(PlayListName = "all") {
  // this is all gonna be asynchronous...
    let iPromiseToBeBack = new Promise (( resolve, reject))
    let aPlayList = [];
    let mediaList = this.songData.data.collection( "media" );
    let query = mediaList.where("playlistname","==", playlistName);
  // go fetch boy...
  query.get();
    .then( resultList => {
      //didnt work
      if (resultList == undefined)
        reject( { errorCode: 303, errormsg: "It's failed");
      resolve( aPlayList );
    });

    resolve ( aPlayList );
    return iPromiseToBeBack;
  }
}