export default function Stats() {
  return (
    <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
      {[
        ["120+", "Completed 2024"],
        ["540", "Ongoing 2025"],
        ["640", "Ongoing 2026"],
      ].map(([v, l]) => (
        <div key={l}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 32,
              fontWeight: 300,
              color: "var(--props-text)",
              lineHeight: 1,
            }}
          >
            {v}
          </div>
          <div
            style={{
              marginTop: 4,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--props-text-muted)",
            }}
          >
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}
