import { procedures } from './procedures';
import { useState } from 'react';

function StepOne({ stepNumber }) {
  const step = procedures.replaceDoorGasket;
  const [showDetails, setShowDetails] = useState(false);
  const [showCaution, setShowCaution] = useState(false);

  const renderTitleWithTooltip = () => {
    const [before, target, after] = step.title.split(new RegExp(`(${step.tooltipTarget})`, 'i'));
    return (
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        <strong>Step {stepNumber}:</strong>{' '}
        {before}
        <span title={step.tooltipText} style={{ borderBottom: '1px dotted #555', cursor: 'help', color: '#004990' }}>
          {target}
        </span>
        {after}
      </h3>
    );
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      {renderTitleWithTooltip()}

      {/* Tools & PPE toggle box */}
      <button onClick={() => setShowDetails(!showDetails)} style={{ margin: '0.5rem 0', background: '#E5EDF5', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '4px' }}>
        {showDetails ? 'Hide Tools & PPE' : 'Show Tools & PPE'}
      </button>
      {showDetails && (
        <div style={{
          backgroundColor: '#FFF4D9',
          borderLeft: '6px solid #FFC107',
          borderRadius: '6px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <strong>Tools Required:</strong> {step.tools.join(', ')}<br />
          <strong>PPE Required:</strong> {step.ppe.join(', ')}
        </div>
      )}

      {/* Maintenance procedure list */}
      <ol style={{ lineHeight: 1.6 }}>
        {step.steps.map((s, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>
            {s}
            {i === 2 && (
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={() => setShowCaution(!showCaution)}
                  style={{
                    background: '#FFF4D9',
                    color: '#856404',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.85rem',
                    borderRadius: '4px',
                    border: '1px solid #ffeeba',
                    cursor: 'pointer'
                  }}
                >
                  ⚠️ {showCaution ? 'Hide Caution' : 'Show Caution'}
                </button>
                {showCaution && (
                  <div style={{
                    backgroundColor: '#FFF4D9',
                    borderLeft: '6px solid #FFC107',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    marginTop: '0.5rem'
                  }}>
                    <strong>Caution:</strong> {step.caution}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StepOne;
