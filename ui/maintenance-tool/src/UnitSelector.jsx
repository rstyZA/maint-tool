function UnitSelector({ value, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      <option value="">-- Choose Equipment Type --</option>
      <option value="autoclave">Autoclave</option>
      <option value="washer">Washer Disinfector</option>
      <option value="cart">Cart Washer</option>
    </select>
  );
}
export default UnitSelector;
