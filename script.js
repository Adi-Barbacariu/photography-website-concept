let menu = document.querySelector('.hamburger__wrapper');

let nav = document.querySelector('.nav');

let state = "closed";

menu.addEventListener("click", () => {
    if(state == "closed"){
        nav.style.visibility = "hidden";
        nav.style.opacity = ".85";
        state = "opened";
    }else{
        nav.style.visibility = "visible";
        state = "closed";
    }
})