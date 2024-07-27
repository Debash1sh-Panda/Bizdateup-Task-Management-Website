import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve the tasks from localStorage
    const getAllTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(getAllTasks);
  }, []);

  const handleDelete = (index) => {
    // Filter out the task to be deleted
    const updatedTasks = tasks.filter((_, i) => i !== index);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task Deleted Successfully", {
      autoClose: 1000,
    });
    setTasks(updatedTasks);
  };

  const handleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done",
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    const newStatus = updatedTasks[index].status;
    toast.success(
      `Task Marked as ${
        newStatus.charAt(0).toUpperCase() + newStatus.slice(1)
      }`,
      {
        autoClose: 1500,
      }
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h1 className="text-3xl font-bold flex items-center justify-center mt-3">
        Here Your<span className="text-[#48bbd2] ml-2"> #TASKS!</span>
      </h1>
      <div className="mx-8 mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="relative w-52 h-52 p-3 border border-x-cyan-600 rounded shadow-lg"
          >
            <h3 className="text-[#48bbd2] font-semibold text-xl mb-2">
              {task.title}
            </h3>
            <p className="mt-2 font-sans text-blue-200">{task.description}</p>
            <button
              onClick={() => handleStatus(index)}
              className="absolute bottom-2 left-2 rounded-full text-2xl font-bold px-2 py-2 "
            >
              {task.status === "done" ? (
                <IoCheckmarkDoneCircleSharp
                  className="text-[#33a93b] hover:text-[#942626]"
                  title="mark as not done"
                />
              ) : (
                <FaCircleXmark
                  className="text-[#942626] hover:text-[#33a93b]"
                  title="mark as done"
                />
              )}
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="absolute bottom-2 right-2 bg-[#54c4da] text-[#333334] hover:bg-[#364444] hover:text-red-400 rounded-sm font-serif px-1 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
