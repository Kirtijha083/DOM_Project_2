let container = document.querySelector("#container");

let icon = document.querySelector("i");

container.addEventListener("dblclick", () => {

  icon.style.transform = 'translate(-50%,-50%) scale(1)';
  icon.style.opacity = 0.8;

  setTimeout(function () {
    icon.style.opacity = 0;
  }, 1000) //3000- 3sec

  setTimeout(function () {
    icon.style.transform = 'translate(-50%,-50%) scale(0)';
  }, 2000) //2000- 2sec
  
});
