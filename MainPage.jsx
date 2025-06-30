import Select from 'react-select';

const modelOptions = [
  { value: '533hc-e', label: '533HC-E' },
  { value: '633hc-e', label: '633HC-E' },
  { value: '733hc-e', label: '733HC-E' }
];

const alarmOptions = [
  { value: 'water-in-drain', label: 'Water in Drain' },
  { value: 'no-steam', label: 'No Steam Detected' },
  { value: 'temp-high', label: 'Chamber Temp Too High' }
];

export default function MainPage({ onSelect }) {
  return (
    <div className="landing-container">
      <h2>Select Unit & Alarm</h2>

      <div>
        <label>Model</label>
        <Select
          options={modelOptions}
          onChange={(selected) => onSelect('model', selected?.value)}
          placeholder="Search or select model..."
        />
      </div>

      <div>
        <label>Alarm</label>
        <Select
          options={alarmOptions}
          onChange={(selected) => onSelect('alarm', selected?.value)}
          placeholder="Search or select alarm..."
        />
      </div>
    </div>
  );
}
