import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

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
const app = initializeApp(firebaseConfig);

const submit = document.getElementById('submit');
const contactForm = document.getElementById('contactForm');

import {
    getDatabase,
    ref,
    set,
    child,
    get,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();

function submitForm(e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const Pincode = document.getElementById('Pincode').value;
    const Wnumber = document.getElementById('Wnumber').value;
    const Colony = document.getElementById('Colony').value;
    const Hname = document.getElementById('Hname').value;
    const RoadName = document.getElementById('RoadName').value;
    const Landmark = document.getElementById('Landmark').value;
    const caption = document.getElementById('caption').value;

    // Save message
    saveMessage(name, number, Pincode, Wnumber, Colony, Hname, RoadName, Landmark, caption);

    // Show alert


    // Hide alert after 3 seconds
    
}

// Save message to Firebase
function saveMessage(name, number, Pincode, Wnumber, Colony, Hname, RoadName, Landmark, caption) {
    const dbref = ref(db, 'contactForm');
    const newMessageRef = child(dbref, '/contactForm/'+number);
    set(newMessageRef, {
        name,
        number,
        Pincode,
        Wnumber,
        Colony,
        Hname,
        RoadName,
        Landmark,
        caption
    }).then(() => { alert("saved") }).catch((error) => { alert("error: " + error); });
}

submit.addEventListener('click', submitForm);
