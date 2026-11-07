
document.addEventListener("DOMContentLoaded", function () {

  // التنقل بين الصفحات
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll("nav a, .page .btn");

  function showPage(pageId) {
    const target = document.getElementById(pageId);

    if (!target || !target.classList.contains("page")) {
      return;
    }

    pages.forEach(function (page) {
      page.classList.remove("active");
    });

    target.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const pageId = link.getAttribute("href").substring(1);

      if (document.getElementById(pageId)?.classList.contains("page")) {
        event.preventDefault();
        history.pushState(null, "", "#" + pageId);
        showPage(pageId);
      }
    });
  });

  // دعم زر الرجوع في المتصفح
  window.addEventListener("popstate", function () {
    showPage(location.hash.substring(1) || "home");
  });

  // فتح الصفحة المناسبة عند بداية التشغيل
  showPage(location.hash.substring(1) || "home");

  // نموذج التواصل
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("تم استلام رسالتك بنجاح! شكرًا لتواصلك معنا 💙");

    form.reset();
  });

});
