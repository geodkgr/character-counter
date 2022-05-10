const btn = document.querySelector("button");
const span = document.querySelector("#span");

btn.addEventListener("click", myFunc);

function myFunc() {
    var x = document.querySelector("input").value;
    let count = x.length;
    span.innerHTML = count;
}