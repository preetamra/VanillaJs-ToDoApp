const btn = document.getElementsByClassName("btn");
const input = document.querySelector("#input");
const ol = document.getElementsByClassName("list");
const listitem = document.getElementsByClassName("list-item");

let i = 2;

const addToList = () => {
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = `${input.value} <button class="btn"/> DELETE </button>`;
  ol[0].appendChild(li);
  btn[i].addEventListener("click", deleteItem.bind(this, listitem[i - 2]));
  console.log(btn[i], listitem[i - 2]);
  i++;
};

const clrList = () => {
  for (const el of listitem) {
    ol.removeChild(el);
  }
};

btn[0].addEventListener("click", addToList);
btn[1].addEventListener("click", clrList);

function deleteItem(ele) {
  console.log(ele);
  ol[0].removeChild(ele);
}
