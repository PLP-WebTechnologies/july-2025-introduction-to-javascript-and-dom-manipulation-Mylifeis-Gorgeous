let userName = prompt("What's your name?");
let userAge = prompt("How old are you?");

userAge = Number(userAge);

if (userAge >= 18) {
    console.log(`Welcome, ${userName}! You are allowed to enter.`);
    document.getElementById("output").textContent = `Welcome, ${userName}! You're ${userAge} 's old.`;
} else {
    console.log(`Sorry, ${userName}. You're not old enough.`);
    document.getElementById("output").textContent = `Sorry, ${userName}. Come back when you're older.`;
}

document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("output").textContent = "You clicked the button!";
});


document.getElementById("addItemBtn").addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = "New List Item";
    document.getElementById("myList").appendChild(li);
});
