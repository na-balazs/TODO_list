/* const globalInfo = (() => {
  const numberOfItems = 0;
  const itemCollection = [];

  return { numberOfItems, itemCollection };
})(); */

const globalInfo = [];

const todoItem = (title, description, dueDate, priority) =>
  /* const numberOfItems = (() => {
    globalInfo.numberOfItems += 1;
  })();
  let name = ""; */
  /* const getName = (() => {
    name = `item${globalInfo.numberOfItems}`;
  })(); */
  ({
    title,
    description,
    dueDate,
    priority,
    // numberOfItems,
    // getName,
    // name,
  });

function deleteList() {
  const container = document.querySelectorAll(".list-item")
  container.forEach(div => {div.remove()})
}

function createList() {
  for (let i = 0; i < globalInfo.length; i++) {
    const mainList = document.getElementById("mainList");
    const container = document.createElement("div");
    const titleListpoint = document.createElement("div");
    const dateListpoint = document.createElement("div");

    titleListpoint.innerHTML += globalInfo[i].title;
    dateListpoint.innerHTML += globalInfo[i].dueDate;

    container.classList.add("list-item");

    container.append(titleListpoint, dateListpoint);
    mainList.append(container);
  }
}

function disableAddButton() {
  document
    .getElementById("add-listitem")
    .removeEventListener("click", addListItem);
}

function enableAddButton() {
  document
    .getElementById("add-listitem")
    .addEventListener("click", addListItem);
}

function removeForm() {
  document.getElementById("myForm").remove();
  // document.getElementById("form-buttons").remove();
}

function saveItem() {
  const title = document.getElementById("title").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;
  const description = document.getElementById("description").value;

  /* window[title] = todoItem(title, description, dueDate, priority);
  console.log(title) */
  globalInfo.push(todoItem(title, description, dueDate, priority));
  console.log(globalInfo);
  deleteList();
  createList();
}

function addFormEvents() {
  // document.getElementById("myForm").addEventListener("submit", console.log("waka"));
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    saveItem();
    removeForm();
  });
  document
    .getElementById("save-button")
    .addEventListener("click", enableAddButton);
  // document.getElementById("save-button").addEventListener("click", saveItem);
  // document.getElementById("save-button").addEventListener("click", removeForm);
  document
    .getElementById("delete-button")
    .addEventListener("click", removeForm);
  document
    .getElementById("delete-button")
    .addEventListener("click", enableAddButton);
}

function addListItem() {
  const ListItems = document.getElementById("mainList");
  const inputContainer = document.createElement("div");
  const innerContainer1 = document.createElement("div");
  const innerContainer2 = document.createElement("div");
  const formContainer = document.createElement("form");
  const buttonContainer = document.createElement("div");
  const title = document.createElement("label");
  const dueDate = document.createElement("label");
  const priority = document.createElement("label");
  const description = document.createElement("label");
  const titleInput = document.createElement("input");
  const dueDateInput = document.createElement("input");
  const priorityInput = document.createElement("select");
  const descriptionInput = document.createElement("textarea");
  const descriptionNormal = document.createElement("option");
  const descriptionHigh = document.createElement("option");
  const saveButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  formContainer.classList.add("input-form");
  formContainer.setAttribute("id", "myForm");
  buttonContainer.classList.add("form-buttons");
  buttonContainer.setAttribute("id", "form-buttons");
  saveButton.setAttribute("id", "save-button");
  deleteButton.setAttribute("id", "delete-button");

  title.innerHTML += "Title:";
  dueDate.innerHTML += "Due date:";
  priority.innerHTML += "Priority:";
  description.innerHTML += "Description:";
  saveButton.innerHTML += "save";
  deleteButton.innerHTML += "delete";
  descriptionNormal.innerHTML += "Normal";
  descriptionHigh.innerHTML += "High";

  title.setAttribute("for", "title");
  dueDate.setAttribute("for", "dueDate");
  priority.setAttribute("for", "priority");
  description.setAttribute("for", "description");
  descriptionNormal.setAttribute("value", "normal");
  descriptionHigh.setAttribute("value", "high");
  saveButton.setAttribute("type", "submit");

  titleInput.required = true;
  dueDateInput.required = true;

  Object.assign(titleInput, {
    type: "text",
    name: "title",
    id: "title",
  });

  Object.assign(dueDateInput, {
    type: "date",
    name: "dueDate",
    id: "dueDate",
  });

  Object.assign(priorityInput, {
    name: "priority",
    id: "priority",
  });

  Object.assign(descriptionInput, {
    name: "description",
    id: "description",
  });

  innerContainer1.append(title, dueDate, priority, description);
  priorityInput.append(descriptionNormal, descriptionHigh);
  innerContainer2.append(
    titleInput,
    dueDateInput,
    priorityInput,
    descriptionInput
  );

  buttonContainer.append(saveButton, deleteButton);
  inputContainer.append(innerContainer1, innerContainer2);
  formContainer.append(inputContainer, buttonContainer);

  disableAddButton();
  // saveButton.addEventListener("click", saveItem);
  /* saveButton.addEventListener("click", enableAddButton);
  saveButton.addEventListener("click", removeForm);
  deleteButton.addEventListener("click", removeForm);
  deleteButton.addEventListener("click", enableAddButton);
  formContainer.addEventListener("submit", console.log("waka")); */

  ListItems.append(formContainer);
  addFormEvents();
}

// export { todoItem, globalInfo };
export {
  todoItem,
  disableAddButton,
  enableAddButton,
  removeForm,
  addListItem,
  globalInfo,
  createList,
};
