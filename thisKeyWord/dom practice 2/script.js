var form = document.querySelector("form");
var inps = document.querySelectorAll("input");

form.addEventListener("submit",(evn)=>{
    evn.preventDefault() 
    for(var i=0; i<inps.length; i++){
        var h4 = document.querySelector("h4");
        if(inps[i].value ===''){
            h4.textContent = "Error, Something happeN";
            h4.style.color = "red";
            console.log(h4);
        }
    }
})