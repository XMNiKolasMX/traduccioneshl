window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('#loader').style.opacity = '0';
      document.querySelector('#loader').style.display = 'none';
      document.querySelector('body').classList.remove('loading');
    }, 5000);
  });
  