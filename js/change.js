// 1) change บน <select>: เลือกเสร็จ → เปลี่ยนสีกล่อง
const colorBox = document.querySelector("#colorBox");
document.querySelector("#themeSel").addEventListener("change", (e) => {
  colorBox.style.background = e.target.value;
  colorBox.textContent = "เลือก: " + e.target.selectedOptions[0].text;
});

// 2) change บน checkbox: ใช้ .checked (true/false)
document.querySelector("#roundChk").addEventListener("change", (e) => {
  colorBox.style.borderRadius = e.target.checked ? "50px" : "12px";
});

// 3) input บน range: อัปเดตทุกครั้งที่เลื่อน
document.querySelector("#qtyRange").addEventListener("input", (e) => {
  document.querySelector("#qtyVal").textContent = e.target.value + " หุ้น";
});

// 4) เปรียบเทียบ: นับจำนวนครั้งที่แต่ละ event ยิง
let nInput = 0, nChange = 0;
const txt = document.querySelector("#cmpText");
txt.addEventListener("input",  () => { nInput++;  showCount(); });
txt.addEventListener("change", () => { nChange++; showCount(); });
function showCount() {
  document.querySelector("#cmpOut").textContent =
    `input ยิง ${nInput} ครั้ง | change ยิง ${nChange} ครั้ง`;
}