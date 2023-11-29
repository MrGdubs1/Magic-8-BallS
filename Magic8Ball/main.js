//ADD EVENT LISTENER
document
  .getElementById("magic8ball")
  .addEventListener("click", magic8ballClicked);

//GET OUTPUT ELEMENT
let out = document.getElementById("output");

function magic8ballClicked() {
  let answer = document.getElementById("search-in").value.toLowerCase();

  //Generate a random answer
  let randNum = Math.random();

  if (randNum < 0.15) {
    out.innerHTML = "Answer: Without a doubt";
    out.style.color = "green";
  } else if (randNum < 0.4) {
    out.innerHTML = "Answer: As I see it, yes";
    out.style.color = "green";
  } else if (randNum < 0.6) {
    out.innerHTML = "Answer: Concentrate and ask again";
  } else if (randNum < 0.8) {
    out.innerHTML = "Answer: Don't count on it";
    out.style.color = "red";
  } else if (randNum < 0.9) {
    out.innerHTML = "Answer: Outlook not so good";
    out.style.color = "red";
  }

  //Specific responses for specific questions
  if (answer === "does a magic 8 ball actually work?") {
    out.innerHTML = "Answer: How dare you doubt me!";
    out.style.color = "red";
  } else if (answer === "") {
    out.innerHTML = "Please ask a question...";
    out.style.color = "red";
  } else if (answer === "is javascript awesome?") {
    out.innerHTML = "Answer: Of Course!";
    out.style.color = "green";
  }
}
