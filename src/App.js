import React, { useState } from "react";
import { SiPicartodottv } from "react-icons/si";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  // Add Tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  // delete tasks

  const delectTask = (id) => {
    let filterTask = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filterTask);
    console.log("deleted task");
  };

  // toggle completed task

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => (
        task.id === id ? { ...task, completed: !task.completed } : task
      ))
    )
  }

  const date = new Date();
  // console.log(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="app">
      <div className="container">
        <h1>
          <SiPicartodottv /> PowerList
        </h1>
        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()}</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <AiOutlinePlus className="icon" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a task"
              type="text"
            />
          </div>
        </form>

        <div>
          {tasks.map((task) => (
            <div
              className={`task-row ${task.completed ? "completed" : ""}`}
              key={task.id}
              onDoubleClick={() => toggleComplete(task.id)}
            >
              <p>{task.text}</p>
              <AiOutlineClose
                onClick={() => delectTask(task.id)}
                className="icon"
              />
            </div>
          ))}
        </div>
        <p className='length'>{(tasks < 1) ? 'You have no tasks' : `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
};

export default App;
