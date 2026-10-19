document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('docs-sidebar-toggle');
  const sidebar = document.getElementById('docs-sidebar');
  const backdrop = document.getElementById('docs-sidebar-backdrop');
  
  if (!toggleBtn || !sidebar || !backdrop) return;

  const links = sidebar.querySelectorAll('a');

  const openSidebar = () => {
    sidebar.classList.add('is-open');
    backdrop.classList.add('is-active');
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeSidebar = () => {
    sidebar.classList.remove('is-open');
    backdrop.classList.remove('is-active');
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  // 1. Toggle button handler
  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('is-open');
    isOpen ? closeSidebar() : openSidebar();
  });

  // 2. Click backdrop to close
  backdrop.addEventListener('click', closeSidebar);

  // 3. Auto-close when clicking any link inside the sidebar
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) {
        closeSidebar();
      }
    });
  });

  // 4. Reset states if resized back to laptop/desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800 && sidebar.classList.contains('is-open')) {
      closeSidebar();
    }
  });
});