document.addEventListener("DOMContentLoaded", function() {
    const askButton = document.getElementById("askButton");
    const message = document.getElementById("message");
    const responseButtons = document.getElementById("responseButtons");
    const yesButton = document.getElementById("yesButton");
    const buttonSound = document.getElementById("buttonSound");
    const messageSound = document.getElementById("messageSound");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const yesMusic = document.getElementById("yesMusic");

    // Start background music
    backgroundMusic.play();

    askButton.addEventListener("click", function() {
        buttonSound.play();
        message.textContent = "I LOVE YOU AND FOREVER WOULD DO MY BEST TO KEEP YOUR SMILE";
        message.classList.remove("hidden");
        responseButtons.classList.remove("hidden");
        messageSound.play();
    });

    yesButton.addEventListener("click", function() {
        yesMusic.play();
        alert("This is our song <3");
    });
});
