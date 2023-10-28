import Todolist from "./components/Todolist";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState, useEffect } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ initialTasks }) {
  console.count("Rendering APP Counter")
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(initialTasks); // does not work with localStorage

  useEffect(() => {
    console.count("APP useEffect Counter")
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  function addTask(name) {
    const updatedTasks = [...tasks, { id: "todo-" + tasks.length, name: name, completed: false }]
    setTasks(updatedTasks)
    // localStorage.setItem("tasks_not_working", JSON.stringify(tasks)) Why is this not working ?
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
  }

  return (
    <div className="todoapp stack-large">
      <h1>Ze Todo</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map((name) => (
          <FilterButton key={name} name={name} isActive={name === filter} setFilter={setFilter} />
        ))}
      </div>
      <Todolist tasks={tasks} setTasks={setTasks} filterMap={FILTER_MAP} filter={filter} />
    </div>
  );
}

export default App;
