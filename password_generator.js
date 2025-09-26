const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&-*=?";

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generate);

const result = document.getElementById("result");
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyPassword);


function generate(){
    let characters = "";
    if (document.getElementById("lowercase-option").checked){
        characters += lowercase;  
    } if (document.getElementById("uppercase-option").checked){
        characters += uppercase;
    } if (document.getElementById("number-option").checked){
        characters += numbers;
    }  if (document.getElementById("special-option").checked){
        characters += special;
    }

    if(characters!= ""){
        const length = Number(document.getElementById("password-length").value);
        let password = "";
        for(let i=0; i<length; i++){
            const index = Math.floor(Math.random() * characters.length);
            password += characters[index];
        }
        result.value = password;
    
    }

}

function copyPassword(){
    const text = result;

    text.select();
    text.setSelectionRange(0, text.value.length);

    navigator.clipboard.writeText(text.value);
    alert("Password Copied: " + text.value);

}

