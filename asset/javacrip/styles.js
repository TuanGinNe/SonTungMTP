const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

// hàm hiện mua vé
function showBuyTickets() {
  modal.classList.add("open");
}

// hàm ẩn mua vé
function hidenBuyTickets() {
  modal.classList.remove("open");
}
//Lặp qua từng thẻ button click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
//nghe hành vui click close
modalClose.addEventListener("click", hidenBuyTickets);
//ấn toàn màn hình để close
modal.addEventListener("click", hidenBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//Grid sytems

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

//Đóng mở mobile menu
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//Tự động đóng khi chọn menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  //có a/c em liền kề and có subnav

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
