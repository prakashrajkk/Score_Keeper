const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const select = document.querySelector("#select");
const reset = document.querySelector("#reset");

let selectedValue = 0;
let p1_score = 0;
let p2_score = 0;
let gameOver = false;

select.addEventListener("change", function () {
  selectedValue = Number(select.value);
});

btn1.addEventListener("click", () => {
  if (!gameOver && selectedValue > 0) {
    p1_score += 1;
    p1.innerHTML = p1_score;
    if (p1_score === selectedValue) {
      gameOver = true;
      p1.classList.add("success");
      p2.classList.add("failure");
      btn1.disabled = true;
      btn2.disabled = true;
    }
  }
});

btn2.addEventListener("click", () => {
  if (!gameOver && selectedValue > 0) {
    p2_score += 1;
    p2.innerHTML = p2_score;
    if (p2_score === selectedValue) {
      gameOver = true;
      p2.classList.add("success");
      p1.classList.add("failure");
      btn1.disabled = true;
      btn2.disabled = true;
    }
  }
});

reset.addEventListener("click", () => {
  p1_score = 0;
  p2_score = 0;
  p1.innerHTML = p1_score;
  p2.innerHTML = p2_score;
  gameOver = false;
  btn1.disabled = false;
  btn2.disabled = false;
  p1.classList.remove("success", "failure");
  p2.classList.remove("success", "failure");
  select.value = ""; 
});
