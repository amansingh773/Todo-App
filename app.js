const input = document.getElementById("title");
const description = document.getElementById("description");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const inputVal = input.value.trim();
  const desVal = description.value.trim();

  if (inputVal === "" || desVal === "") {
    alert("Please enter both title and description");
    return;
  }

  let div = document.createElement("div");
  div.className = "task";

  let contentDiv = document.createElement("div");
  contentDiv.className = "task-content";

  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let delbtn = document.createElement("button");

  h4.innerText = inputVal;
  p.innerText = desVal;
  delbtn.innerText = "Delete";
  delbtn.className = "delete-btn";

  // ❌ Delete task on click
  delbtn.addEventListener("click", () => {
    div.remove();
  });

  contentDiv.append(h4, p);
  div.append(contentDiv, delbtn);
  container.appendChild(div);

  // Clear inputs
  input.value = "";
  description.value = "";
});
