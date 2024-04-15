const createTask = async (name: string, description: string) => {
  return await fetch("/api/task", {
    method: "POST",
    body: JSON.stringify({ name, description }),
  });
};

const getAllTasks = async () => {
  return await fetch("/api/task", {
    method: "GET",
  });
};

const deleteTask = async (taskId: string) => {
  return await fetch(`/api/task?taskId=${taskId}`, {
    method: "DELETE",
  });
};

const updateTaskStatus = async (taskId: string, isComplete: boolean) => {
  return await fetch(`/api/task?taskId=${taskId}&isComplete=${isComplete}`, {
    method: "PUT",
  });
};

const TaskService = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTaskStatus,
};

export default TaskService;
