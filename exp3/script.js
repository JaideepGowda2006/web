function add(){
  let text = task.value;

  let li = document.createElement("li");
  li.innerText = text;

  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  list.appendChild(li);
}
