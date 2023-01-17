window.addEventListener('DOMContentLoaded', function() {
  if( window.innerWidth < 790){
    document.querySelector('.nav').classList.toggle('burger-menu');
  }
  else {
    document.querySelector('.burger').classList.toggle('hidden');
  }
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.nav').classList.toggle('burger-menu--activ');
  });
});
