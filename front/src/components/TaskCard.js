import axios from 'axios';
import { useState } from 'react';

function TaskCard({ task, setTasks }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const deleteTask = (task) => {
    axios
      .delete(`http://localhost:4000/api/tasks/${task._id}`)
      .then(() => axios.get('http://localhost:4000/api/tasks'))
      .then((data) => setTasks(data.data));
  };

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  return (
    <li>
      {!isUpdating ? `${task.description} - ${task.status}` : 'Atualizando'}
      <button onClick={() => deleteTask(task)}>Deletar</button>
      <button onClick={handleUpdate}>Atualizar</button>
    </li>
  );
}

export default TaskCard;
