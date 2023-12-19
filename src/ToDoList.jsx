import { useState } from "react";

function ToDoList(props) {
  return (
    <div>
      {props.addItem?.map((item) => {
        return (<>
          <div className="row row-container">
            <div className="col-5">
                {item?.desc}
                </div>
            <div className="col-3">{item?.date}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger todo-btn" onClick={()=>props.handleDeleteTask(item?.id)}>
                Delete
              </button>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
}
export default ToDoList;
