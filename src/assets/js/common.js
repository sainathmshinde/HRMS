document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  sidebar.querySelectorAll('.nav > .nav-item > a.nav-link[data-bs-toggle="collapse"]').forEach(link => {
    link.removeAttribute("data-bs-toggle");

    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSelector = this.getAttribute("href");
      if (!targetSelector || !targetSelector.startsWith("#")) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      let bsCollapse = bootstrap.Collapse.getInstance(target);
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(target, { toggle: false });
      }

      bsCollapse.toggle();
    });
  });
  sidebar.addEventListener("click", function (e) {
    const link = e.target.closest("a.nav-link");
    if (!link) return;
    sidebar.querySelectorAll(".nav-item.active").forEach(i => i.classList.remove("active"));
    sidebar.querySelectorAll(".sub-menu .nav-link.active").forEach(a => a.classList.remove("active"));

    const navItem = link.closest(".nav-item");
    const isSubMenu = link.closest(".sub-menu");

    if (isSubMenu) {
      link.classList.add("active");
      const parent = link.closest(".collapse")?.closest(".nav-item");
      parent?.classList.add("active");
    } else {
      navItem.classList.add("active");
    }
  });

});
