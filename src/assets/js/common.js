document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  
  // Store rotation angle for each arrow
  window.arrowRotations = window.arrowRotations || new Map();
  
  // Function to rotate arrow 180 degrees
  function rotateArrow(arrow) {
    if (!arrow) return;
    let currentRotation = window.arrowRotations.get(arrow) || 0;
    currentRotation += 180;
    window.arrowRotations.set(arrow, currentRotation);
    arrow.style.setProperty('transform', `rotate(${currentRotation}deg)`, 'important');
  }
  
  sidebar.querySelectorAll('.nav > .nav-item > a.nav-link[data-bs-toggle="collapse"]').forEach(link => {
    link.removeAttribute("data-bs-toggle");
    
    // Find the arrow for this link
    const arrow = link.querySelector('i.menu-arrow');
    if (arrow) {
      // Initialize rotation to 0
      window.arrowRotations.set(arrow, 0);
      arrow.style.setProperty('transform', 'rotate(0deg)', 'important');
    }
    
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSelector = this.getAttribute("href");
      if (!targetSelector || !targetSelector.startsWith("#")) return;
      
      // Get the arrow for this specific link (in case it wasn't found earlier)
      const linkArrow = this.querySelector('i.menu-arrow');
      if (linkArrow) {
        rotateArrow(linkArrow);
      }
      
      const target = document.querySelector(targetSelector);
      if (!target) return;
      let bsCollapse = bootstrap.Collapse.getInstance(target);
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(target, { toggle: false });
      }
      bsCollapse.toggle();
    });
  });
  const exportBtn = document.getElementById("btnExportExcel");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const content = "Employee Name,Leave Date\nRahul,12-Oct-2025";

      const blob = new Blob([content], {
        type: "application/vnd.ms-excel"
      });

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "OnLeaveReport.xlsx"; 

      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    });
  }
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