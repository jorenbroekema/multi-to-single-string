const single = document.getElementById("single");
const multi = document.getElementById("multi");

single.addEventListener("input", (ev) => {
  const stringified = JSON.stringify(ev.target.value);
  multi.value = stringified.slice(1, stringified.length - 1);
});

multi.addEventListener("click", (ev) => {
  navigator.clipboard.writeText(ev.target.value);
  const copiedText = document.createElement("p");
  copiedText.innerText = "Copied!";
  document.body.appendChild(copiedText);
  setTimeout(() => {
    copiedText.remove();
  }, 1500);
});
