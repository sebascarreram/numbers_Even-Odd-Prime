const body = document.querySelector("body");
body.style.textAlign = "center";

const header = document.createElement("div");

const titleName = document.createElement("h1");
titleName.className = "title";
titleName.textContent = "Even, Odd and Prime numbers";
titleName.style.fontSize = "3rem";

// Input, Button & message warning
const groupButton = document.createElement("div");
groupButton.style.margin = "1rem 0";

const input = document.createElement("input");
input.style.width = "100%";
input.style.maxWidth = "25rem";
input.style.padding = "0.5rem";
input.style.fontSize = "1rem";
input.style.outline = "none";
input.style.border = "2px solid transparent";
input.style.borderRadius = "0.4rem";
input.placeholder = "Generate more numbers...";

const buttonGene = document.createElement("button");
buttonGene.setAttribute("class", "button");
buttonGene.textContent = "Generate numbers";
buttonGene.style.background = "#2ecc71";
buttonGene.style.border = "2px solid transparent";
buttonGene.style.color = "#ecf0f1";
buttonGene.style.padding = "0.5rem";
buttonGene.style.marginLeft = "1rem";
buttonGene.style.fontSize = "1rem";
buttonGene.style.cursor = "pointer";
buttonGene.style.borderRadius = "0.4rem";

// background:hover
buttonGene.addEventListener(
  "mouseenter",
  () => (buttonGene.style.background = "#27ae60")
);
buttonGene.addEventListener(
  "mouseleave",
  () => (buttonGene.style.background = "#2ecc71")
);

const messageWarning = document.createElement("p");
``;
messageWarning.style.marginBottom = "0.5rem";
messageWarning.style.fontSize = "1rem";
messageWarning.style.fontWeight = "800";
messageWarning.style.color = "#c0392b";

groupButton.appendChild(messageWarning);

// Numbers group
const div = document.createElement("div");
div.style.width = "100%";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.marginTop = "1rem";

let ul = document.createElement("ul");
ul.style.width = "100%";
ul.style.maxWidth = "51.7rem";
ul.style.listStyleType = "none";

ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.justifyContent = "center";

// Prime numbers
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// li tag 
let li;

// Numbers
const numbers = (nbr) => {
  for (let a = 0; a < nbr; a++) {
    // element li
    li = document.createElement("li");
    li.setAttribute("id", "number");
    li.style.color = "#ecf0f1";
    li.style.fontWeight = "700";
    li.style.fontSize = "2rem";
    li.style.width = "8rem";
    li.style.height = "8rem";
    li.style.padding = "1rem";
    li.style.borderRadius = "1rem";
    li.style.margin = "0.3rem";
    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.textContent = a;

    if (a === 0) {
      li.style.background = "#34495e";
      li.style.color = "red";
    }
    // 1 => Odd number
    if (a === 1) {
      li.style.background = "#f1c40f";
    }
    // 2 => Even number
    if (a === 2) {
      li.style.background = "rgb(46,204,113)";
      li.style.background =
        "linear-gradient(225deg, rgba(46,204,113,1) 50%, rgba(231,76,60,1) 50%)";
    }

    if (a >= 3) {
      // Green => Even number
      if (a % 2 === 0) {
        li.style.background = "#2ecc71";
      } else {
        // Yellow => Odd number
        li.style.background = "#f1c40f";
      }
      // Red => Prime number
      if (isPrime(a)) {
        li.style.background = "rgb(241,196,15)";
        li.style.background =
          "linear-gradient(225deg, rgba(241,196,15,1) 50%, rgba(231,76,60,1) 50%)";
      }
    }
    // ul > li
    ul.appendChild(li);
  }
};

// div > ul > li
div.appendChild(ul);

function checkInput() {
  const regex = /\b(\d+)\b/;

  // Only until 300 or less
  if (!(input.value <= 300)) {
    messageWarning.textContent = `${input.value}?...Try any number less than or equal to 300.`;
  }

  // Only number AND 300 or less
  if (regex.test(input.value) && input.value <= 300) {
    // remove lists
    ul.innerHTML = "";
    // remove warning
    messageWarning.textContent = "";
    // Update list
    numbers(input.value);
  }

  // check if input is a number or not
  if (!regex.test(input.value)) {
    messageWarning.textContent = "Input value must be a number";
  }

  // Check if input is empty or not
  if (!input.value) {
    messageWarning.textContent =
      "Enter number value on the input field to generate numbers";
  }
}

// Button
buttonGene.addEventListener("click", checkInput);
input.addEventListener("keyup", (e) =>
  e.keyCode === 13 ? checkInput() : null
);

// auto
numbers(12);

header.appendChild(titleName);

// p tag
let pOne;

// Array
const txt = [
  "Even numbers background is green",
  "Odd numbers background is yellow",
  "Prime numbers background is red",
];

for (let a = 0; a < 3; a++) {
  pOne = document.createElement("p");
  pOne.setAttribute("class", "paragraph");
  pOne.style.fontSize = "1.4rem";
  if (a == 0) {
    pOne.style.marginTop = "2rem";
  }
  if (a < 2) {
    pOne.style.marginBottom = "0.3rem";
  }
  pOne.textContent = txt[a];
  header.appendChild(pOne);
}

groupButton.appendChild(input);
groupButton.appendChild(buttonGene);

document.body.appendChild(header);
document.body.appendChild(groupButton);
document.body.appendChild(div);
