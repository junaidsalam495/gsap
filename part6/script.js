// Topic Create Stunning Text Animations

function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var spillitedText = h1Text.split("");
  var halfValue = spillitedText.length / 2;
  var clutter = "";

  spillitedText.forEach((text, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${text}</span>`;
    } else {
      clutter += `<span class="b">${text}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 .a", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
});
gsap.from("h1 .b", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.2,
});
