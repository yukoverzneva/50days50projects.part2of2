const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");
let i = 0;
let interval = setInterval(run, 2000);
function run() {
  i++;
  changeImg();
}
function changeImg() {
  if (i > img.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = img.length - 1;
  }
  imgs.style.transform = `translateX(${-i * 500}px)`;
}
function resetInt() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
rightBtn.addEventListener("click", () => {
  i++;
  changeImg();
  resetInt();
});
leftBtn.addEventListener("click", () => {
  i--;
  changeImg();
  resetInt();
});
