const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content.";
container.appendChild(content);

const redP = document.createElement("p");
redP.textContent = "Hey I'm Red!";
redP.setAttribute("style", "color:red");
container.appendChild(redP);

const blueTitle = document.createElement("h3");
blueTitle.textContent = "I'm a Blue h3.";
blueTitle.setAttribute("style", "color:blue");
container.appendChild(blueTitle);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "background:pink; border:solid 5px black;");
const anotherH1 = document.createElement("h1");
anotherH1.textContent = "I'm in a div.";
const meTooP = document.createElement("p");
meTooP.textContent = "ME TOO.";
pinkDiv.appendChild(anotherH1);
pinkDiv.appendChild(meTooP);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector("#btn-1");
btn.addEventListener("click", () => {
  alert("Hello World");
});
