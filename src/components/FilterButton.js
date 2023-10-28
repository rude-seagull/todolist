function FilterButton({ name, isActive, setFilter }) {
  console.count("Rendering FILTERBUTTON Counter")
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={isActive}
      onClick={() => setFilter(name)}>
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;