const menuOpen = document.getElementById('menu');
const nav = document.querySelector('nav');
const menuClose = document.getElementById('menuClose');



menuOpen.addEventListener("click", () => {
    if (nav.style.right != "0px"){
        nav.style.right = "0px";
        menuClose.style.display = "flex";
    }
});
menuClose.addEventListener("click", () => {
    if (nav.style.right === "0px"){
        nav.style.right = "-250px";
        menuClose.style.display = "none";
    }
});