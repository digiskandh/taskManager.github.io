import React, { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import Form from "./components/Form";

const TaskManager = () => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("tasks");
    return storedData ? JSON.parse(storedData) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const dataHandler = (getdata) => {
    setData((prev) => [...prev, getdata]);
  };

  const handleEdit = (taskToEdit) => {
    const newTaskName = prompt("Edit Task Name", taskToEdit.name);
    if (newTaskName) {
      setData((prev) =>
        prev.map((task) =>
          task.id === taskToEdit.id ? { ...task, name: newTaskName } : task
        )
      );
    }
  };

  const handleDelete = (taskToDelete) => {
    setData((prev) => prev.filter((task) => task.id !== taskToDelete.id));
  };

  const handlePriorityChange = (taskToChange) => {
    const newPriority = prompt(
      "Change Priority (very important, moderate, less important)",
      taskToChange.importance
    );
    if (newPriority) {
      setData((prev) =>
        prev.map((task) =>
          task.id === taskToChange.id
            ? { ...task, importance: newPriority }
            : task
        )
      );
    }
  };

  const importantTasks = data.filter(
    (task) => task.importance === "very important"
  );
  const moderateTasks = data.filter((task) => task.importance === "moderate");
  const lessImportantTasks = data.filter(
    (task) => task.importance === "less important"
  );

  return (
    <div className="bg-gray-100 min-h-screen min-w-screen p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <Form dataHandler={dataHandler} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Tasks
          title="Very Important"
          tasks={importantTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPriorityChange={handlePriorityChange}
        />
        <Tasks
          title="Moderate"
          tasks={moderateTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPriorityChange={handlePriorityChange}
        />
        <Tasks
          title="Less Important"
          tasks={lessImportantTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPriorityChange={handlePriorityChange}
        />
      </div>
    </div>
  );
};

export default TaskManager;
