import axios from 'axios';

function TaskCard({ task, setTasks }) {
  const deleteTask = (task) => {
    axios
      .delete(`http://localhost:4000/api/tasks/${task._id}`)
      .then(() => axios.get('http://localhost:4000/api/tasks'))
      .then((data) => setTasks(data.data));
  };

  return (
    <li>
      {task.description} - {task.status}{' '}
      <button onClick={() => deleteTask(task)}>Deletar</button>
    </li>
  );
}

export default TaskCard;
