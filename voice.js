const audio = document.getElementById("voice");
const bars = document.querySelectorAll(".visualizer span");

// autoplay after user interaction (page load is OK here)
window.onload = () => {
  audio.play();
};

// animate bars
setInterval(() => {
  bars.forEach(bar => {
    bar.style.height = Math.random() * 60 + 10 + "px";
  });
}, 180);

