const keycode = document.getElementById("keycode");
const keyname = document.getElementById("keyname");
const keycodedetail = document.getElementById("keycodedetail");
const keynamedetail = document.getElementById("keynamedetail");

document.addEventListener("keydown", (e) => {
    console.log(e);
    keycode.innerText = e.keyCode;
    keyname.innerText = e.key;
    keycodedetail.innerText = e.keyCode;
    keynamedetail.innerText = e.key;
});