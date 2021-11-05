import TaskCard from './TaskCard';

function TaskList({ tasks }) {
  return (
    <ol>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </ol>
  );
}

export default TaskList;
