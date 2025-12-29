interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "surface" | "primary";
}

const backgrounds = {
  default: "bg-[#FAFAFC]",
  surface: "bg-white",
  primary: "bg-primary",
};

export default function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
