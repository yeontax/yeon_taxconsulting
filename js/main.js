// 모바일 메뉴 토글
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      nav.style.display = nav.classList.contains("open") ? "flex" : "";
    });
  }

  // 블로그 목록 카테고리 필터
  var tabs = document.querySelectorAll(".filter-tab");
  var cards = document.querySelectorAll("[data-category]");
  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var target = tab.getAttribute("data-filter");
        cards.forEach(function (card) {
          if (target === "all" || card.getAttribute("data-category") === target) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 상담문의 폼: 백엔드 연결 전 임시 안내
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("상담 신청이 접수되었습니다. (데모 화면입니다 — 실제 접수를 위해서는 폼 연동이 필요합니다)");
      form.reset();
    });
  }
});
