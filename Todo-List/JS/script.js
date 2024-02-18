// const Form = document.getElementById("myForm");
// const input = document.getElementById("input");
// const id = document.getElementById("text");

// const addTodo = document.getElementById("addTodo");
// const newInput = document.getElementById("newInput");
// const cancleBtn = document.getElementById("cancleBtn");
// const okBtn = document.getElementById("okBtn");

// Form.addEventListener("submit", events)

// function events(e) {
//   e.preventDefault();
//   const maindiv = document.createElement("div");
//   maindiv.classList.add("maindiv");
//   const div = document.createElement("div");
//   div.classList.add("divbtn")
//   div.innerText = input.value;
//   input.value = "";
  

//   // maindiv.append(div);
//   //   id.append(maindiv);

//   const edite = document.createElement("div");
//   edite.classList.add("btn");
//   edite.innerText = "Edite";

//   const delet = document.createElement("div");
//   delet.classList.add("btn");
//   delet.innerText = "Delete";
//   // div.append(delet);
//   maindiv.append(div, edite, delet);
//   id.append(maindiv)


//   delet.addEventListener("click", remove);

//   function remove(e) {
//     e.preventDefault();
//     maindiv.remove();
//   }

//   edite.addEventListener("click", update);
//   function update(e) {
//     e.preventDefault();
//     newInput.value = div.innerText;
//     addTodo.style.display = "inline"
//   }

//   cancleBtn.addEventListener("click", cancle);

//   function cancle(e) {
//     e.preventDefault();
//     newInput.value = "";
//     addTodo.style.display = "none"

//     okBtn.removeEventListener("click",ok);
//     cancelBtn.removeEventListener("click",cancle);
//   }

//   okBtn.addEventListener("click",ok);

//   function ok(e) {
//     e.preventDefault();
//     const newText = newInput.value.trim();
//       if (newText !== "") {
//         div.innerText = newText;
//     addTodo.style.display = "none"

//     okBtn.removeEventListener("click",ok);
//         cancelBtn.removeEventListener("click",cancle);

//     // newInput.value = div.innerText;
//       }
//   }

//   input.addEventListener("click",removeTodoFormInInput);

// function removeTodoFormInInput(){
//   addTodo.style.display = "none" 
// }
// }

const Form = document.getElementById("myForm");
const input = document.getElementById("input");
const id = document.getElementById("text");

const addTodo = document.getElementById("addTodo");
const newInput = document.getElementById("newInput");
const cancelBtn = document.getElementById("cancleBtn");
const okBtn = document.getElementById("okBtn");

Form.addEventListener("submit", events);

function events(e) {
  e.preventDefault();
  const maindiv = document.createElement("div");
  maindiv.classList.add("maindiv");
  const div = document.createElement("div");
  div.classList.add("divbtn");
  div.innerText = input.value;
  input.value = "";

  const edite = document.createElement("div");
  edite.classList.add("btn");
  edite.innerText = "Edit";

  const delet = document.createElement("div");
  delet.classList.add("btn");
  delet.innerText = "Delete";

  maindiv.append(div, edite, delet);
  id.append(maindiv);

  delet.addEventListener("click", remove);
  edite.addEventListener("click", update);

  function remove(e) {
    e.preventDefault();
    maindiv.remove();
  }

  function update(e) {
    e.preventDefault();
    newInput.value = div.innerText;
    addTodo.style.display = "inline";
    
    okBtn.addEventListener("click", updateTodo);
    cancelBtn.addEventListener("click", cancelUpdate);
  }

  function cancelUpdate(e) {
    e.preventDefault();
    addTodo.style.display = "none"
    okBtn.removeEventListener("click", updateTodo);
    cancelBtn.removeEventListener("click", cancelUpdate);
  }

  function updateTodo(e) {
    e.preventDefault();
    const newText = newInput.value.trim();
    if (newText !== "") {
      div.innerText = newText;
      addTodo.style.display = "none";

      okBtn.removeEventListener("click", updateTodo);
      cancelBtn.removeEventListener("click", cancelUpdate);
    }
  }
}


