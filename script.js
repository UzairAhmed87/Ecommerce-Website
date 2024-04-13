const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mainImg=document.getElementById("mainImg")
const smallImg = document.getElementsByClassName("small-img")


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

smallImg[0].addEventListener("click",()=>{
    mainImg.src = smallImg[0].src
})
smallImg[1].addEventListener("click",()=>{
    mainImg.src = smallImg[1].src
})
smallImg[2].addEventListener("click",()=>{
    mainImg.src = smallImg[2].src
})
smallImg[3].addEventListener("click",()=>{
    mainImg.src = smallImg[3].src
})
