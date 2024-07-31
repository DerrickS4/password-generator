const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
     "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
     ",","|",":",";","<",">",".","?","/"];
     //interact with the DOM
let passwordGenerator = document.getElementById("password-generator")
let passwordOne= document.getElementById("password-one")
let passwordTwo= document.getElementById("password-two")
let newCharacterOne = []
let newCharacterTwo = []

function generatePassword(){

   for(let i = 0; i < 15; i++){
    let randomIndex = Math.floor(Math.random()*characters.length)
    newCharacterOne.push(characters[randomIndex])
   }
   for(let i = 0; i < 15; i++){
    let randomIndex = Math.floor(Math.random()*characters.length)
    newCharacterTwo.push(characters[randomIndex])
   }
}
function realNewPassword(){
    generatePassword()
    for(let i = 0; i < newCharacterOne.length; i++){
        passwordOne.textContent += newCharacterOne[i]
    }
    for(let i = 0; i < newCharacterTwo.length; i++){
        passwordTwo.textContent += newCharacterTwo[i]
    }
}
