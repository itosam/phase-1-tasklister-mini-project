const form = document.getElementById("create-task-form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("hello world!")
    //target the dom node I want to change
    const tasksNode = document.getElementById('tasks');
    // 2. create
    const newTask = document.createElement('li')
    //add x buttone to the li element
    //create this button element
    const btn = document.createElement('button');
    //modified the text of the button to have an x
    btn.textContent = "X"
    //add an even listener
    //addEventListener('event', instructions on what to do when even happens)
    //addEventListener('event', call back function)
    //addEventListener('click", function() {instructions})
    //addEventListener('click, () =>
    btn.addEventListener("click", (event) =>{
        //must remove item once button is clicks
        console.log("it works!")
        //.remove?
        newTask.remove();
    })

    newTask.textContent = event.target['new-task-description'].value;
    newTask.append(btn);
    //3. insert
    tasksNode.append(newTask);
    //.append(newTask)
    
})
//event. target . [name of place you want to target] . value


//task lister- this is a important one to redo. this is very close to what will be on the code challenege
