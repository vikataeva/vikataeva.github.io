
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
    const box = document.getElementsByClassName("text-box")[0]; // gets the first element with that class
    box.style.backgroundColor = "hotpink";
    box.style.color = "white";
}

function changeImage() 
{
    document.getElementById("catdog").src = "https://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg";
}

function showAlert() 
{
    alert("More projects coming soon!");    
  }

  let count = 0; 

  function buttonCounter() {
    count = count + 1;
    const counterParagraph = document.getElementById('counter');
    counterParagraph.innerHTML = 'You\'ve clicked ' + count + ' times.';
    if (count % 2 == 0) {
      counterParagraph.style.color = "blue"; // Even
    } else {
      counterParagraph.style.color = "green"; // Odd
    }
  }
  document.getElementById('buttonCounter').onclick = buttonCounter;