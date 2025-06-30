function ModelSelector({ unit, value, onChange }) {
  const modelOptions = {
    autoclave: ["533HC-E", "733HC-E"],
    washer: ["WD86", "WD90"],
    cart: ["CM320", "CM500"]
  };

  return (
    <select value={value} onChange={e => onChange(e.target.value)} disabled={!unit}>
      <option value="">-- Select Model --</option>
      {modelOptions[unit]?.map(m => <option key={m} value={m}>{m}</option>)}
    </select>
  );
}
export default ModelSelector;
