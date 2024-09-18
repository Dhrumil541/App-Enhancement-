import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [newTask, setNewTask] = useState("");
  const [userRoleUpdates, setUserRoleUpdates] = useState({});

  // Mock data fetch (Actual API calls thi replace karo)
  useEffect(() => {
    // Fetch tasks and users
    setTasks([
      { id: 1, title: "Task 1", type: "Design", userId: 1 },
      { id: 2, title: "Task 2", type: "Development", userId: 2 },
    ]);
    setUsers([
      { id: 1, name: "User 1", role: "Admin" },
      { id: 2, name: "User 2", role: "User" },
    ]);
  }, []);

  // Task Create Karva
  const handleCreateTask = () => {
    if (newTask && selectedUser) {
      const newTaskObj = { id: tasks.length + 1, title: newTask, type: "New", userId: Number(selectedUser) };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setSelectedUser("");
    } else {
      alert("Kripya task details aani user ne assign karo.");
    }
  };

  // Task Delete Karva
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Role Input Change Handle Karva
  const handleRoleInputChange = (userId, value) => {
    setUserRoleUpdates({
      ...userRoleUpdates,
      [userId]: value,
    });
  };

  // Role Update Karva
  const handleRoleUpdate = (userId) => {
    const newRole = userRoleUpdates[userId];
    if (newRole) {
      setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
      setUserRoleUpdates({
        ...userRoleUpdates,
        [userId]: "",
      });
    } else {
      alert("Kripya role enter karo jo update karvu che.");
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Task Management */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Create, Update, and Delete Tasks</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="p-2 rounded bg-white text-black"
          />
          <select
            className="p-2 rounded bg-white text-black"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Assign to User</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button
            onClick={handleCreateTask}
            className="p-2 bg-green-500 rounded"
          >
            Create Task
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-xl">All Tasks</h3>
          {tasks.map(task => (
            <div key={task.id} className="p-2 mt-2 bg-white text-black rounded flex justify-between">
              <span>{task.title} - {task.type}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="p-2 bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Task Categorization */}
      <div className="mb-10">
        <h2 className="text-2xl mb-4">Manage Tasks by Type</h2>
        <div className="flex space-x-4">
          {["Design", "Development"].map((type) => (
            <div key={type} className="p-4 bg-white text-black rounded w-1/2">
              <h3 className="text-xl mb-2">{type} Tasks</h3>
              {tasks.filter(task => task.type === type).map(task => (
                <div key={task.id} className="p-2 mt-2 bg-gray-100 rounded">
                  {task.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* User Management */}
      <div>
        <h2 className="text-2xl mb-4">View Users and Assign Roles</h2>
        <div className="grid grid-cols-2 gap-4">
          {users.map(user => (
            <div key={user.id} className="p-4 bg-white text-black rounded">
              <h3 className="text-xl mb-2">{user.name}</h3>
              <p>Role: {user.role}</p>
              <input
                type="text"
                placeholder="New Role"
                value={userRoleUpdates[user.id] || ""}
                onChange={(e) => handleRoleInputChange(user.id, e.target.value)}
                className="p-2 rounded mt-2 bg-gray-200"
              />
              <button
                onClick={() => handleRoleUpdate(user.id)}
                className="p-2 mt-2 bg-blue-500 rounded"
              >
                Update Role
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
