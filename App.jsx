import { useState } from 'react';

function App() {
  const steps = [
    "Verify chamber temperature sensor is properly seated and connected.",
    "Check that the load was not excessive or improperly placed.",
    "Confirm calibration of the temperature sensor is within spec.",
    "Inspect wiring to the sensor and controller board for faults.",
    "Replace the chamber temperature sensor if all above are verified."
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [escalate, setEscalate] = useState(false);

  const handleYes = () => setResolved(true);

  const handleNo = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setEscalate(true);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Getinge Troubleshooter</h1>
      <h2>Model: 533HC-E</h2>
      <h3>Alarm: Abort – High Temperature</h3>

      {resolved ? (
        <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' }}>
          ✅ Issue resolved.
        </div>
      ) : escalate ? (
        <div style={{ padding: '1rem', background: '#fff3cd', color: '#856404', border: '1px solid #ffeeba' }}>
          ⚠️ All steps exhausted. Escalate to service.
        </div>
      ) : (
        <div>
          <div style={{ padding: '1rem', borderLeft: '4px solid #007bff', background: '#eef5fb', marginBottom: '1rem' }}>
            <strong>Step {stepIndex + 1}:</strong> {steps[stepIndex]}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleYes} style={{ flex: 1, padding: '0.75rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
              Yes – Problem Solved
            </button>
            <button onClick={handleNo} style={{ flex: 1, padding: '0.75rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
              No – Show Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
