const buyBnts = document.querySelectorAll(".js-buy-tickets");

const modal = document.querySelector(".js-modal");

const modalClose = document.querySelector("js-modal-close");

const modalContainer = document.querySelector("js-odal-container");

// hàm hiện mua vé
function showBuyTickets() {
  modal.classList.add("open");
}

// hàm ẩn mua vé
function hidenBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBnt of buyBnts) {
  buyBnt.addEventListener("click", showBuyTickets);
}

modalClose.addEventListener("click", hidenBuyTickets);

modal.addEventListener("click", hidenBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
