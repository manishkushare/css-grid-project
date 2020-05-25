const formBtn = document.querySelector(".form-name");
const btn= document.querySelector(".btn");

function handleForm(event) {
    event.preventDefault();
}

function handleBtn(event){
    event.preventDefault();
    event.style.backgroundColor= "blue";
}

formBtn.addEventListener("submit",handleForm);
btn.addEventListener("submit",handleBtn)
