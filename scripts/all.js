(function () {
  const $navbars = document.getElementsByClassName('navbar');
  for (const $navbar of $navbars) {
    const $hamburger = $navbar.getElementsByClassName('navbar__hamburger')[0];
    if ($hamburger) {
      $hamburger.addEventListener('click', () => {
        $hamburger.classList.toggle('hamburger--active');
      })
    }
  }
})();
