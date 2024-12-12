import { useState } from "react";

const Tasks = ({ title, tasks, onEdit, onDelete, onPriorityChange }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleViewClick = (task) => {
    setSelectedTask(task === selectedTask ? null : task); 
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-100 p-3 rounded-md mb-4 shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{task.name}</span>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleViewClick(task)}
              >
                {selectedTask === task ? "Close" : "View"}
              </button>
            </div>
            {selectedTask === task && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-300">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Task Options
                </h3>
                <div className="flex justify-start items-center gap-4">
                  <button
                    className="text-green-600 hover:underline"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => onDelete(task)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-yellow-600 hover:underline"
                    onClick={() => onPriorityChange(task)}
                  >
                    Change Priority
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default Tasks;
