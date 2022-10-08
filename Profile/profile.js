<<<<<<< HEAD
var stdno = 0;
var tbody = document.getElementById("tbody1");

function AddItemToTable(name, email, phone) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = ++stdno;
    td2.innerHTML = name;
    td3.innerHTML = email;
    td4.innerHTML = phone;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);

}

function AddAllItemsToTable(Guide) {
    stdno = 0;
    tbody.innerHTML = "";
    Guide.forEach(element => {
        AddItemToTable(element.fullname, element.email, element.phone);
    });
}

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
    authDomain: "firstspot-b7b7b.firebaseapp.com",
    databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
    projectId: "firstspot-b7b7b",
    storageBucket: "firstspot-b7b7b.appspot.com",
    messagingSenderId: "781962837914",
    appId: "1:781962837914:web:6662ae66f885e764e2c423"
};

const app = initializeApp(firebaseConfig);

import {
    getDatabase,
    ref,
    child,
    onValue,
    get
}
from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";

const db = getDatabase();


function GetAllDataOunce() {
    const dbRef = ref(db);
    get(child(dbRef, "Guide")).then((snapshot) => {
        var Guide = [];
        snapshot.forEach(childSnapshot => {
            Guide.push(childSnapshot.val());
        })

        AddAllItemsToTable(Guide);
    })
}

=======
var stdno = 0;
var tbody = document.getElementById("tbody1");

function AddItemToTable(name, email, phone) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = ++stdno;
    td2.innerHTML = name;
    td3.innerHTML = email;
    td4.innerHTML = phone;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    tbody.appendChild(trow);

}

function AddAllItemsToTable(Guide) {
    stdno = 0;
    tbody.innerHTML = "";
    Guide.forEach(element => {
        AddItemToTable(element.fullname, element.email, element.phone);
    });
}

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
    authDomain: "firstspot-b7b7b.firebaseapp.com",
    databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
    projectId: "firstspot-b7b7b",
    storageBucket: "firstspot-b7b7b.appspot.com",
    messagingSenderId: "781962837914",
    appId: "1:781962837914:web:6662ae66f885e764e2c423"
};

const app = initializeApp(firebaseConfig);

import {
    getDatabase,
    ref,
    child,
    onValue,
    get
}
from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";

const db = getDatabase();


function GetAllDataOunce() {
    const dbRef = ref(db);
    get(child(dbRef, "Guide")).then((snapshot) => {
        var Guide = [];
        snapshot.forEach(childSnapshot => {
            Guide.push(childSnapshot.val());
        })

        AddAllItemsToTable(Guide);
    })
}

>>>>>>> 73bd98b09dfbf6b630a58937e46bda0ba22ca214
window.onload = GetAllDataOunce;