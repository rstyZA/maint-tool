function AlarmSelector({ value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Choose an Alarm --</option>
      <option value="water">Water in Drain – Dry Phase</option>
      <option value="abort">Abort Air Removal</option>
    </select>
  );
}
export default AlarmSelector;
