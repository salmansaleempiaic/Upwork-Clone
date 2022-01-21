const HAMBURGER = document.querySelector(".hamburger");
HAMBURGER.addEventListener("click",()=>{
    if(HAMBURGER.classList[1] !== "checkclass"){
        // HAMBURGER.children[1].style.display = "none";
        HAMBURGER.children[1].classList.remove("d-block");
        HAMBURGER.children[1].classList.add("d-none");
        HAMBURGER.firstElementChild.style.marginBottom = "12px";
        HAMBURGER.firstElementChild.style.transform = "rotate(45deg)";
        HAMBURGER.firstElementChild.style.top = "8px";
        HAMBURGER.lastChild.style.transform = "rotate(-45deg)";
        HAMBURGER.lastChild.style.bottom = "8px";
        HAMBURGER.classList.add("checkclass");
    }else{
        // HAMBURGER.children[1].style.display = "block";
        HAMBURGER.children[1].classList.remove("d-none")
        HAMBURGER.children[1].classList.add("d-block")
        HAMBURGER.firstElementChild.style.marginBottom = "4px";
        HAMBURGER.firstElementChild.style.top = "0px";
        HAMBURGER.firstElementChild.style.transform = "rotate(0deg)";
        HAMBURGER.lastChild.style.bottom = "0";
        HAMBURGER.lastChild.style.transform = "rotate(+0deg)";
        HAMBURGER.classList.remove("checkclass");
    }
})