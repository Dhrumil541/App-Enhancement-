import { useState } from "react";

const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ description: "", category: "" });

  const handleCreateTask = () => {
    
    if (newTask.description.trim() === "" || newTask.category.trim() === "") {
      alert("Please fill in the description and category.");
      return;
    }

    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    setNewTask({ description: "", category: "" });
  };

  const handleMarkComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const categorizedTasks = (category) =>
    tasks.filter((task) => task.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-indigo-500 py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center text-white mb-8 shadow-lg py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
        User Dashboard
      </h1>

      {/* Task creation section */}
      <div className="max-w-lg mx-auto my-8 p-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700 text-center">
          Create New Task
        </h2>

        <input
          type="text"
          placeholder="Category"
          value={newTask.category}
          onChange={(e) =>
            setNewTask({ ...newTask, category: e.target.value })
          }
          className="w-full p-3 mb-4 border-2 border-indigo-300 rounded-md shadow-md focus:ring focus:ring-indigo-400"
        />

        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="w-full p-3 mb-4 border-2 border-indigo-300 rounded-md shadow-md focus:ring focus:ring-indigo-400"
        />

        <button
          onClick={handleCreateTask}
          className="w-full bg-gradient-to-r from-green-400 to-blue-600 text-white text-xl py-3 rounded-md shadow-md hover:from-green-600 hover:to-blue-700 transition-all duration-300"
        >
          Create Task
        </button>
      </div>

      {/* Task list section */}
      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-purple-700 text-center">
          Your Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="text-white text-center">No tasks are available.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 mb-4 rounded-lg shadow-lg ${
                task.completed ? "bg-green-200" : "bg-red-200"
              }`}
            >
              <p className="text-lg font-bold">{task.description}</p>
              <p className="italic">{task.category}</p>

              <div className="mt-3 flex justify-between">
                <button
                  onClick={() => handleMarkComplete(task.id)}
                  className={`${
                    task.completed ? "bg-yellow-500" : "bg-blue-500"
                  } text-white px-4 py-2 rounded-md`}
                >
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>

                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* View tasks categorized by type */}
      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700 text-center">
          Tasks Categorized by Type
        </h2>
               
        {["Work", "Personal", "Other"].map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2 text-center">
              {category}
            </h3>

            {categorizedTasks(category).length === 0 ? (
              <p className="text-gray-100 text-center">There are no tasks in this category</p>
            ) : (
              categorizedTasks(category).map((task) => (
                <div
                  key={task.id}
                  className={`p-4 mb-2 rounded-lg shadow-lg ${
                    task.completed ? "bg-green-300" : "bg-yellow-200"
                  }`}
                >
                  <p className="text-lg font-bold">{task.description}</p>
                  <p className="italic">{task.category}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
