import { useState } from 'react';
import StepOne from './StepOne';

function App() {
  const steps = [
    "Check that the load was not excessive or improperly placed.",
    "Confirm calibration of the temperature sensor is within spec.",
    "Inspect wiring to the sensor and controller board for faults.",
    "Replace the chamber temperature sensor if all else fails."
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [escalate, setEscalate] = useState(false);

  const handleYes = () => setResolved(true);
  const handleNo = () => {
    if (stepIndex < steps.length) {
      setStepIndex(stepIndex + 1);
    } else {
      setEscalate(true);
    }
  };

  return (
    <div style={{ fontFamily: 'Helvetica Neue, sans-serif', color: '#00205B' }}>
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
        Model: 533HC-E
      </div>

      {/* Alarm Box */}
      <div style={{
        maxWidth: 600,
        margin: '1rem auto 2rem auto',
        padding: '1rem',
        backgroundColor: '#FDEAEA',
        borderLeft: '6px solid #D0342C',
        borderRadius: '6px',
        fontWeight: 'bold',
        fontSize: '1.05rem'
      }}>
        Alarm: Abort – High Temperature
      </div>

      {/* Step and Navigation */}
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        {resolved ? (
          <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '6px' }}>
            ✅ Issue resolved.
          </div>
        ) : escalate ? (
          <div style={{ padding: '1rem', background: '#fff3cd', color: '#856404', borderRadius: '6px' }}>
            ⚠️ All steps exhausted. Escalate to service.
          </div>
        ) : (
          <div>
            {stepIndex === 0 && <StepOne stepNumber={1} />}
            {stepIndex > 0 && (
              <div style={{
                padding: '1rem',
                borderLeft: '4px solid #0077CC',
                background: '#eef5fb',
                marginBottom: '1rem',
                borderRadius: '4px'
              }}>
                <strong>Step {stepIndex + 1}:</strong> {steps[stepIndex - 1]}
              </div>
            )}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleYes}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#0077CC',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                Yes – Problem Solved
              </button>
              <button
                onClick={handleNo}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#767676',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                No – Show Next Step
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;