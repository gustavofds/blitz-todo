function StatusSelect({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="pending">Pendente</option>
      <option value="in-progress">Em andamento</option>
      <option value="done">Pronto</option>
    </select>
  );
}

export default StatusSelect;
