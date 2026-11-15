// เลือกสไตล์ → เปลี่ยน attribute data-theme (event: change)
document.querySelector("#theme").addEventListener("change", (e) => {
  document.querySelector(".pf").dataset.theme = e.target.value;
});