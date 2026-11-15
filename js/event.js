let count = 0;                                   // state
const numEl = document.querySelector("#countNumber");

function render() {
  numEl.textContent = count;
  // บวกสีเขียว ลบสีแดง ศูนย์สีเทา
  numEl.style.color = count > 0 ? "#16a34a" : count < 0 ? "#dc2626" : "#64748b";
}

document.querySelector("#btnPlus").addEventListener("click", () => {
  count++;
  render();
});
document.querySelector("#btnMinus").addEventListener("click", () => {
  count--;
  render();
});
document.querySelector("#btnReset").addEventListener("click", () => {
  count = 0;
  render();
});
