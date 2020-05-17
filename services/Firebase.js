import firebase from 'firebase';
import {YellowBox} from 'react-native';

class Firebase {
  constructor() {
    YellowBox.ignoreWarnings(['Setting a timer']);
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyC_8mBZTGVKA1yRw9UqTuP-8LmTK8Nrras',
        authDomain: 'election-manager-277213.firebaseapp.com',
        databaseURL: 'https://election-manager-277213.firebaseio.com',
        projectId: 'election-manager-277213',
        storageBucket: 'election-manager-277213.appspot.com',
        messagingSenderId: '267787240197',
        appId: '1:267787240197:web:117de8b657b28e8d36ed6c',
      });
    }
  }

  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };

  updateProfile = async (username, url) => {
    var userf = firebase.auth().currentUser;
    userf.updateProfile({displayName: username, photoUrl: url}).then(
      function () {
        console.log('User ' + username + ' was updated successfully.');
      },
      function (error) {
        console.warn('Error update displayName.');
      },
    );
  };

  name = () => {
    return (firebase.auth().currentUser || {}).displayName;
  };

  email = () => {
    return (firebase.auth().currentUser || {}).email;
  };

  avatar = () => {
    return (firebase.auth().currentUser || {}).photoURL;
  };

  uid = () => {
    return (firebase.auth().currentUser || {}).uid;
  };

  uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase.storage().ref('avatar').child(uri);
      const task = ref.put(blob);
      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {},
          reject,
          () => resolve(task.snapshot.downloadURL),
        );
      });
    } catch (err) {
      console.log('uploadImage error: ' + err.message);
    }
  };

  parse = (snapshot) => {
    const {timestamp: numberStamp, text, user} = snapshot.val();
    const {key: _id} = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {_id, timestamp, text, user};
    return message;
  };

  refOn = (callback, currentUserId, receiverId) => {
    firebase
      .database()
      .ref(`Messages_${currentUserId}_${receiverId}`)
      .on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  send = (messages, currentUserId, receiverId) => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        text,
        user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      };
      firebase
        .database()
        .ref(`Messages_${currentUserId}_${receiverId}`)
        .push(message);
    }
  };

  parse = (snapshot) => {
    const {timestamp: numberStamp, text, user} = snapshot.val();
    const {key: _id} = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {_id, timestamp, text, user};
    return message;
  };

  refOff = () => {
    firebase.database().ref('Messages').off();
  };
}
const firebaseSvc = new Firebase();
export default firebaseSvc;
