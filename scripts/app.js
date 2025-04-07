    const todoForm = document.getElementById("todo-form");
    const actionsForm = document.querySelector(".actions__container");
    const todoInput = todoForm.querySelector(".input");
    const todosContainer = document.getElementById("todo");
    const checkHide = actionsForm.querySelector(".checkbox");

     //Anidamos eventos: los eventos anidados se crean y quedan latentes. Así consigo que el codigo quede ordenado dentro del evento que crea el nuevo item y todo lo relacionado con éste.

     //Hasta que no entremos en el evento del botón, el resto de eventos no existen (no están creados).

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
    
        checkHide.addEventListener("change", ()=>{
            const itemsCompleted = todoItem.querySelectorAll(".toDoText");
            for (let item of itemsCompleted){
                if (item.parentNode.classList.contains("completed")){
                    item.parentNode.classList.toggle("list-item__hide");
                }
            } 
        });
        todosContainer.appendChild(todoItem);
        todoInput.value = "";
    });



