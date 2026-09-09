interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="u-hairline" />
        <span className="u-eyebrow">{eyebrow}</span>
        {centered && <span className="u-hairline rotate-180" />}
      </div>
      <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-primary sm:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-secondary text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
