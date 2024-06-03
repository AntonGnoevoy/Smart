
let locationBtn = document.querySelector('.catalog-btn');
let map = document.querySelector('.iframe');
locationBtn.addEventListener('click', function() {
  map.classList.toggle('hidden');
});
let catalogItems = document.querySelectorAll('.catalog__box-item');
let loadmoreNormalBtns = document.querySelectorAll('.loadmore--normal');
let loadmoreNormalFirst = loadmoreNormalBtns[0];
let loadmoreNormalSecond = loadmoreNormalBtns[1];
let loadmoreMobileBtns = document.querySelectorAll('.loadmore--mobile');
let loadmoreMobileFirst = loadmoreMobileBtns[0];
let loadmoreMobileSecond = loadmoreMobileBtns[1];
let loadmoreMobileThird = loadmoreMobileBtns[2];
let loadmoreMobileFourth = loadmoreMobileBtns[3];