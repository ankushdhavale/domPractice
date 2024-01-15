const title = document.querySelector("#input1");
const description = document.querySelector("#input2");
const btn = document.querySelector("button");
const subParent = document.querySelector("#todos")

btn.addEventListener("click" , ()=>{
    const parent = document.createElement("div");
    const child = document.createElement("div");
    child.innerHTML = title.value;
    const subChild = document.createElement("div");
    subChild.innerHTML = description.value;
    parent.appendChild(child);
    parent.appendChild(subChild);
    subParent.appendChild(parent);
})
