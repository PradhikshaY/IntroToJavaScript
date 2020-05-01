'use strict';
export default class MediaManager{

  constructor (){
    //do the firebase thing, login, connect
    this.config (){
      apiKey: "AIzaSyC5yYVDRnP67JDCEdDPftkywdpGtVxduP0",
      authDomain: "mediaplayer1-82a56.firebaseapp.com",
      databaseURL: "https://mediaplayer1-82a56.firebaseio.com",
      projectId: "mediaplayer1-82a56",
      storageBucket: "mediaplayer1-82a56.appspot.com",
      messagingSenderId: "538315502332",
      appId: "mediaplayer1-82a56",
    }
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    this.media = firebase.firestorage();
  }
  //methods to fetch the song/playlist
  fetchPlayList(PlayListName = "all") {
  // this is all gonna be asynchronous...
    return new Promise( ( resolve, reject ) => {
    let aPlayList = [];
    let mediaList = this.db.collection( "media" );
    let query = mediaList.where("playlistName","==", playlistName);

  // go fetch boy...
  query.get();
    .then( resultList => {
      //didnt work
      if (resultList == undefined)
        reject( { errorCode: 303, errormsg: "It's failed" });

      resultList.docs.forEach( doc => {
        let musicData = doc.Data();
        aPlayList.push( musicData )
      });
        resolve( aPlayList )
      })
    })
  }
}