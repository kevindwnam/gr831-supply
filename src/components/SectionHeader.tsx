interface SectionHeaderProps {
  title: string;
  rightLabel?: string;
}

export default function SectionHeader({ title, rightLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-1 h-5 bg-brand-navy rounded mr-3"></div>
      <h2 className="font-bold text-base md:text-lg">{title}</h2>
      <div className="flex-1 mx-3 border-t border-brand-border"></div>
      {rightLabel && (
        <span className="text-xs md:text-sm text-brand-gray">{rightLabel}</span>
      )}
    </div>
  );
}
