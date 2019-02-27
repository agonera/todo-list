let submitButton = document.querySelector("button");
let todoList = document.querySelector("ul");

// add new task
submitButton.addEventListener("click", function () {
    let newTodo = document.querySelector("input").value;
    if (newTodo) {

        // create new task element
        let node = document.createElement("li");
        let textNode = document.createTextNode(newTodo);
        node.appendChild(textNode);

        // append task to the list
        todoList.appendChild(node);

        // clear input
        document.querySelector("input").value = "";
    }
});

// complete task
todoList.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }

});
