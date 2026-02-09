"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

let noCount = 0;
let yesScale = 1;
let noScale = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay!! I love you 💗🥰";
  btnContainer.classList.add("hidden");
  img.src =
    "https://media.tenor.com/ACi1vdjNbpIAAAAi/%EC%9C%A0%ED%83%80-%ED%86%A4%ED%86%A4%ED%94%84%EB%A0%8C%EC%A6%88.gif";
});

noBtn.addEventListener("click", () => {
  noCount++;

  updateTitle(noCount);
  resizeButtons();
  updateImage(noCount);
});

function resizeButtons() {
  yesScale *= 1.2;
  noScale *= 0.9;

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;
}

function updateTitle(count) {
  const messages = [
    "Will you be my valentine? 🥺",
    "Are you sure? 🥺",
    "Mommy please 🥹",
    "Don’t do this to me 😭",
    "You’re breaking my heart 💔",
    "I’m gonna cry… 😭💔",
  ];

  title.innerHTML = messages[Math.min(count, messages.length - 1)];
}

function updateImage(count) {
  const index = Math.min(count, tontonGifs.length - 1);
  img.src = tontonGifs[index];
}

