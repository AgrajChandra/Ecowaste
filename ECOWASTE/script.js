
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH4w0ijRXJ7uDJAx-i7efPqBekMGdhQCM",
    authDomain: "ecowate.firebaseapp.com",
    databaseURL: "https://ecowate-default-rtdb.firebaseio.com",
    projectId: "ecowate",
    storageBucket: "ecowate.appspot.com",
    messagingSenderId: "912424466871",
    appId: "1:912424466871:web:69941627e15ce3502e9032"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('contactForm');

// Listen for form submits
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var number = getInputVal('number');
    var Pincode = getInputVal('Pincode');
    var Wnumber = getInputVal('Wnumber');
    var Colony = getInputVal('Colony');
    var Hname = getInputVal('Hname');
    var RoadName = getInputVal('RoadName');
    var Landmark = getInputVal('Landmark');
    var caption = getInputVal('caption');

    // Save message
    saveMessage(name, number, Pincode, Wnumber, Colony, Hname, RoadName, Landmark, caption);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, number, Pincode, Wnumber, Colony, Hname, RoadName, Landmark, caption){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name, 
        number: number, 
        Pincode: Pincode, 
        Wnumber: Wnumber, 
        Colony: Colony, 
        Hname: Hname, 
        RoadName: RoadName, 
        Landmark: Landmark, 
        caption: caption
    });
}
