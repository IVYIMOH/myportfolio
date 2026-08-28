export default function SectionLabel({ children }: { children: string }) {
  return (
    <span className="eyebrow">
      <span className="h-px w-8 bg-border" />
      {children}
    </span>
  );
}