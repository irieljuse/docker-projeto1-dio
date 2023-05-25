function getCount() {
  let count = parseInt(localStorage.getItem("count")) || 0;
  count += 1;
  localStorage.setItem("count", count);
  return count;
}

document.addEventListener("DOMContentLoaded", () => {
  const count = getCount();
  const element = document.getElementById("count");
  element.innerText = `${count} ${count > 1 ? "vezes" : "vez"}`;
});
