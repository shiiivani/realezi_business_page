const riveAnimations = {};

// Function to initialize Rive animation
function loadRiveAnimation(
  key,
  src,
  canvasId,
  stateMachine = "State Machine 1"
) {
  return new rive.Rive({
    src: src,
    canvas: document.getElementById(canvasId),
    autoplay: true,
    stateMachines: stateMachine,
    onLoad: () => {
      riveAnimations[key].resizeDrawingSurfaceToCanvas();
    },
  });
}

// Function to clean up and reload animations on click
function handleClick(clickedKey) {
  for (const key in riveAnimations) {
    if (riveAnimations.hasOwnProperty(key)) {
      riveAnimations[key].cleanup();
      riveAnimations[key] = loadRiveAnimation(
        key,
        riveConfigs[key].src,
        riveConfigs[key].id,
        "State Machine 1"
      );
    }
  }

  riveAnimations[clickedKey].cleanup();
  riveAnimations[clickedKey] = loadRiveAnimation(
    clickedKey,
    riveConfigs[clickedKey].src,
    riveConfigs[clickedKey].id,
    "Timeline 1"
  );
}

// Add event listeners to each element for click and touchstart
function addEventListeners(elementId) {
  const element = document.getElementById(elementId);

  element.addEventListener("click", function () {
    handleClick(elementId);
  });

  element.addEventListener("touchstart", function (event) {
    event.preventDefault();
    handleClick(elementId);
  });
}

// List of canvas elements and corresponding Rive animation files
const riveConfigs = {
  residential: { id: "residential", src: "./riv/building.riv" },
  commercial: { id: "commercial", src: "./riv/commercial.riv" },
  plot: { id: "plot", src: "./riv/plot.riv" },
  pg: { id: "pg", src: "./riv/pg.riv" },
  coworkingspace: { id: "coworkingspace", src: "./riv/coworkingspace.riv" },
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const canvasId = entry.target.id;
        const config = riveConfigs[canvasId];

        if (config && !riveAnimations[canvasId]) {
          riveAnimations[canvasId] = loadRiveAnimation(
            canvasId,
            config.src,
            config.id
          );

          addEventListeners(canvasId);

          observer.unobserve(entry.target);
        }
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

// Observe each canvas element
Object.values(riveConfigs).forEach((config) => {
  const canvasElement = document.getElementById(config.id);
  if (canvasElement) {
    observer.observe(canvasElement);
  }
});

// Party Popper Animation
const partyPopper = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});

const partyPopper2 = new rive.Rive({
  src: "./riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper2"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});
