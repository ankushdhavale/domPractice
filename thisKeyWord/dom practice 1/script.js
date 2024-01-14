const imgone = document.querySelector("#oneimage");
const imgtwo = document.querySelector("#twoimage");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    var srcone = imgone.src;
    var srctwo = imgtwo.src;
    imgone.src = srctwo;
    imgtwo.src = srcone;
})