import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://localhost:4000/api/tasks').then((data) => {
      setTasks(data.data);

      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Ebytr - Lista de Tarefas</h1>

      <CreateTask setTasks={setTasks} />

      {isLoading ? (
        'Carregando...'
      ) : (
        <TaskList tasks={tasks} setTasks={setTasks} />
      )}
    </>
  );
}

export default Home;
