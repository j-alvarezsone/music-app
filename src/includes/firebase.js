import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD09liKS2J-smfJfOuJaf_L-QhQ2Powhk0',
  authDomain: 'music-28232.firebaseapp.com',
  projectId: 'music-28232',
  storageBucket: 'music-28232.appspot.com',
  appId: '1:484259486234:web:e53f90966211bc35dacfa3',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
