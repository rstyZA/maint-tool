import React, { useState } from 'react';
import TroubleshootingSteps from './TroubleshootingSteps'; // or the correct file

const models = ['533 PACS 3000', '533 PACS 3500', '533 HC/E'];
const alarms = ['Abort – High Temperature'];

export default function MainPage({ onSelection }) {
  const [model, setModel] = useState('');
  const [alarm, setAlarm] = useState('');

  const canProceed = model && alarm;

  return (
    <div className="main-page-container">
      <h1>Select Equipment Model</h1>
      <div className="selector-group">
        {models.map(m => (
          <button
            key={m}
            className={`select-btn${model === m ? ' selected' : ''}`}
            onClick={() => setModel(m)}
            style={{
              margin: '0.5rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              border: model === m ? '2px solid #005eb8' : '1px solid #ccc',
              background: model === m ? '#e6f0fa' : '#fff',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'border 0.2s, background 0.2s',
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <h2 style={{ marginTop: '2rem' }}>Select Alarm</h2>
      <div className="selector-group">
        {alarms.map(a => (
          <button
            key={a}
            className={`select-btn${alarm === a ? ' selected' : ''}`}
            onClick={() => setAlarm(a)}
            style={{
              margin: '0.5rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              border: alarm === a ? '2px solid #005eb8' : '1px solid #ccc',
              background: alarm === a ? '#e6f0fa' : '#fff',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'border 0.2s, background 0.2s',
            }}
          >
            {a}
          </button>
        ))}
      </div>
      <button
        className="proceed-btn"
        disabled={!canProceed}
        onClick={() => onSelection(model, alarm)}
        style={{
          marginTop: '2rem',
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          background: canProceed ? '#005eb8' : '#ccc',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: canProceed ? 'pointer' : 'not-allowed',
          opacity: canProceed ? 1 : 0.7,
          transition: 'background 0.2s, opacity 0.2s',
        }}
      >
        Proceed
      </button>
    </div>
  );
}
