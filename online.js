document.querySelector(".submit").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const items = document.getElementById("items").value.trim();
  const payment = document.getElementById("payment").value.trim();

  if (name && address && items && payment) {
    document.querySelector(".modal-container").classList.add("show");
  } else {
    alert("Please fill in all required fields.");
  }
});