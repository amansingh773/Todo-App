const input = document.getElementById("title");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

// Reusable function to add task
function addTask() {
  const inpVal = input.value.trim();
  if (inpVal === "") {
    alert("Please Enter Your Task");
    return;
  }

  // Create elements
  const h3 = document.createElement("h3");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const textContainer = document.createElement("div");
  const actions = document.createElement("div"); // wrapper for buttons

  // Classes for styling
  textContainer.classList.add("textContainer");
  delBtn.classList.add("del-btn");
  editBtn.classList.add("edit-btn");
  actions.classList.add("actions");

  // Set text
  h3.innerText = inpVal;
  delBtn.innerText = "Delete Task";
  editBtn.innerText = "Edit Task";

  // Append buttons inside actions wrapper
  actions.append(delBtn, editBtn);

  // Append text + actions to task card
  textContainer.append(h3, actions);

  // Add to container
  container.append(textContainer);
  container.scrollTop = container.scrollHeight; // auto-scroll

  // Delete task
  delBtn.addEventListener("click", () => {
    textContainer.remove();
  });

  // Edit task (simple prompt)
  editBtn.addEventListener("click", () => {
    const newVal = prompt("Edit your task:", h3.innerText);
    if (newVal !== null && newVal.trim() !== "") {
      h3.innerText = newVal.trim();
    }
  });

  // Clear input
  input.value = "";
}

// Button click
btn.addEventListener("click", addTask);

// Enter key listener on input
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});