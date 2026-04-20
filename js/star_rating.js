document.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("star")) return;

  const star = e.target;
  const widget = star.closest("#star-widget");
  const stars = widget.querySelectorAll(".star");
  const ratingText = widget.nextElementSibling;

  let val = calculate(e, star);
  paint(stars, val, ratingText);
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("star")) return;

  const star = e.target;
  const widget = star.closest("#star-widget");
  const stars = widget.querySelectorAll(".star");
  const ratingText = widget.nextElementSibling;

  widget.dataset.saved = calculate(e, star);
  paint(stars, widget.dataset.saved, ratingText);
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.classList.contains("star")) return;

  const star = e.target;
  const widget = star.closest("#star-widget");
  const stars = widget.querySelectorAll(".star");
  const ratingText = widget.nextElementSibling;

  let saved = widget.dataset.saved || 0;
  paint(stars, saved, ratingText);
});

function calculate(e, star) {
  let box = star.getBoundingClientRect();
  let isHalf = e.clientX - box.left < box.width / 2;
  return star.dataset.v - (isHalf ? 0.5 : 0);
}

function paint(stars, val, ratingText) {
  stars.forEach((s, i) => {
    s.className = "star";
    if (val >= i + 1) s.classList.add("filled");
    else if (val == i + 0.5) s.classList.add("half-filled");
  });

  if (val <= 2) {
    ratingText.className = "poor-bg";
  } else if (val >= 4.5) {
    ratingText.className = "excellent-bg";
  } else {
    ratingText.className = "good";
  }
}
