import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://localhost:4000/api/tasks').then((data) => {
      setTasks(data.data);
      console.log(data.data);

      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Ebytr - Lista de Tarefas</h1>
      {isLoading ? 'Carregando...' : <TaskList />}
    </>
  );
}

export default Home;
