import Todolist from "./components/Todolist";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ initialTasks }) {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(name) {
    setTasks([...tasks, { id: "todo-" + tasks.length, name: name, completed: false }])
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
