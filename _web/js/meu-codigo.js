
counter = 0;
const counterBtn = document.querySelector("[data-counter]");
counterBtn.firstElementChild.innerText += counter;
 
counterBtn.addEventListener("click", () => {
counterBtn.firstElementChild.innerText = ++counter;
});
    