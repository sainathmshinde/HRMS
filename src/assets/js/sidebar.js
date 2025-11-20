// call this after page and partials are loaded
function initSidebarActive() {
  // delegate click inside sidebar
  document.body.addEventListener('click', function (e) {
    const link = e.target.closest('.sidebar .nav-link');
    if (!link) return;

    // remove active from others
    document.querySelectorAll('.sidebar .nav-link.active').forEach(x => x.classList.remove('active'));

    // set active on clicked
    link.classList.add('active');

    // if it's a collapse toggle (has data-bs-toggle) allow bootstrap to open collapse
  });

  // On load try to add active class based on current URL path (if full-page navigation)
  const path = location.pathname.split('/').pop();
  if (path) {
    document.querySelectorAll('.sidebar .nav-link').forEach(a => {
      const href = (a.getAttribute('href') || '').split('/').pop();
      if (href && href === path) {
        document.querySelectorAll('.sidebar .nav-link.active').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        // if inside sub-menu, expand parent collapse
        const parentCollapse = a.closest('.collapse');
        if (parentCollapse) {
          parentCollapse.classList.add('show');
        }
      }
    });
  }
}

// export or call after partials injected
document.addEventListener('DOMContentLoaded', function() {
  // if partials are injected after DOMContentLoaded, call initSidebarActive() after includePart() resolves.
});
