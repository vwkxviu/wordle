const guess = ["п", "и", "в", "о"]
const word = document.querySelector(".word");
const check = document.querySelector(".check");
check.addEventListener("click", function(){
const letters = word.value.split("");
const row = document.createElement("div");
row.classList.add("row");
    for(let i = 0; i < letters.length; i++){
        const letter = document.createElement("div");
        letter.classList.add("letter")
        row.append(letter)
        if(guess[i] == letters[i]){
            letter.style.backgroundColor = "#0f3d3a"
            letter.style.color = "#f5dabf"
            letter.textContent = letters[i];
        }else if(guess.includes(letters[i])){
            letter.style.backgroundColor = "#6c151e"
            letter.style.color = "#f5dabf"
            letter.textContent = letters[i];
        }else{
            letter.textContent = letters[i];
        }
    }
    document.body.append(row);
})