'use strict';
export default class MediaManager{

  constructor (){
    //do the firebase thing, login, connect
    this.config (){
      apiKey: "AIzaSyC5yYVDRnP67JDCEdDPftkywdpGtVxduP0",
      authDomain: "MediaPlayer1.firebaseapp.com",
      databaseURL: "https://MediaPlayer1.firebaseio.com",
      projectId: "mediaplayer1-82a56",
      storageBucket: "MediaPlayer1.appspot.com",
      messagingSenderId: "sender-id",
      appId: "app-id",
      measurementId: "G-measurement-id",
    }
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    this.media = firebase.firestorage();
  }
  //methods to fetch the song/playlist
  fetchPlayList(PlayListName = "all") {
  // this is all gonna be asynchronous...
    return new Promise (( resolve, reject))
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

    resolve ( aPlayList )
  }
}