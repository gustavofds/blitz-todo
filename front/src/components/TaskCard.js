function TaskCard({ task }) {
  console.log(task);
  return (
    <li>
      {task.description} - {task.status}
    </li>
  );
}

export default TaskCard;
