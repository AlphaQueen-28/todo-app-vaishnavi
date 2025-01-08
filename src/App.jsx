import React, { useState } from "react";
import { appStyle, inputStyle } from "./Styles/style";
import Input from "./Components/inputs";
import Task from "./Components/Task";
import Button from "./Components/Button";

const App = () => {
  //to store all task
  const [tasks, setTasks] = useState([]);

  //to store new task
  const [newTask, setNewTask] = useState("");

  //function to add new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  //function to mark task as completed
  const completeTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask[index].completed = !updatedTask[index].completed;
    setTasks(updatedTask);
  };

  //function to remove task
  const removeTask = (index) => {
    //filter out the task to be removed
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  };

  return (
    <div style={appStyle}>
      <h3>ToDo List</h3>

      <div>
        <Input
          type="text"
          placeholder="Add a new task"
          style={inputStyle}
          handleOnChange={(e) => setNewTask(e.target.value)}
        />
        <Button text="+" handleOnClick={addTask} />
      </div>
      <div>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              index={index}
              task={task}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
