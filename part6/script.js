// Topic Create Stunning Text Animations

function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var spillitedText = h1Text.split("");

  var clutter = "";

  spillitedText.forEach((text) => {
    clutter += `<span>${text}</span>`;
  });
  h1.innerHTML = clutter;
}
breakTheText();

