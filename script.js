const btn = document.querySelector("button");
const form = document.querySelector(".form");
const inp = document.querySelectorAll(".input");
const label = document.querySelectorAll(".label");

btn.addEventListener("click", () => {
  form.classList.add("animate");
});

for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("click", () => {
    label[i].classList.add("on-input");
  });
}
