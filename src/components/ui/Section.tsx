interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "dark" | "blue";
}

const backgrounds = {
    white: "bg-white text-[#040813]",
    dark: "bg-[#040813] text-white",
    blue: "bg-[#7E9CFC] text-white",
};

export default function Section({
    children,
    className = "",
    id,
    background = "white",
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
