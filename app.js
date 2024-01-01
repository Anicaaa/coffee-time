const yesPage = () => {
  window.location.href = "next.html";
};

const noBtn = document.getElementById("noBtn");

const mouseHover = () => {
  const x = Math.floor(Math.random() * 500) + 1;
  const y = Math.floor(Math.random() * 500) + 1;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

noBtn.addEventListener("mouseover", mouseHover);
