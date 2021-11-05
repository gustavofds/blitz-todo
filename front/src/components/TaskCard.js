import axios from 'axios';
import UpdateInput from './UpdateInput';
import { useState } from 'react';

function TaskCard({ task, setTasks }) {
  const [isUpdating, setIsUpdating] = useState(false);

  const deleteTask = (ev) => {
    ev.preventDefault();
    axios
      .delete(`https://ebytr-todo-back.herokuapp.com/api/tasks/${task._id}`)
      .then(() => axios.get('https://ebytr-todo-back.herokuapp.com/api/tasks'))
      .then((data) => setTasks(data.data));
  };

  const handleUpdate = () => {
    setIsUpdating(!isUpdating);
  };

  return (
    <li>
      {!isUpdating ? (
        `${task.description} - ${task.status}`
      ) : (
        <UpdateInput
          task={task}
          setIsUpdating={setIsUpdating}
          setTasks={setTasks}
        />
      )}
      <button onClick={deleteTask}>Deletar</button>
      {!isUpdating && <button onClick={handleUpdate}>Atualizar</button>}
    </li>
  );
}

export default TaskCard;
