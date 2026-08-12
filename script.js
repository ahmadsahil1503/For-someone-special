/* =========================
   STARS
========================= */

for (let i = 0; i < 60; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(star);
}


/* =========================
   BUTTERFLIES
========================= */

const butterflies = [
    "🦋",
    "🦋",
    "🦋",
    "✨"
];

for (let i = 0; i < 8; i++) {

    const butterfly =
        document.createElement("div");

    butterfly.className =
        "butterfly";

    butterfly.innerHTML =
        butterflies[
            Math.floor(
                Math.random() *
                butterflies.length
            )
        ];

    butterfly.style.left =
        Math.random() * 100 + "vw";

    butterfly.style.animationDuration =
        (12 + Math.random() * 10) + "s";

    butterfly.style.animationDelay =
        (-Math.random() * 15) + "s";

    butterfly.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document.body.appendChild(butterfly);
}


/* =========================
   FALLING PETALS
========================= */

const petals = [
    "🌸",
    "🌷",
    "✨",
    "🌼"
];

setInterval(() => {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.innerHTML =
        petals[
            Math.floor(
                Math.random() *
                petals.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);

}, 700);


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");


function startExperience() {

    music.play().catch(() => {});

    document
        .querySelectorAll("section")[1]
        .scrollIntoView({
            behavior: "smooth"
        });

    createHearts();
}


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            "🔊 Music";

    } else {

        music.pause();

        musicBtn.innerHTML =
            "🔇 Music";
    }
}


/* =========================
   GIFT
========================= */

function openGift() {

    const message =
        document.getElementById(
            "secretMessage"
        );

    message.classList.remove(
        "hidden"
    );

    createHearts();

    confetti();
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            const hearts = [
                "💗",
                "🤍",
                "💖",
                "🦋",
                "✨"
            ];

            heart.innerHTML =
                hearts[
                    Math.floor(
                        Math.random() *
                        hearts.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(
                heart
            );

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 100);
    }
}


/* =========================
   CONFETTI
========================= */

function confetti() {

    const pieces = [
        "💖",
        "✨",
        "🌸",
        "🦋",
        "🤍",
        "💗",
        "⭐"
    ];

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const piece =
                document.createElement("div");

            piece.style.position =
                "fixed";

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.top =
                "-30px";

            piece.style.fontSize =
                (15 + Math.random() * 20) +
                "px";

            piece.style.zIndex = "100";

            piece.innerHTML =
                pieces[
                    Math.floor(
                        Math.random() *
                        pieces.length
                    )
                ];

            document.body.appendChild(
                piece
            );

            const duration =
                2000 +
                Math.random() * 2500;

            piece.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                piece.remove();
            }, duration);

        }, i * 40);
    }
            }
