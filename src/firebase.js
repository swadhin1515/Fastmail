import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.apiKey || "AIzaSyA6rWV50SdKlGnmnBOqfVJ6lu4UeCjtt_U",
    authDomain: process.env.authDomain || "642d211192ede560d7625433--graceful-dango-80a49b.netlify.app",
    projectId: process.env.projectId || "clone-f427f",
    storageBucket: process.env.storageBucket || "clone-f427f.appspot.com",
    messagingSenderId: process.env.messagingSenderId || "1086229062538",
    appId: process.env.appId || "1:1086229062538:web:f3f5437418ee5c1f721e73"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider, storage }