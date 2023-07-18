// Selecionar elementos
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasks");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = taskInput.value;

  if (content !== "") {
    tasksList.insertAdjacentHTML(
      "beforeend",
      `
    <li class="task">
    <p class="content">${content}</p>
    <div class="actions">
      <button class="edit-task-btn">
        <img src="./assets/pen-solid.svg" alt="edit task" />
      </button>
      <button class="complete-task-btn">
        <img src="./assets/check-solid.svg" alt="check task" />
      </button>
      <button class="delete-task-btn">
        <img src="./assets/xmark-solid.svg" alt="delete task" />
      </button>
    </div>
  </li>
    `
    );
  } else {
    alert("Não pode inserir uma tarefa vazia!");
  }
});

document.addEventListener("click", (e) => {
  const elementoSelecionado = e.target;
  const elementoPai = elementoSelecionado.closest("li");

  const editTask = elementoSelecionado
    .closest("button")
    .classList.contains("edit-task-btn");

  const completeTask = elementoSelecionado
    .closest("button")
    .classList.contains("complete-task-btn");

  const deleteTask = elementoSelecionado
    .closest("button")
    .classList.contains("delete-task-btn");

  if (editTask) {
    elementoPai.firstElementChild.setAttribute("contenteditable", "true");
    elementoPai.firstElementChild.focus();
  }

  if (completeTask) {
    elementoPai.classList.toggle("complete");
    const checked = elementoPai.getAttribute("data-task-complete");
    checked
      ? elementoPai.setAttribute("data-task-complete", "true")
      : elementoPai.setAttribute("data-task-complete", "false");
  }

  if (deleteTask) {
    elementoPai.remove();
  }
});
