import Link from "next/link";

interface MenuCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  layout?: "horizontal" | "vertical";
}

export default function MenuCard({
  icon,
  title,
  description,
  href,
  layout = "horizontal",
}: MenuCardProps) {
  if (layout === "vertical") {
    return (
      <Link
        href={href}
        className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6 hover:-translate-y-0.5 hover:shadow-md transition flex items-center gap-4 lg:flex-col lg:text-center lg:gap-0"
      >
        <div className="w-14 h-14 rounded-xl bg-brand-bg flex items-center justify-center text-2xl shrink-0 lg:mb-3">
          {icon}
        </div>
        <div className="flex-1">
          <div className="font-bold text-base lg:text-lg">{title}</div>
          <div className="text-xs lg:text-sm text-brand-gray mt-1">{description}</div>
        </div>
        <span className="text-brand-gray lg:hidden">›</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6 hover:-translate-y-0.5 hover:shadow-md transition flex items-center gap-4"
    >
      <div className="w-14 h-14 rounded-xl bg-brand-bg flex items-center justify-center text-2xl shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-base">{title}</div>
        <div className="text-xs text-brand-gray mt-1">{description}</div>
      </div>
      <span className="text-brand-gray">›</span>
    </Link>
  );
}
