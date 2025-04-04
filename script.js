
function showMessage() {
    let name = "John Doe";
    let age = 30;
    let message = `Hello, ${name}! Your age is ${age}! Welcome to our website.`;
    alert(message);
}

function checkAge() {
    let age = 30;
    if (age >= 18) {
        alert("You are an adult.");
    } else {
        alert("You are a minor.");
    }
}

function showMany()
{
    for(let i = 1;i <= 10; i=i+1) 
    {
     alert("Don't forget to check your email! You have " + i + " new messages.");
    }
}

function changeColor() 
{
    document.getElementById("main").style.backgroundColor = "blue";
    element.style.color = "red";
}

function changeImage() 
{
    document.getElementById("catdog").src = "https://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg";
}