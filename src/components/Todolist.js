import React from "react";
import Todo from "./Todo";

function Todolist({ tasks, setTasks, filterMap, filter }) {
    console.count("Rendering TODOLIST Counter")
    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName }
            }
            return task;
        });
        setTasks(editedTasks);
    }

    function toggleCompleteStatus(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <React.Fragment>
            <h2 id="list-heading">{tasks.length} {tasks.length !== 1 ? "tasks" : "task"} remaining</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {tasks
                    .filter(filterMap[filter])
                    .map((task) => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            key={task.id}
                            toggleCompleted={toggleCompleteStatus}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))}
            </ul>
        </React.Fragment>
    )
}

export default Todolist;