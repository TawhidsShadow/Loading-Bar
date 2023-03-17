const loadingBarEl = document.querySelector(".loading-bar__item");

let count = 1;
let loader = setInterval(function(){
  count++
  loadingBarEl.style.width = `${count}%`
  if(count === 100){
    clearInterval(loader)
  }
}, 10)