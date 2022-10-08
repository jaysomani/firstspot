const sendLetter = document.getElementById("sendLetter");


function addClass() {
    document.body.classList.add("sent");
    
    
}


sendLetter.addEventListener("click", addClass);