import React, { useState } from 'react';
import MainPage from './MainPage';
import TroubleshootingSteps from './TroubleshootingSteps';

const alarmKeyMap = {
  'Abort – High Temperature': 'abort',
  // add more mappings as needed
};

function ExpandableAlarmBox({ alarm }) {
  const [open, setOpen] = useState(false);
  const alarmOverviews = {
    'Abort – High Temperature': 'Abort - High Temperature indicates that the equipment has detected a temperature 8 degrees F above the set point in exposure.'
    // Add more alarm overviews as needed
  };
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        maxWidth: 600,
        margin: '1rem auto 2rem auto',
        padding: '1rem',
        backgroundColor: '#FDEAEA',
        borderLeft: '6px solid #D0342C',
        borderRadius: '6px',
        fontWeight: 'bold',
        fontSize: '1.05rem',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        boxShadow: open ? '0 2px 12px rgba(208,52,44,0.08)' : 'none',
        position: 'relative',
      }}
      title={open ? 'Click to collapse' : 'Click to expand for more info'}
    >
      Alarm: {alarm}
      <span style={{ float: 'right', fontWeight: 400, fontSize: '1.2rem' }}>{open ? '▲' : '▼'}</span>
      {open && (
        <div style={{
          marginTop: '1rem',
          color: '#a94442',
          fontWeight: 400,
          fontSize: '1rem',
          background: '#fff6f6',
          borderRadius: '4px',
          padding: '0.75rem 1rem',
        }}>
          {alarmOverviews[alarm] || 'No additional information available.'}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [selection, setSelection] = useState(null);

  return (
    <>
      {!selection ? (
        <MainPage onSelection={(model, alarm) => setSelection({ model, alarm })} />
      ) : (
        <div>
          <h2>Troubleshooting for {selection.model} - {selection.alarm}</h2>
          {/* Top Blue Banner */}
          <div style={{ backgroundColor: '#00205B', height: '4rem', marginBottom: '1.5rem' }} />

          {/* Model Box */}
          <div style={{
            maxWidth: 600,
            margin: '0 auto',
            padding: '1rem',
            backgroundColor: '#F0F4F9',
            borderLeft: '6px solid #0077CC',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            Model: {selection.model}
          </div>

          {/* Expandable Alarm Box */}
          <ExpandableAlarmBox alarm={selection.alarm} />

          {/* Step and Navigation */}
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <TroubleshootingSteps
              alarm={selection.alarm === 'Abort – High Temperature' ? 'abort' : selection.alarm}
              onResolved={() => setSelection(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}