// Select all elements (excluding script/style tags)
const elements = document.querySelectorAll("div, p, h1, button, img");

const fall = () => {
  elements.forEach((el, index) => {
    let velocity = 0;
    let position = el.getBoundingClientRect().top;
    const gravity = 0.5; // Downward force

    // Set element to absolute so it can move freely
    el.style.position = "fixed";
    el.style.top = position + "px";

    function fall() {
      velocity += gravity; // Increase speed over time (acceleration)
      position += velocity; // Move the element

      // Stop at the bottom of the window
      if (position + el.offsetHeight > window.innerHeight) {
        position = window.innerHeight - el.offsetHeight;
        velocity *= -0.4; // Bounce slightly
      }

      el.style.top = position + "px";
      requestAnimationFrame(fall);
    }

    // Start falling with a slight delay for each to look more natural
    setTimeout(fall, index * 50);
  });
};
