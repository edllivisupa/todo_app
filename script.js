//  //adds to localStorage
//  savedToDos.push({ task : newToDo.innerText, isDone : false });
//  localStorage.setItem("todos", JSON.stringify(savedTodos));


//retrieve from localStorage
// const savedToDos = JSON.parse(localStorage.getItem("toDoList")) || [];

// for (todo of ToDoList) {
//     let newToDo = document.createElement("li");
//     newToDo.innerText = savedTodos[todo].task;
//     newTodo.isDone = savedTodos[i].isCompleted ? true : false;
//   if (newTodo.isDone) {
//     newTodo.style.textDecoration = "line-through";
//   }
//   todoList.appendChild(newTodo);
// }

// const list = [];
// //example of todo list item
// const entryOne = { task : 'task' , isCompleted :  false };
// list.push(entryOne);
// localStorage.setItem("todoList" , JSON.stringify(list));
//task, completion status

//object for tasks list
// let tasksListObject = { 
//     tasksList : tasksList,
//     isCompleted : false };

//OMAR NOTES
//load localStorage
//render all items from localStorage
//when an items is deleted from array, also needs to be deleted from localStorage



const form = document.querySelector("form");
const toDoList = document.querySelector("#tasks-list");
const localStorageGetTest = document.querySelector("#local-storage-content");

// const toDoList
// localStorage.setItem("savedToDoList", JSON.stringify(tasksList));
// const retrievedData = localStorage.getItem("savedToDoList");
// const toDoList2 = JSON.parse(retrievedData);
// console.log(retrievedData);

let toDoList2 = "";


//declare array varaible to store tasks
//const tasksList = [];
//THIS WORKS BUT RESETS THE ARRAY EVERYTIME THE PAGE REFRESHES, NEEDS A LOOP OR FUNCTION TO INCLUDE LOCALSTORAGE
const tasksList = localStorage.getItem("savedToDoList") || [];

// //RETRIEVEING LOCAL STORAGE
// for (todos of tasksList) {
//     const newToDo = document.createElement("li");
//     newToDo.innerText = tasksList[todos];
    
    
//     const newDoneButton = document.createElement("button");
//     const newDeleteButton = document.createElement("button");

//     //const retrievedData = localStorage.getItem("savedToDoList");
//     //newToDo.innerText = JSON.parse(retrievedData);
    
//     //toDoList2 = JSON.parse(retrievedData);
    
//     newDoneButton.innerText = "Done";
//     newDeleteButton.innerText = "Delete";

//     newDeleteButton.addEventListener("click", function(event) {
//         event.target.parentElement.remove();
//     });

//     newDoneButton.addEventListener("click", function(event) {
//         event.target.parentElement.style.textDecoration = "line-through";
//     });

//     newToDo.append(newDoneButton);
//     newToDo.append(newDeleteButton);
//     toDoList.append(newToDo);

//     //console.log(toDoList2);
// }



//listener event when 'Add' submit button is clicked
form.addEventListener("submit", function(event) {
    //must prevent form from exeucting default action
    event.preventDefault();
    const newToDoInput = document.querySelector('input[name="new-task"]');
    
    const newToDo = document.createElement("li");
    const newDoneButton = document.createElement("button");
    const newDeleteButton = document.createElement("button");

    newToDo.innerText = newToDoInput.value;
    newDoneButton.innerText = "Done";
    newDeleteButton.innerText = "Delete";



    //LOCAL STORAGE TEST, needs to go before the form clears

    // variable to store added tasks
    storedTask = newToDoInput.value;

    // FOR TESTING //
    console.log(storedTask);

    // the task is pushed to storedTask array
    tasksList.push(storedTask);

    // FOR TESTING //
    console.log(tasksList);
  
    // is it better to store as a variable or add directly to stored task array?
    //tasksList.push(newToDoInput.value);
    
    // adds to local storage
    localStorage.setItem( "savedToDoList" , JSON.stringify(tasksList));

    // FOR TESTING //
    console.log(localStorage);
    
    //listener event when 'Delete' is clicked
    //removes parent element
    //must use event delegation to ensure all to-dos are deleted
    newDeleteButton.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });
    
    //listener event when 'Done' button is clicked
    //change text style to strikethrough
    newDoneButton.addEventListener("click", function(event) {
        event.target.parentElement.style.textDecoration = "line-through";
    });

    //appends the new to-do to the top of the list
    newToDo.append(newDoneButton);
    newToDo.append(newDeleteButton);
    toDoList.append(newToDo);
    form.reset();

    
    
})  

// FOR TESTING
console.log(localStorage);
console.log(tasksList);