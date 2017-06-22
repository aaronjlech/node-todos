const fs = require('fs');


const fetchTodos = () => {
   let todos = {};
   try {
      var todosStr = fs.readFileSync('todos-data.json');
      allTodos = JSON.parse(todosStr);
      todos.complete = allTodos.filter(todo => todo.isComplete)
      todos.inComplete = allTodos.filter(todo => !todo.isComplete)
   } catch (e) {

   };
   return todos
}
const saveToDo = (todo) => {
   fs.writeFileSync('todos-data.json', JSON.stringify(todos))
}

module.exports = {
    saveToDo,
    fetchTodos
}