const btn = document.getElementsByClassName("btn");
const input = document.querySelector("#input");
const ol = document.getElementsByClassName("list")[0];
const listitem = document.getElementsByClassName("list-item");

const addToList = () => {
  const li = document.createElement("li");
  li.className = "list-item";
  const btn = document.createElement("button");
  btn.classList = "list-btn";
  btn.innerText = "DELETE";
  li.innerText = input.value;
  li.appendChild(btn);
  ol.appendChild(li);
};

const clrList = () => {
  ol.innerHtml = "";
};

btn[0].addEventListener("click", addToList);
btn[1].addEventListener("click", clrList);

ol.addEventListener("click", deleteItem);

function deleteItem(e) {
  const ele = e.target.closest("li");
  console.log(ele);
  ol.removeChild(ele);
}
