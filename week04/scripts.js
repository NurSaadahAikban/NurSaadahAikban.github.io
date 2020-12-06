function transformUpperCase(){
    let a=document.getElementById("username");
    a.value = a.value.toUpperCase();
}

let elUsername = document.getElementById("username");
elUsername.addEventListener("keyup", transformUpperCase);