import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

function App({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(name) {
    setTasks([...tasks, { id: "todo-" + tasks.length, name: name, completed: false }])
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
      </div>
      <h2 id="list-heading">{tasks.length} {tasks.length !== 1 ? "tasks" : "task"} remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {tasks.map((task) => (
          <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} toggleCompleted={completeTask} deleteTask={deleteTask}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
