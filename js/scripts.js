
window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (document.querySelector('[href="#' + id + '"]') !== null) {
        if (entry.intersectionRatio > 0) {
          document.querySelectorAll('nav a').forEach(el => el.classList.remove('current'));
          document.querySelector('[href="#' + id + '"]').classList.add('current');
          history.pushState({}, '', '#' + id);
        }
      }
    });
  }, { rootMargin: "0px 0px -90% 0px" });

  document.querySelectorAll('[id]').forEach((section) => {
    observer.observe(section);
  });

});


function dropdown_toggle() {
  document.getElementById('sidebar').classList.toggle('mobile-hidden');
}

document.addEventListener('click', function (event) {
  if (event.target.closest('main') || document.querySelector('nav').contains(event.target)) {
    document.getElementById('sidebar').classList.add('mobile-hidden')
  }
}, false);


