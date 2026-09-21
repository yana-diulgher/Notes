const titles = document.querySelectorAll(".title");
titles.forEach (title => {
  title.addEventListener("input", () => {
    title.style.height = "auto"; // сброс высоты
    title.style.height = title.scrollHeight + "px"; // новая высота по содержимому
  });
})
  

const notes = document.querySelectorAll(".note");
notes.forEach( note =>{
  note.addEventListener("input", () => {
    note.style.height = "auto"; // сброс высоты
    note.style.height = note.scrollHeight + "px"; // новая высота по содержимому
  
  });
})
  

const first = document.getElementById("first");
const second = document.getElementById("second");

first.addEventListener("click", () =>{
    first.style.display = "none";
    second.style.display = "block";

})

const note = document.getElementById("note");
const title = document.getElementById("title");
const btn = document.getElementById("btn");
const innerNote = document.getElementById("innerNote");
const innerTitle = document.getElementById("innerTitle");
innerTitle.value = localStorage.getItem("innerTitle") || "";
innerNote.value = localStorage.getItem("innerNote") || "";


btn.addEventListener("click",()=>{
  const newCard = document.createElement("div");
  newCard.className = "box";
  newCard.innerHTML = `
    <textarea class="title" id="innerTitle"></textarea>
    <textarea class="note" id="innerNode"></textarea>
    <button class="btnns">OK</button>
  `;
  document.querySelector("main").appendChild(newCard);

  localStorage.setItem("innerTitle", title.value);
  innerTitle.textContent = title.value;
  localStorage.setItem("innerNote", note.value);
  innerNote.textContent = note.value;
  second.style.display="none";
  first.style.display="block";
  
})

const btnn = document.getElementById("btnn");

btnn.addEventListener("click", () =>{
  localStorage.setItem("innerTitle", innerTitle.value);
  innerTitle.textContent = innerTitle.value;
  localStorage.setItem("innerNote", innerNote.value);
  innerNote.textContent = innerNote.value;
})

