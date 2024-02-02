const offcanvasButtons = document.querySelectorAll('[data-toggle="offcanvas"]');
const offcanvasCloseButtons = document.querySelectorAll('[data-dismiss="offcanvas"]');
const offcanvi = document.querySelectorAll('[data-offcanvas]');

for (const offcanvasButton of offcanvasButtons){
  offcanvasButton.addEventListener('click', handleOffcanvas);
}

for (const offcanvasCloseButton of offcanvasCloseButtons){
  offcanvasCloseButton.addEventListener('click', handleOffcanvas);
}

for (const offcanvas of offcanvi){
  offcanvas.addEventListener('click', handleOffcanvasClick);
}

function handleOffcanvas(e) {
  offcanvas = document.getElementById(e.target.dataset.target);
  offcanvas.classList.toggle('offcanvas-show');
}
  
function handleOffcanvasClick(e) {
  offcanvasContent = e.target.querySelector('[data-content="offcanvas"]');
  if(offcanvasContent != null && !offcanvasContent.contains(e.target)) {
    offcanvas.classList.remove('offcanvas-show');
  }
}