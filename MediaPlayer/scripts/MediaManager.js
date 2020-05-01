'use strict';

import Track from "./modules/Track.js";
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
    appId: "1:538315502332:web:0268298f7055c787c69d79"
    }
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
    this.media = firebase.firestorage();
  }
  //methods to fetch the song/playlist
  fetchPlayList(PlayListName = "all") {
  // this is all gonna be asynchronous...
    return new Promise( async ( resolve, reject ) => {

       // go fetch boy...
    let mediaList = this.db.collection( "media" );
    let query = mediaList.where("playlistName","==", playlistName);
    let resultList = await query.get();

    //didnt work
    if (resultList == undefined)
      reject({ errorCode: 303, errormsg: "It's failed" });

    let fetchList =  resultList.docs.map( async  doc => {
      let musicData = doc.data();
      let mediaRef = this.media.ref( musicData.mediaURI );
      musicData.uri = await mediaRef.getDownloadURL().catch( error => {
          this.handleFirebaseError (error)
        });
      let track = new Track( musicData );
      return track
      })
      const aPlayList = await Promise.all( fetchList );
      resolve( aPlayList );
        
    })
  }

  fetchDataFromStorage(songURI){
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onLoad = event => {
      var blob = xhr.response;
    }

    xhr.open('GET', url);
    xhr.send();
  }
  }
  fetchSongFromStorage( filename, playlistName = "all" ){

    return new Promise( async (resolve, reject ) => {
      let mediaList = this.db.collection( "media" );
      let query = mediaList.where("playlistName","==", playlist).where("mediaURI","==", filename)
      let result =  await query.get();
      let ref = this.media.ref( result.id );
      let mediaURI = await ref.child(`$(filename)`).getDownloadURL();
      resolve( mediaURI )

    })
  }

  handleFirebaseError( error ) {

  }
}