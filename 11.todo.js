//TO DO APP
/* 1.list - to show all todos
   2.add - to add a todo
   3.delete - to delete a task
   4.quit - to exit the todo */

let todo = [];
let command =prompt("Please enter your mother fucking request");
console.log(command)

while(true){
    if(command =="quit"||command =="Quit"){
        console.log("Exiting the To Do App")
        break;
    }
    if(command =="list"||command =="List"){
        console.log("________________")
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i])
        }
        console.log("________________")
    }else if(command == "add"){
        let task = prompt("Enter your task u want to add")
        todo.push(task)
        console.log("task added successfully")
    }else if(command == "delete"){
        let task = prompt("Enter the task index you want to delete")
        todo.splice(task, 1)
        console.log("task deleted successfully")
    }
    command = prompt("Please enter your request");
}
console.log("Get started")
console.log("Get started")
