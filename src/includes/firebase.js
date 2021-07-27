import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD09liKS2J-smfJfOuJaf_L-QhQ2Powhk0',
  authDomain: 'music-28232.firebaseapp.com',
  projectId: 'music-28232',
  storageBucket: 'music-28232.appspot.com',
  appId: '1:484259486234:web:e53f90966211bc35dacfa3',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase Persistence error ${error}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, usersCollection, songsCollection, commentsCollection, storage };
