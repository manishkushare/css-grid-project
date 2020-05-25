const formBtn = document.querySelector(".form-name");
const btn= document.querySelector(".btn");
const footerLogo = document.querySelector(".footer-logo");

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

formBtn.addEventListener("submit",handleForm);
btn.addEventListener("submit",handleBtn)
footerLogo.addEventListener("click", handleFooter);

