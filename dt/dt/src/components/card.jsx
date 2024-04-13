import React, { useState } from "react";

function Card({ tasks, array, dltFun, completeTFun, color }) {
  const [deletedValue, setDeletedValue] = useState("");
  const deleteNode = () => {
    let tasks = tasks.filter((task) => task.taskName !== deletedValue);
  };

  return (
    <div>
      {array.map((task) => (
        <div className="list-group mt-2" key={task.taskName}>
          <a
            href="#"
            className={`list-group-item list-group-item-action list-group-item-${color}`}
            key={task.taskName}
          >
            <div className="mt-2">
              Task : {task.taskName}{" "}
              <span className="mx-5 text-secondary">
                Category : {task.taskCategory}
              </span>
            </div>
            <button
              className="btn btn-light mx-5 my-3"
              onClick={
                task.status === "notCompleted"
                  ? () => completeTFun(task.taskName, "completed")
                  : () => completeTFun(task.taskName, "notCompleted")
              }
            >
              {task.status === "notCompleted" ? "Completed" : "Move To Pending"}
            </button>
            <button
              className="btn btn-light"
              onClick={() => dltFun(task.taskName)}
            >
              Delete
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Card;
