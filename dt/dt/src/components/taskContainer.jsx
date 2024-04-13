import React, { useState } from "react";
import Card from "./card";

const TaskContainer = ({ tasks, array, dltFun, completeTFun }) => {
  // const [completedTasks , setCompletedTasks] = useState()
  // const [pendingTasks, setPendingTasks] = useState()

  // making the pending tasks
  const completedTasks = array.filter((tasks) => {
    return tasks.status === "completed";
  });

  const pendingTasks = array.filter((tasks) => {
    return tasks.status !== "completed";
  });
  // making the completed tasks

  return (
    <div className="mt-4 mb-5">
      <h1
        className="display-1 fs-1 py-2 text-center"
        style={{ backgroundColor: "#F6FFEC" }}
      >
        {" "}
        Task List
      </h1>

      <div className="container mt-3">
        <div className="row">
          {/* Pending Tasks  */}
          <div className="col">
            {" "}
            <h2 className="display-1 fs-2 text-center mb-2   py-2">
              {" "}
              Pending Task
            </h2>
            <Card
              tasks={tasks}
              array={pendingTasks}
              dltFun={dltFun}
              completeTFun={completeTFun}
              color="success"
            />
          </div>

          <div className="col">
            {/* completed Tasks  array */}
            <h2 className="display-1 fs-2 text-center  py-2 mb-2">
              {" "}
              Completed Task
            </h2>
            <Card
              tasks={tasks}
              array={completedTasks}
              dltFun={dltFun}
              completeTFun={completeTFun}
              color="danger"
            />
          </div>
        </div>
      </div>
    </div>

    // here will be the map of all the tasks that you have created
  );
};

export default TaskContainer;
