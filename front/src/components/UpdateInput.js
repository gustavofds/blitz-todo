import axios from 'axios';
import { useState } from 'react';
import StatusSelect from './StatusSelect';

function UpdateInput({ task, setIsUpdating, setTasks }) {
  const [taskDesc, setTaskDesc] = useState(task.description);
  const [taskStatus, setTaskStatus] = useState(task.status);

  const handleDescChange = (ev) => {
    const { value } = ev.target;

    setTaskDesc(value);
  };

  const handleStatusChange = (ev) => {
    const { value } = ev.target;

    setTaskStatus(value);
  };

  const submitUpdate = () => {
    axios({
      method: 'PUT',
      url: `http://localhost:4000/api/tasks/${task._id}`,
      data: { description: taskDesc, status: taskStatus },
    })
      .then(() => axios.get('http://localhost:4000/api/tasks'))
      .then((data) => {
        setTasks(data.data);
        setIsUpdating(false);
      });
  };

  return (
    <form onSubmit={submitUpdate}>
      <input value={taskDesc} onChange={handleDescChange} />
      <StatusSelect value={taskStatus} onChange={handleStatusChange} />
      <button>Atualizar!</button>
    </form>
  );
}

export default UpdateInput;
