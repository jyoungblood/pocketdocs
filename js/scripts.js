
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (document.querySelector('[href="#' + id + '"]') !== null) {
        if (entry.intersectionRatio > 0) {
          document.querySelectorAll('nav a').forEach(el => el.classList.remove('current'));
          document.querySelector('[href="#' + id + '"]').classList.add('current');
          history.pushState({}, '', '#' + id);
        } else {
          // console.log('remove current: ' + id);
          // document.querySelector('[href="#' + id + '"]').classList.remove('current');
        }
      }
    });
  }, { rootMargin: "0px 0px -90% 0px" });

  // Track all sections that have an `id` applied
  document.querySelectorAll('[id]').forEach((section) => {
    observer.observe(section);
  });

});
