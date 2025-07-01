function TroubleshootingSteps({ alarm }) {
  const steps = {
    water: [
      "Inspect the chamber sump for pooled water or debris.",
      "Check secondary drain and verify flow is unobstructed.",
      "Verify operation of secondary drain check valve.",
      "Confirm adequate cold water pressure at utility connection.",
      "Replace the chamber float switch if all else fails."
    ],
    abort: [
      "Ensure vacuum pump is operational and receiving power.",
      "Verify air removal valve is functioning correctly.",
      "Check chamber door seal integrity.",
      "Confirm program parameters are appropriate for the load.",
      "Review recent maintenance logs for related faults."
    ]
  };

  if (!alarm) return null;

  return (
    <div>
      {steps[alarm]?.map((step, idx) => (
        <div key={idx}><strong>Step {idx + 1}:</strong> {step}</div>
      ))}
    </div>
  );
}
export default TroubleshootingSteps;
