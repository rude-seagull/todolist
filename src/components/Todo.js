function Todo({ name, completed, id, toggleCompleted, deleteTask }) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleCompleted(id)}/>
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
    );
}

export default Todo;