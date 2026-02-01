const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");

let noCount = 0;
const noLines = [
  "Are you sure? 🥺",
  "Like… 100% sure? 😭",
  "Okay but what if I bring snacks?",
  "Don’t do this to me 😔",
  "Last chance… 😳"
];

noBtn.addEventListener("mouseenter", () => {
  // make the No button run away
  const pad = 20;
  const maxX = window.innerWidth  - noBtn.offsetWidth  - pad;
  const maxY = window.innerHeight - noBtn.offsetHeight - pad;

  const x = Math.max(pad, Math.random() * maxX);
  const y = Math.max(pad, Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;

  msg.textContent = noLines[Math.min(noCount, noLines.length - 1)];
  noCount++;
});

yesBtn.addEventListener("click", () => {
  msg.textContent = "YAYYY 💖 See you soon!!";
  document.body.style.background =
    "radial-gradient(circle at top, #fff1f5, #ffb3c7)";
  yesBtn.disabled = true;
  noBtn.disabled = true;

  // tiny confetti-ish hearts
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (16 + Math.random() * 18) + "px";
    heart.style.transition = "transform 2.2s linear, top 2.2s linear";
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.top = "110vh";
      heart.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
    });
    setTimeout(() => heart.remove(), 2300);
  }
});


