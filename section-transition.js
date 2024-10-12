document.addEventListener("DOMContentLoaded", function () {
  const sectionFive = document.getElementById("section-five");
  const sectionFour = document.querySelector(".section-four");
  const sectionThreeMobile = document.querySelector(
    ".section_three_mobile_view"
  );
  const sectionSix = document.querySelector(".section-six");

  window.addEventListener("scroll", function () {
    const sectionFiveRect = sectionFive.getBoundingClientRect();
    const sectionFourRect = sectionFour.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionFiveRect.top <= viewportHeight - 100) {
      sectionFour.style.backgroundColor = "#111F3C";
      sectionFive.style.backgroundColor = "#111F3C";
      sectionThreeMobile.style.backgroundColor = "#111F3C";
      sectionSix.style.backgroundColor = "#111F3C";
    } else if (sectionFourRect.bottom >= 200) {
      sectionFour.style.backgroundColor = "#FFFFFF";
      sectionFive.style.backgroundColor = "#FFFFFF";
      sectionThreeMobile.style.backgroundColor = "#f2f3f8";
      sectionSix.style.backgroundColor = "#FFFFFF";
    } else {
      sectionFour.style.backgroundColor = "";
      sectionFive.style.backgroundColor = "";
      sectionSix.style.backgroundColor = "";
      sectionThreeMobile.style.backgroundColor = "#f2f3f8";
    }
  });
});
