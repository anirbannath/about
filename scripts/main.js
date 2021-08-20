(function () {
  particlesJS.load('app-particles', './scripts/particles.config.json');
  document.getElementById('years-of-experience').innerHTML = new Date(Date.now()).getFullYear() - 2016;
  document.getElementById('trainer-experience').innerHTML = new Date(Date.now()).getFullYear() - 2017;
  document.getElementById('footer-author').innerHTML = '&copy; Anirban Nath 2017 - ' + new Date(Date.now()).getFullYear()
}());
