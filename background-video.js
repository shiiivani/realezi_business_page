const video1 = document.getElementById("background-video");
const video2 = document.getElementById("background-video2");

video2.addEventListener("loadeddata", function () {
  video2.play();
  video2.pause();
});

video1.addEventListener("ended", function () {
  video1.setAttribute("hidden", "true");

  video2.removeAttribute("hidden");

  if (video2.readyState >= 3) {
    video2.play();
  } else {
    video2.addEventListener("canplay", () => {
      video2.play();
    });
  }
});
