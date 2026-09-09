export default function Stats() {
  const stats = [
    { value: "120+", label: "Completed in 2024" },
    { value: "540", label: "Ongoing for 2025" },
    { value: "640", label: "Ongoing for 2026" },
  ];

  return (
    <div className="flex flex-wrap gap-10">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <div className="font-serif text-[2rem] font-light leading-none text-primary">
            {value}
          </div>
          <div className="mt-1 text-[0.625rem] uppercase tracking-[0.22em] text-muted">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
