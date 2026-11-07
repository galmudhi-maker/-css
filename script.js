
document.addEventListener("DOMContentLoaded", function () {

  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
      selectedPage.classList.add("active");
      window.scrollTo(0, 0);
    }
  }

  function navigate() {
    const pageId = location.hash.substring(1) || "home";
    showPage(pageId);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const pageId = link.getAttribute("href").substring(1);

      if (document.getElementById(pageId)) {
        history.pushState(null, "", "#" + pageId);
        navigate();
      }
    });
  });

  window.addEventListener("popstate", navigate);

  window.addEventListener("hashchange", navigate);

  navigate();

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("تم استلام رسالتك بنجاح! شكرًا لتواصلك معنا 💙");
      form.reset();
    });
  }

});
