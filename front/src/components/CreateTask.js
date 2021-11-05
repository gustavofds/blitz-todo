import axios from 'axios';
import { useState } from 'react';

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

  const submitNewTask = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:4000/api/tasks',
      data: { description: newDescription, status: newStatus },
    })
      .then(() => axios.get('http://localhost:4000/api/tasks'))
      .then((data) => setTasks(data.data));
  };

  return (
    <form onSubmit={submitNewTask}>
      <input
        value={newDescription}
        onChange={handleDescriptionChange}
        placeholder="Descrição da tarefa"
      />
      <select value={newStatus} onChange={handleStatusChange}>
        <option value="pending">Pendente</option>
        <option value="in-progress">Em andamento</option>
        <option value="done">Pronto</option>
      </select>
      <button>Enviar nova Tarefa</button>
    </form>
  );
}

export default CreateTask;
