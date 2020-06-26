import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDNjIQyXUqrRMDhkl3bWXS_Vrpahjv6Rck',
  authDomain: 'recipe-finder-d4f9c.firebaseapp.com',
  databaseURL: 'https://recipe-finder-d4f9c.firebaseio.com',
  projectId: 'recipe-finder-d4f9c',
  storageBucket: 'recipe-finder-d4f9c.appspot.com',
  messagingSenderId: '938318856049',
  appId: '1:938318856049:web:eef0a08196a995acc280d0',
  measurementId: 'G-V4DMNCK6Y7'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase
