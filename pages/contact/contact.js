const sendLetter = document.getElementById("sendLetter");

function addClass() {
    document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

function goToHome() {
    window.location.href = "../../index.html";
}
