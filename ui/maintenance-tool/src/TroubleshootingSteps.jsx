import React, { useState } from 'react';

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span
      style={{ position: 'relative', cursor: 'help', borderBottom: '1px dotted #888' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '120%',
          background: '#fff',
          color: '#222',
          border: '1px solid #ccc',
          borderRadius: '6px',
          padding: '0.5rem 1rem',
          fontSize: '0.95rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 10,
          minWidth: '220px',
          textAlign: 'center',
        }}>{text}</span>
      )}
    </span>
  );
}

function InfoBox({ title, children, color = '#E5EDF5', border = '#0077CC' }) {
  return (
    <div style={{
      background: color,
      borderLeft: `6px solid ${border}`,
      borderRadius: '6px',
      padding: '1rem 1.5rem',
      margin: '1rem 0',
      fontSize: '1.05rem',
      fontWeight: 500,
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <span style={{ fontWeight: 700 }}>{title}:</span> {children}
    </div>
  );
}

function DoorGasketProcedureExpandable() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: '#F9F6F1', // Getinge beige
      border: '1px solid #E5E0D8',
      borderRadius: '10px',
      margin: '1.5rem 0',
      padding: '1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <InfoBox title="Tools Required" color="#E5EDF5" border="#0077CC">Flat blade screwdriver or putty knife</InfoBox>
      <InfoBox title="PPE Required" color="#FFF4D9" border="#FFD700">Gloves</InfoBox>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: '#F9F6F1',
          color: '#005eb8',
          border: '1px solid #E5E0D8',
          borderRadius: '6px',
          padding: '0.5rem 1.5rem',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: open ? '1rem' : 0,
          fontSize: '1.1rem',
        }}
      >
        {open ? 'Hide maintenance procedure' : 'Show maintenance procedure'}
      </button>
      {open && (
        <>
          <div style={{ marginBottom: '2rem' }}>
            <strong>Step 1:</strong> Use a flat blade screw-driver to puncture the gasket and remove it from the groove.
            <CautionBox text="It's okay to poke a hole in the gasket." />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <strong>Step 2:</strong> Insert the new gasket.
            <CautionBox text="Ensure that the plastic weld seam is not in-line with steam inlet or outlet of the headring. This can lead to premature failure of the door gasket." />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <strong>Step 3:</strong> Use the display to test the function of the door gasket.
          </div>
        </>
      )}
    </div>
  );
}

function SteamValveProcedureExpandable() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: '#F9F6F1',
      border: '1px solid #E5E0D8',
      borderRadius: '10px',
      margin: '1.5rem 0',
      padding: '1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      <InfoBox title="Tools Required" color="#E5EDF5" border="#0077CC">
        Two adjustable wrenches, one pipe wrench, teflon tape, pick, phillips head screwdriver
      </InfoBox>
      <InfoBox title="PPE Required" color="#FFF4D9" border="#FFD700">
        Steam sleeves, gloves (if unit is hot - gloves still recommended even when cold)
      </InfoBox>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: '#F9F6F1',
          color: '#005eb8',
          border: '1px solid #E5E0D8',
          borderRadius: '6px',
          padding: '0.5rem 1.5rem',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: open ? '1rem' : 0,
          fontSize: '1.1rem',
        }}
      >
        {open ? 'Hide maintenance procedure' : 'Show maintenance procedure'}
      </button>
      {open && (
        <ol style={{ paddingLeft: '1.2em', margin: 0 }}>
          <li style={{ marginBottom: '1.2rem' }}>
            Disconnect steam supply or isolate the integrated boiler.
            <CautionBox text="Ensure that the jacket is not pressurized before next step." />
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Loosen 3/8" union at the tee, and loosen 1/2" union.
            <CautionBox text="Piping may be extremely hot." />
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Remove solenoid covers and remove solenoids.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Remove the section of piping from the sterilizer.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Remove and replace steam to chamber valve (SV1)
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Reverse this procedure to reinstall the component.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Return steam pressure to the unit and verify that there is no leak present on the 3/8" union or piping.
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            If a leak is present, isolate steam from the unit and repair the leak. Use new piping if necessary.
            <CautionBox text='The 3/8" union commonly fails and it is recommended to replace this if you are seeing a leak.' />
          </li>
          <li style={{ marginBottom: '1.2rem' }}>
            Run a test cycle and verify that there are no leaks present.
          </li>
        </ol>
      )}
    </div>
  );
}

