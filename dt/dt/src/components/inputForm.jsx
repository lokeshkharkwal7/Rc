import React from 'react'

const InputForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default InputForm
