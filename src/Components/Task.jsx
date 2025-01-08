import React from "react";
import { customButtonStyle, taskStyles } from "../Styles/style";
import Button from "./Button";

const Task = (props) => {
  const { task, index, completeTask, removeTask } = props;
  return (
    <div
      style={{
        ...taskStyles,
        textDecoration: task.completed ? "line-through" : "none",
        opacity: task.completed ? 0.5 : 1,
      }}
    >
      {task.text}
      <div>
        <Button
          text={task.completed ? "Undo" : "Done"}
          ownStyle={customButtonStyle}
          handleOnClick={() => completeTask(index)}
        />

        <Button
          text="Remove"
          ownStyle={customButtonStyle}
          handleOnClick={() => removeTask(index)}
        />
      </div>
    </div>
  );
};

export default Task;
