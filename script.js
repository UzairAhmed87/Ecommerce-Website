const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");


if (bar) {
    bar.addEventListener("click",()=>{
    nav.style.right = "0px"
    })
}

if (close) {
    close.addEventListener("click",()=>{
        nav.style.right = "-300px"
    })
}