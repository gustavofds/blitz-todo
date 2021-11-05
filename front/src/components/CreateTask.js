import axios from 'axios';
import { useState } from 'react';
import StatusSelect from './StatusSelect';

function CreateTask({ setTasks }) {
  const [newDescription, setNewDescription] = useState('');
  const [newStatus, setNewStatus] = useState('pending');

  const handleDescriptionChange = (ev) => {
    const { value } = ev.target;
    setNewDescription(value);
  };

  const handleStatusChange = (ev) => {
    const { value } = ev.target;
    setNewStatus(value);
  };

  const submitNewTask = (ev) => {
    ev.preventDefault();
    axios({
      method: 'POST',
      url: 'https://ebytr-todo-back.herokuapp.com/api/tasks',
      data: { description: newDescription, status: newStatus },
    })
      .then(() => axios.get('https://ebytr-todo-back.herokuapp.com/api/tasks'))
      .then((data) => {
        setTasks(data.data);
        setNewDescription('');
        setNewStatus('pending');
      });
  };

  return (
    <form onSubmit={submitNewTask}>
      <input
        value={newDescription}
        onChange={handleDescriptionChange}
        placeholder="Descrição da tarefa"
      />

      <StatusSelect value={newStatus} onChange={handleStatusChange} />

      <button>Enviar nova Tarefa</button>
    </form>
  );
}

export default CreateTask;
