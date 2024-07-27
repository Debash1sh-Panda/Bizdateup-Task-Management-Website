import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateTaskPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    try {
      // Retrieve the existing tasks from localStorage
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      // Add the new task to the array
      existingTasks.push(data);
      // Save the updated tasks array back to localStorage
      localStorage.setItem("tasks", JSON.stringify(existingTasks));

      toast.success("Task Added Successfully", {
        autoClose: 1000,
      });
      reset();
    } catch (error) {
      toast.error("Failed to Add Task");
      console.error("Error saving task:", error);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mx-5">
            <h1 className="text-3xl font-bold">
              Add <span className="text-[#48bbd2]">TASK</span> Now
            </h1>
            <p className="py-4 text-blue-200">
              "Transform your productivity with TaskM, the ultimate task
              management app designed to streamline your workflow and enhance
              your organizational skills. TaskM empowers you to set clear goals,
              prioritize tasks, and track your progress effortlessly."
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="@title"
                  className="input input-bordered"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder="@description"
                  className="input input-bordered w-full h-32 md:h-40 lg:h-48"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskPage;
