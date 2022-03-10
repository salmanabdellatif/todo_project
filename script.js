let inputFieldEle = document.querySelector(".inputField"); //input feild
let addingBtn = document.querySelector(".addingBtn"); //adding button
let taskContainer = document.querySelector(".taskContainer"); //empty container

addingBtn.addEventListener("click", addingTask);

function addingTask(event) {
  //check if input feild is empty
  let available = false;
  if (!inputFieldEle.value) available = true;
  if (!!available) event.preventDefault();
  else createSetEle(inputFieldEle.value);
  //reset value
  inputFieldEle.value = "";
}

// create new element and add this element to local storage.
function createSetEle() {
  creatEle(inputFieldEle.value);
  setData();
}

function creatEle(Value) {
  let newP = document.createElement("p");
  let newBtn = document.createElement("button");
  let newDiv = document.createElement("div");
  newP.innerHTML = Value;
  newBtn.value = "delete";
  newBtn.type = "submit";
  newBtn.innerText = "delete";
  newP.style.display = "inline-block";
  newDiv.className = "ele";
  newBtn.className = "btn";
  newDiv.appendChild(newP);
  newDiv.appendChild(newBtn);
  taskContainer.appendChild(newDiv);
}

//set elements after creating into storage.
function setData() {
  tasksArray = JSON.parse(localStorage.getItem("dataObj") || "[]");
  tasksArray.push(inputFieldEle.value);
  localStorage.setItem("dataObj", JSON.stringify(tasksArray));
}

function retuenEle() {
  arrayLength = JSON.parse(localStorage.getItem("dataObj")).length;
  if (arrayLength > 0) {
    for (let i = 0; i < arrayLength; i++) {
      creatEle(JSON.parse(localStorage.dataObj)[i]);
    }
  }
}

//delete dev element and remove data from storage.
document.addEventListener("click", function (e) {
  if (e.target.className === "btn") {
    //remove the dev parent element.
    e.target.parentElement.remove();
    //get task data array
    tasksArray = JSON.parse(localStorage.dataObj);
    //get text data of the paragraph ele .
    pData = e.target.previousElementSibling.innerText;
    index = tasksArray.indexOf(pData);
    tasksArray.splice(index, 1);
    localStorage.dataObj = JSON.stringify(tasksArray);
  }
});

// return elements from local storage!!
window.addEventListener("load", retuenEle());
