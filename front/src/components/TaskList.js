import TaskCard from './TaskCard';

function TaskList({ tasks, setTasks }) {
  return (
    <ol>
      {tasks.map((task) => (
        <TaskCard task={task} setTasks={setTasks} key={task._id} />
      ))}
    </ol>
  );
}

export default TaskList;
