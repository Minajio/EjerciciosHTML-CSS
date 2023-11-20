let signUp = document.querySelector("#signUp");
let signIn = document.querySelector("#signIn");
let nameInput = document.querySelector("#nameInput");
let title = document.querySelector("#title");

signIn.onclick = () => {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classlist.remove("disable");
    signIn.classlist.add("disable");
}
signUp.onclick = () => {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classlist.remove("disable");
    signIn.classlist.add("disable");
}