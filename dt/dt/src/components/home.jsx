import React, { useCallback, useState } from "react";
import Navbar from "./navbar";
import TaskContainer from "./taskContainer";
import _debounce from "lodash/debounce";

function Home() {
  const [taskData, setTaskData] = useState("");
  const taskCollection = [];
  const [taskDataSub, setTaskDataSub] = useState([]);

  const hc = (e) => {
    e.preventDefault();
    setTaskData({
      ...taskData,
      [e.target.id]: e.target.value,
    });
  };

  // const hc = _debounce((e) => {
  //     e.preventDefault();
  //     setTaskData({
  //       ...taskData,
  //       [e.target.id]: e.target.value,
  //     }),500);

  const handleChange = _debounce(hc, 1000);

  // const handleChange= useCallback(()=>{
  //      _debounce(
  //         hc,500);
  // },[])

  const addTask = (e) => {
    e.preventDefault();
    console.log("task data is : ", taskData);
    taskCollection.push(taskData);
    setTaskDataSub([
      ...taskDataSub,

      {
        taskName: taskData.taskName,
        taskCategory: taskData.taskCategory,
        status: "notCompleted",
      },
    ]);
    console.log("The value is : ", taskDataSub);
  };

  const deleteTask = (dltTaskName) => {
    setTaskDataSub(
      taskDataSub.filter((dataTodo) => {
        return dataTodo.taskName !== dltTaskName;
      })
    );
  };

  const completeTask = (taskName, status) => {
    // setting the task with the completed to true
    setTaskDataSub(
      taskDataSub.map((task) => {
        if (task.taskName === taskName) {
          return { ...task, ["status"]: status };
        } else {
          return task;
        }
      })
    );

    console.log(taskDataSub);
  };

  return (
    // <>
    //   <form
    //     // action="#"
    //     // method="post"
    //     style={{
    //       marginTop: "5%",
    //       maxWidth: 400,
    //       margin: "0 auto",
    //       padding: 20,
    //       backgroundColor: "#f4f4f4",
    //       borderRadius: 10,
    //       boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    //     }}
    //   >
    //     <h2 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>
    //       To Do
    //     </h2>
    //     <div style={{ marginBottom: 15 }}>
    //       <label
    //         htmlFor="name"
    //         style={{
    //           display: "block",
    //           fontSize: 16,
    //           marginBottom: 5,
    //           color: "#555",
    //         }}
    //       >
    //         Your Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         style={{
    //           width: "100%",
    //           padding: 10,
    //           borderRadius: 5,
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //     </div>
    //     <div style={{ marginBottom: 15 }}>
    //       <label
    //         htmlFor="email"
    //         style={{
    //           display: "block",
    //           fontSize: 16,
    //           marginBottom: 5,
    //           color: "#555",
    //         }}
    //       >
    //         Your Email:
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         style={{
    //           width: "100%",
    //           padding: 10,
    //           borderRadius: 5,
    //           border: "1px solid #ccc",
    //         }}
    //       />
    //     </div>
    //     <div style={{ marginBottom: 15 }}>
    //       <label
    //         htmlFor="message"
    //         style={{
    //           display: "block",
    //           fontSize: 16,
    //           marginBottom: 5,
    //           color: "#555",
    //         }}
    //       >
    //         Message:
    //       </label>
    //       <textarea
    //         id="message"
    //         name="message"
    //         style={{
    //           width: "100%",
    //           padding: 10,
    //           borderRadius: 5,
    //           border: "1px solid #ccc",
    //         }}
    //         defaultValue={""}
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       style={{
    //         padding: "10px 20px",
    //         backgroundColor: "#007bff",
    //         color: "#fff",
    //         border: "none",
    //         borderRadius: 5,
    //         cursor: "pointer",
    //       }}
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </>
    <>
      <Navbar />
      <form className="mt-5 px-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="taskName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Task Category
          </label>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            id="taskCategory"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button onClick={addTask} className="btn btn-success">
          Submit
        </button>
      </form>

      {/* <h1 className="text-center">Hello {taskData.taskName}</h1> */}

      <TaskContainer
        tasks={taskDataSub}
        array={taskDataSub}
        dltFun={deleteTask}
        completeTFun={completeTask}
      />
    </>
  );
}

export default Home;
