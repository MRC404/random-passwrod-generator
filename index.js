let password1 = document.getElementById("p1")
let password2 = document.getElementById("p2")
let btnGenerate = document.getElementById("btn-generate")
let btnClear = document.getElementById("btn-clear")
let lengthEl = document.getElementById("length")

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
                "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
                "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
                 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
                 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function eraseField(){
    password1.textContent = [];
    password2.textContent = [];
}

function generatePassword(){
    for(let i = 0; i < lengthEl.value; i++) {
        // password1
    let randomCharacter1 = Math.floor(Math.random()* characters.length)
    password1.textContent += characters[randomCharacter1]
            // password2
    let randomCharacter2 = Math.floor(Math.random()* characters.length)
    password2.textContent += characters[randomCharacter2]
    }
}



btnGenerate.addEventListener("click", function(){
    if(password1.textContent.length === 0 && password2.textContent.length === 0){
       generatePassword();
    }else{
        eraseField();
        generatePassword();
    }
});

btnClear.addEventListener("click", function(){
    eraseField();
})



function copy(that){

    let inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    alert("Text copied");
}