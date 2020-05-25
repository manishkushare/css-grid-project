const formBtn = document.querySelector(".form-name");
const btn= document.querySelector(".btn");
const footerLogo = document.querySelector(".footer-logo");
const header= document.querySelector(".header");

function handleForm(event) {
    event.preventDefault();
}

function handleBtn(event){
    event.preventDefault();
    event.style.backgroundColor= "blue";
}

function handleFooter(event) {
    event.preventDefault();
}

function handleHeader(event) {
    if(window.scrollY > 450 ) {
        header.style.backgroundColor= "burlywood"
    }else {
        header.style.backgroundColor = "transparent"
    }
}

formBtn.addEventListener("submit",handleForm);
btn.addEventListener("submit",handleBtn)
footerLogo.addEventListener("click", handleFooter);
window.addEventListener("scroll" ,handleHeader);
