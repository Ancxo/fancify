alert("Hello, world!");

function makeBig(){ 
    text.style.fontSize="24pt"; 
    alert("Text made bigger!");
} 


function fancify(){
	if(document.getElementById("Fancy").checked) {
        text.style.fontWeight="bold";
        text.style.color="blue"; 
        text.style.textDecoration="underline" 
        alert("Text style changed!"); 
    }
}

function boringify(){
    if(document.getElementById("Boring").checked) {
        text.style.fontWeight="normal";
        text.style.color="black"; 
        text.style.textDecoration="none" 
        alert("Text style changes removed!");
    }
}

function makeMoo(){ 
    text.style.textTransform="uppercase"
    var str = text.value;
    var parts = str.split(".")
    str = parts.join("-Moo");
    text.value=str; 
 }	