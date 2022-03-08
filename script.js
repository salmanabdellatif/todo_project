let inp = document.querySelector(".input"); //input feild
let sub = document.querySelector(".add"); //add button
let task = document.querySelector(".tasks"); //empty div

addTask = function (event) {
  //check if input feild is empty
  let valable = false;
  if (inp.value !== "") {
    valable = true;
  }
  if (valable === false) {
    event.preventDefault();
  } else {
    creatEle();
  }
  //reset value to ""
  inp.value = "";
};
sub.onclick = addTask;

// create new element and add this element to local storage.
function creatEle() {
  let newP = document.createElement("p");
  let newbtn = document.createElement("input");
  let newdiv = document.createElement("div");
  newP.innerHTML = inp.value;
  newbtn.value = "delete";
  newbtn.type = "button";
  newP.style.display = "inline-block";
  newdiv.className = `ele - ${localStorage.length + 1}`;
  newbtn.className = `btn - ${localStorage.length + 1}`;
  newdiv.appendChild(newP);
  newdiv.appendChild(newbtn);
  task.appendChild(newdiv);
  localStorage[`ele - ${localStorage.length + 1}`] = newP.innerHTML;
}

// return elements from local storage!!

if (localStorage.length > 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let newP = document.createElement("p");
    let newbtn = document.createElement("input");
    let newdiv = document.createElement("div");
    newP.innerHTML = localStorage.getItem(`ele - ${i + 1}`);
    newbtn.value = "delete";
    newbtn.type = "button";
    newP.style.display = "inline-block";
    newdiv.className = `ele - ${i + 1}`;
    newbtn.className = `btn - ${i + 1}`;
    newdiv.appendChild(newP);
    newdiv.appendChild(newbtn);
    task.appendChild(newdiv);
  }
}
function deleteDiv() {
  localStorage.removeItem(this.className);
}

let dele = document.getElementsByClassName("btn");

for (let j = 0; j < dele.length; j++) {
  dele[j].onclick = function () {
    localStorage.removeItem(`ele - ${j + 1}`);
    console.log("item" + (j + 1));
  };
}

// let div_tasks = document.querySelector(".tasks");
// let div_input = document.querySelector(".input");

// div_input.onblur = function () {
//   window.localStorage.setItem("task", this.value);
//   div_tasks.innerHTML = window.localStorage.getItem("task");
//   let b = document.createElement("button");
//   b.style.height = "25px";
//   b.style.border = "none";
//   b.style.color = "white";
//   b.style.backgroundColor = "red";
//   b.style.borderRadius = "5px";
//   b.innerHTML = "Delete";

//   if (div_input !== "") {
//     b.onclick = function () {
//       window.localStorage.removeItem("task");
//       div_tasks.innerHTML = "";
//     };
//   } else {
//   }

//   div_tasks.appendChild(b);
// };
