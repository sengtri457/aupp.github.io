const navigation = document.querySelector(".navagation");
const lista = document.querySelectorAll(".list > li > a");
const list = document.querySelector(".list");
const tog = document.querySelector(".tog");
const icone = document.querySelector(".fa-bars");
const listtop = document.querySelector(".list-top");
console.log(icone);
console.log("Navigation:", navigation);
console.log("Lista:", lista);

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navigation.classList.add("scrolled");
    lista.forEach((a) => {
      a.classList.add("color");
    });
  } else {
    navigation.classList.remove("scrolled");
    lista.forEach((a) => {
      a.classList.remove("color");
    });
  }
});
tog.addEventListener("click", function () {
  if (icone.classList.contains("fa-bars")) {
    icone.classList.replace("fa-bars", "fa-times");
  } else {
    icone.classList.replace("fa-times", "fa-bars");
  }
  list.classList.toggle("active");
  listtop.classList.toggle("active");
});
const togg = document.querySelectorAll("h2 > span");
togg.forEach((e, index) => {
  e.addEventListener("click", () => {
    const listMajor = document.querySelectorAll(".list-major")[index];
    if (listMajor) {
      listMajor.classList.toggle("active");
    }
    const list = document.querySelector(".list");
    const listtop = document.querySelector(".listtop");
    if (list && listtop) {
      list.classList.toggle("active");
      listtop.classList.toggle("active");
    }
  });
});
let isScrolling;
const $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function () {
  clearTimeout(isScrolling);
  $backToTop.fadeIn("slow");
  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});
$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1700, "easeInOutExpo");
});
