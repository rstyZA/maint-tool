export default function StepCard({ step, onNext, onReset }) {
  return (
    <div className="step-card">
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <div className="button-group">
        <button className="primary" onClick={onReset}>Yes, it worked</button>
        <button className="secondary" onClick={onNext}>No, continue</button>
      </div>
    </div>
  );
}
