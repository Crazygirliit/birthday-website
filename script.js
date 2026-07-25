// =====================================
// PASSWORD CHECK
// =====================================

function checkPassword() {

    const password = document.getElementById("password").value;

    if (password === "13526241126") {

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

    } else {

        document.getElementById("message").innerHTML =
        "❌ Wrong Password ❤️<br><br>💡 Hint: Think about two special dates 😉";

    }

}

// =====================================
// START SURPRISE
// =====================================

function startSurprise() {

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

    playMusic();

}

// =====================================
// PHOTO PAGE
// =====================================

function showPhotos() {

    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";

}

// =====================================
// GIFT PAGE
// =====================================

function showGift() {

    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";

}

// =====================================
// MUSIC
// =====================================

function playMusic() {

    const music = document.getElementById("birthdayMusic");

    if (music) {

        music.play().catch(() => {});

    }

}
// =====================================
// OPEN GIFT
// =====================================

function openGift() {

    document.querySelector(".gift-box").style.display = "none";

    const teddy = document.getElementById("teddy");

    teddy.style.display = "block";

    document.getElementById("giftMessage").innerHTML =
    "🤍 A Cute Teddy Just For You! 🧸❤️";

}

// =====================================
// SHOW FLOWERS
// =====================================

function showBouquet() {

    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "block";

}

// =====================================
// SHOW ENVELOPE PAGE
// =====================================

function showLetter() {

    document.getElementById("page6").style.display = "none";
    document.getElementById("page7").style.display = "block";

}

// =====================================
// OPEN ENVELOPE
// =====================================

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(function(){

        document.getElementById("page7").style.display = "none";
        document.getElementById("page8").style.display = "block";

    },800);

}

// =====================================
// FINAL PAGE
// =====================================

function showFinale() {

    document.getElementById("page8").style.display = "none";
    document.getElementById("page9").style.display = "flex";

}
// =====================================
// RUNNING NO BUTTON
// =====================================

const noBtn = document.getElementById("noBtn");

if (noBtn) {

    function moveButton() {

        const x = Math.random() * 300 - 150;
        const y = Math.random() * 150 - 75;

        noBtn.style.position = "relative";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    }

    noBtn.addEventListener("mouseenter", moveButton);

    noBtn.addEventListener("click", function(e){

        e.preventDefault();

        alert("😂 Sorry Birthday Boy!\n\nNO is not an option today ❤️");

        moveButton();

    });

}

// =====================================
// SMALL FADE EFFECT
// =====================================

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";

    }, 100);

};