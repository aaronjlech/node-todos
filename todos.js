const fs = require('fs');


const fetchTodos = () => {
   let todos = [];
   try {
      var todosStr = fs.readFileSync('todos-data.json');
      todos = JSON.parse(todosStr);

   } catch (e) {

   };
   return todos
}
const saveToDos = (todo) => {
   fs.writeFileSync('todos-data.json', JSON.stringify(todos))
}

module.exports = {
    saveToDos,
    fetchTodos
}