interface Props {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: Props) {
  return (
    <div className="section-label">
      <span className="w-5 h-px bg-accent block" />
      {children}
      <span className="w-5 h-px bg-accent block" />
    </div>
  );
}