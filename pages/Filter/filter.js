// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyAHLP7isomKx1zKwle0PpydCYdhHA1ctM4",
//     authDomain: "firstspot-b7b7b.firebaseapp.com",
//     databaseURL: "https://firstspot-b7b7b-default-rtdb.firebaseio.com",
//     projectId: "firstspot-b7b7b",
//     storageBucket: "firstspot-b7b7b.appspot.com",
//     messagingSenderId: "781962837914",
//     appId: "1:781962837914:web:6662ae66f885e764e2c423"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// // const db = getDatabase();

// //  //////////////////////////
// var stdNo = 0;

// function addItemsToList(tourname, catagory, price) {
//     var ul = document.getElementById("places");
//     var _tourname = document.createElement("li");
//     var _catagory = document.createElement("li");
//     var _price = document.createElement("li");

//     _tourname.innerHTML = "Name: " + tourname;
//     _catagory.innerHTML = "catagory: " + catagory;
//     _price.innerHTML = "price: " + price;

//     ul.appendChild(_tourname);
//     ul.appendChild(_catagory);
//     ul.appendChild(_price);
// }

// function FetchAllData() {
//     firebase.database().ref("Tours").ounce("value", function(snapshot) {
//         snapshot.forEach(
//             function(childSnapshot) {
//                 let name = childSnapshot.value().TourName;
//                 let catagory = childSnapshot.value().catagory;
//                 let price = childSnapshot.value().price;
//                 addItemsToList(name, catagory, price);
//             }
//         )
//     })
// }
// window.onload(FetchAllData());

// /////////////////////////////////////////////////////
let places = {
    data: [{
            placeName: "Mumbai",
            category: "South",
            price: "15,000",
            image: "mumbai_tour.jpg",
            link : "https://csmia.adaniairports.com/discover-mumbai.aspx",
           
        },
        {
            placeName: "Delhi",
            category: "North",
            price: "12,000",
            image: "delhi_tour.jpg",
            link : "https://www.delhitourism.gov.in/delhitourism/index.jsp",
        },
        {
            placeName: "Indore",
            category: "Center",
            price: "8,000",
            image: "indore_tour.jpg",
            link : "https://www.mptourism.com/destination-indore.php",
        },
        {
            placeName: "Kolkata",
            category: "East",
            price: "12,000",
            image: "kolkata_tour.jpg",
            link : "https://www.fabhotels.com/blog/historical-places-in-kolkata/",
        },
        {
            placeName: "Ahmedabad",
            category: "West",
            price: "11,000",
            image: "ahemdabad_tour.jpg",
            link : "https://www.tripadvisor.in/Attractions-g297608-Activities-Ahmedabad_Ahmedabad_District_Gujarat.html",
        },
        {
            placeName: "Pune",
            category: "South",
            price: "15,000",
            image: "mumbai_tour.jpg",
            link : "https://www.holidify.com/places/pune/sightseeing-and-things-to-do.html",
        },
        {
            placeName: "Kolapur",
            category: "South",
            price: "15,000",
            image: "mumbai_tour.jpg",
            link : "https://www.holidify.com/places/kolhapur/sightseeing-and-things-to-do.html"
        },
        {
            placeName: "Roorkee",
            category: "North",
            price: "15,000",
            image: "mumbai_tour.jpg",
            link : "https://www.tripadvisor.in/Attractions-g1602172-Activities-Roorkee_Haridwar_District_Uttarakhand.html",
        },
    ],
};
for (let i of places.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let link = document.createElement("a") ;
    link.setAttribute("href",i.link);
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    link.appendChild(image);
    imgContainer.appendChild(link);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("place-name");
    name.innerText = i.placeName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("places").appendChild(card)
}
//Parameter passed from button (Parameter same as category)
function filterPlace(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //check if element contains category 
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".place-name");
    let cards = document.querySelectorAll(".card");
    let found = false;
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
            found = true; 
        } else {
            //hide others
            cards[index].classList.add("hide");
            // document.getElementById("places").innerHTML="Not Found";
        }
    });
if (!found) {
    alert("No matching results found");
    // You can replace the alert with your preferred method of displaying a "not found" message
}
});





//Initially display all places
window.onload = () => {
    filterPlace("all");
};