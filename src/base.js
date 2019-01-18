import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANghkzWFgOK82khUCxmhGk60ocWpy_sNI",
    authDomain: "catch-of-the-day-puerto-rico.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-puerto-rico.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;