export default function Sidebar({ steps, currentStep, onStepSelect }) {
  return (
    <aside className="sidebar">
      <h2>Steps</h2>
      <ul>
        {steps.map((step, index) => {
          let statusIcon = '⚪';
          if (index < currentStep) statusIcon = '✅';
          else if (index === currentStep) statusIcon = '🔵';

          return (
            <li
              key={index}
              onClick={() => onStepSelect(index)}
              style={{
                fontWeight: index === currentStep ? 'bold' : 'normal',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <span>{statusIcon}</span> {step.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}