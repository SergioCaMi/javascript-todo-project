// /** TODO: Viene del inglés: "to do", es decir, una tarea que falta por hacer */
    const todoForm = document.getElementById("todo-form");
    const todoInput = todoForm.querySelector(".input");
    const todosContainer = document.getElementById("todo");

     //Anidamos eventos: los eventos anidados se crean y quedan latentes. Así consigo que el codigo quede ordenado dentro del evento que crea el nuevo item y todo lo relacionado con éste.

    document.querySelector(".button").addEventListener("click", e=>{
        e.preventDefault();
        const text = todoInput.value
        const todoItem = document.createElement("div");
        todoItem.className = "list-item";
        todoItem.innerHTML = `
            <p class="toDoText">${text}</p>
            <button class="btnDelete">Delete</button>
        `;
        todoItem.querySelector(".toDoText").addEventListener("dblclick", () => {
            todoItem.classList.toggle("completed");
        });
    
        todoItem.querySelector(".btnDelete").addEventListener("click", () => {
            todoItem.remove();
        });
    
        todosContainer.appendChild(todoItem);
        todoInput.value = "";
    });



