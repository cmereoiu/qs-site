"use strict";




const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

document.getElementById("link1").addEventListener("click", loadZitat);
function loadZitat(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "zitat1.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const zitat = JSON.parse(this.responseText);
      const output = ` 
        <p> ${zitat.author} </p>
        <p> ${zitat.zitat} </p>

      
      `;
      document.getElementById("author").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("link2").addEventListener("click", loadZitat2);
function loadZitat2(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "zitat2.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const zitat = JSON.parse(this.responseText);
      const output2 = ` 
        <p> ${zitat.author} </p>
        <p> ${zitat.zitat} </p>

      
      `;
      document.getElementById("author").innerHTML = output2;
    }
  };

  xhr.send();
}

document.getElementById("link3").addEventListener("click", loadZitat3);
function loadZitat3(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "zitat3.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const zitat = JSON.parse(this.responseText);
      const output3 = ` 
        <p> ${zitat.author} </p>
        <p> ${zitat.zitat} </p>

      
      `;
      document.getElementById("author").innerHTML = output3;
    }
  };

  xhr.send();
}

document.getElementById("link4").addEventListener("click", loadZitat4);
function loadZitat4(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "zitat4.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const zitat = JSON.parse(this.responseText);
      const output4 = ` 
        <p> ${zitat.author} </p>
        <p> ${zitat.zitat} </p>

      
      `;
      document.getElementById("author").innerHTML = output4;
    }
  };

  xhr.send();
}