const stepData = [
  {
    summary: (
      <>
        Remove and replace the{' '}
        <Tooltip text="The gasket can become less pliable after 600 cycles or 6 months of use.">
          door gasket
        </Tooltip>.
      </>
    ),
    explanation: (
      <div style={{ color: '#555', fontSize: '1.05rem', margin: '0.5rem 0 1.5rem 0' }}>
        Failure of the gasket causes steam to be introduced to the chamber uncontrolled, or causes visible leaks. This failure is a common cause of high temperataure aborts. Replacing the gasket is a routine maintenance step.
      </div>
    ),
    procedure: <DoorGasketProcedureExpandable />
  },
  {
    summary: (
      <>
        Remove and replace the{' '}
        <Tooltip text="The valve can also be obstructed. Inspect piping visually for any sign of deposit build-up that can become lodged in the seat of the valve.">
          steam to chamber valve
        </Tooltip>.
      </>
    ),
    explanation: (
      <div style={{ color: '#555', fontSize: '1.05rem', margin: '0.5rem 0 1.5rem 0' }}>
        The steam to chamber valve can fail in an open state, again introducing steam uncontrolled. Removing and replacing the valve is the next logical step.
      </div>
    ),
    procedure: <SteamValveProcedureExpandable />
  }
];

function TroubleshootingSteps({ alarm, onResolved }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [resolved, setResolved] = useState(false);

  if (!alarm) return null;

  // Only show navigation for abort alarm for now
  if (alarm === 'abort') {
    const step = stepData[stepIdx];
    if (resolved) {
      return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{
            background: '#D4EDDA',
            color: '#155724',
            borderRadius: '8px',
            padding: '2rem 1.5rem',
            fontSize: '1.2rem',
            fontWeight: 600,
            maxWidth: 500,
            margin: '0 auto 2rem auto',
            border: '1px solid #b2dfb2'
          }}>
            ✅ Issue resolved.
          </div>
          <button
            onClick={onResolved}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              background: '#005eb8',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Return to Main Page
          </button>
        </div>
      );
    }
    return (
      <div>
        <div style={{ margin: '1.5rem 0' }}>
          <div style={{ fontWeight: 600, fontSize: '1.15rem' }}>{step.summary}</div>
          {step.explanation}
        </div>
        {step.procedure}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
          <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
            Did this resolve the issue?
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setResolved(true)}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                background: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Yes
            </button>
            <button
              onClick={() => setStepIdx(i => Math.min(stepData.length - 1, i + 1))}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                background: '#D0342C',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              No
            </button>
          </div>
          {stepIdx > 0 && (
            <button
              onClick={() => setStepIdx(i => Math.max(0, i - 1))}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                background: '#ccc',
                color: '#333',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Back
            </button>
          )}
        </div>
      </div>
    );
  }

  // Fallback for other alarms
  return (
    <div>
      {stepData[0].summary}
      {stepData[0].explanation}
      {stepData[0].procedure}
    </div>
  );
}

function CautionBox({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: '#FFF4D9',
          color: '#856404',
          border: '1px solid #FFEBAA',
          borderRadius: '6px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          fontWeight: 600,
          marginBottom: open ? '0.5rem' : 0
        }}
      >
        {open ? 'Hide Caution' : 'Show Caution'}
      </button>
      {open && (
        <div style={{
          background: '#FFF4D9',
          color: '#856404',
          border: '1px solid #FFEBAA',
          borderRadius: '6px',
          padding: '0.75rem 1rem',
          marginTop: '0.5rem',
          fontSize: '1rem'
        }}>
          ⚠️ {text}
        </div>
      )}
    </div>
  );
}

export default TroubleshootingSteps;
