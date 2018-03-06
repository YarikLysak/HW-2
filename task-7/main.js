const config = {
    apiKey: "AIzaSyBgIrwhWGtkDZfks2ejGh4pmGZMee_KJb4",
    authDomain: "firstfirebaseprofect-59e13.firebaseapp.com",
    databaseURL: "https://firstfirebaseprofect-59e13.firebaseio.com",
    projectId: "firstfirebaseprofect",
    storageBucket: "firstfirebaseprofect.appspot.com",
    messagingSenderId: "258907849508"
};
firebase.initializeApp(config);
const email = 'zhbrkscfr@gmail.com';
const password = '258852';
const database = firebase.database();

firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {

    })
    .catch(function(error) {
    // Handle Errors here.
    const  errorCode = error.code;
    const errorMessage = error.message;
    });

const educationPromise = database.ref('education').once('value');
educationPromise.then(snapshot => {
    let str = '';
    snapshot.val().forEach(item => {
        str += `<p>Date: ${item.date}</p><p>Text: ${item.someText}</p><p class="last">Title: ${item.title}</p>`;
    });
    $('#output').append(str);
});
