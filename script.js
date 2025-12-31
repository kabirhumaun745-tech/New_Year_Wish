const effects = document.querySelector('.effects');

setInterval(() => {
  const heart = document.createElement('div');
  const emojis = ['❤️','💖','💘','💝','💗','💞','💓','💕','✨'];

  heart.className = 'heart';
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // DEPTH LAYER SETTINGS
  const size = 20 + Math.random() * 40;   // 20px–60px
  const duration = 4 + Math.random() * 4; // 4s–8s

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = size + 'px';
  heart.style.animationDuration = duration + 's';

  // FAR / MID / NEAR DEPTH
  if (size < 30) {
    heart.style.opacity = '0.4';
    heart.style.filter = 'blur(1px)';
  } else if (size > 45) {
    heart.style.textShadow = '0 0 12px #ff6b9d, 0 0 25px pink';
  }

  effects.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);

}, 300);
const emojis = ["😇", "🎈", "🎵", "🎶"];
const container = document.querySelector(".emoji-rain");

setInterval(() => {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 20 + 24 + "px";
  emoji.style.animationDuration = Math.random() * 4 + 6 + "s";

  container.appendChild(emoji);

  setTimeout(() => emoji.remove(), 10000);
}, 500);








