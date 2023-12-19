import React from "react";

function AddToDo(props) {
  const [tododata, setTododata] = React.useState({});

  const handleChange = (e) => {
    setTododata({
      ...tododata,
      [e.target.name]: e.target.value,
    });
  };
  const buttonClicked = () => {
    props.handleAddTask(tododata);
    setTododata({ desc: "", date: "" });
  };
  return (
    <div className="row row-container">
      <div className="col-5">
        <input
          type="text"
          className="todo-holder"
          placeholder="Enter your list..."
          name="desc"
          value={tododata?.desc}
          onChange={handleChange}
        />
      </div>
      <div className="col-3">
        <input
          type="date"
          className="date-holder"
          name="date"
          value={tododata.date}
          onChange={handleChange}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success todo-btn "
          onClick={buttonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AddToDo;
