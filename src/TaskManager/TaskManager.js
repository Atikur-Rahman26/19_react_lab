import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [showInputBoxes, setInputBoxes] = useState(false);
  const [editButtonOrNot, setEditButtonOrNot] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");

  const handleShowingInputBoxes = () => {
    setInputBoxes(true);
    setEditButtonOrNot(false);
    setSelectedTaskIndex(null);
    setNewTaskTitle("");
    setNewTaskBody("");
  };

  const handleSaveTask = () => {
    const newTask = { title: newTaskTitle, body: newTaskBody };
    setTasks([...tasks, newTask]);
    setInputBoxes(false);
    setNewTaskTitle("");
    setNewTaskBody("");
  };

  const handleEditTask = (index) => {
    setInputBoxes(true);
    setEditButtonOrNot(true);
    setSelectedTaskIndex(index);
    setNewTaskTitle(tasks[index].title);
    setNewTaskBody(tasks[index].body);
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex] = {
      title: newTaskTitle,
      body: newTaskBody,
    };
    setTasks(updatedTasks);
    setInputBoxes(false);
    setEditButtonOrNot(false);
    setSelectedTaskIndex(null);
    setNewTaskTitle("");
    setNewTaskBody("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setNewTaskBody(e.target.value);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div className="NewAddTaskButton">
        <button className="AddTaskButton" onClick={handleShowingInputBoxes}>
          <span className="AddTaskText">Add Task</span>
        </button>
      </div>
      <TaskInputForms
        showBox={showInputBoxes}
        editButtonOrNot={editButtonOrNot}
        onSave={editButtonOrNot ? handleUpdateTask : handleSaveTask}
        handleTitleChange={handleTitleChange}
        handleBodyChange={handleBodyChange}
        newTaskTitle={newTaskTitle}
        newTaskBody={newTaskBody}
        onCancelButton={() => setInputBoxes(false)}
      />
      {tasks.map((task, index) => (
        <IndividualTask
          key={index}
          index={index}
          title={task.title}
          body={task.body}
          onEdit={() => handleEditTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

function TaskInputForms(props) {
  const {
    showBox,
    editButtonOrNot,
    onSave,
    handleTitleChange,
    handleBodyChange,
    newTaskTitle,
    newTaskBody,
    onCancelButton,
  } = props;

  return (
    showBox && (
      <div className="TaskInputFormsBox">
        <div className="AddTitle">
          <center>
            <h3>{editButtonOrNot ? "Edit Task" : "Add Task"}</h3>
          </center>
        </div>
        <div className="TaskTitleInputForms">
          <p className="Names">Task Title:</p>
          <input
            type="text"
            value={newTaskTitle}
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="TaskBodyInputForms">
          <p className="NamesDetails">Task's Details:</p>
          <input
            type="text"
            value={newTaskBody}
            onChange={handleBodyChange}
          ></input>
        </div>
        <div className="ButtonClasses">
          <button className="SaveButton" onClick={onSave}>
            <span className="ButtonsText">
              {editButtonOrNot ? "Save Changes" : "Save"}
            </span>
          </button>
          <button className="CancelButton" onClick={onCancelButton}>
            <span className="ButtonsText">Cancel</span>
          </button>
        </div>
      </div>
    )
  );
}

function IndividualTask({ index, title, body, onEdit, onDelete }) {
  return (
    <div className="TaskBox">
      <div className="TaskContent">
        <p className="TaskTitle">{title}</p>
        <p>{body}</p>
      </div>
      <div className="ButtonContainer">
        <button className="EditButton" onClick={onEdit}>
          Edit
        </button>
        <button className="DeleteButton" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskManager;
