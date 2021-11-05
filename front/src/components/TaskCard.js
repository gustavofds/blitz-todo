import axios from 'axios';

function TaskCard({ task }) {
  const deleteTask = (task) => {
    axios.delete(`http://localhost:4000/api/tasks/${task._id}`);
  };

  return (
    <li>
      {task.description} - {task.status}{' '}
      <button onClick={() => deleteTask(task)}>Deletar</button>
    </li>
  );
}

export default TaskCard;
