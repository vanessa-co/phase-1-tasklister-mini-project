document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputTask = document.querySelector('#new-task-description').value;
    const tasks = document.querySelector("#tasks");
    console.log(tasks);

    const newLi = document.createElement("li");

    newLi.innerHTML = inputTask;
    console.log(newLi);
    tasks.appendChild(newLi);
  });
});

 
