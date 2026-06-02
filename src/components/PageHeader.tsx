import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5">
      <Link href="/" className="text-sm text-brand-gray hover:text-brand-black">
        ← 홈
      </Link>
      <div className="mt-3 text-center">
        <div className="text-xs font-bold text-brand-navy tracking-widest">{label}</div>
        <h1 className="mt-2 font-serif-kr font-black text-2xl md:text-3xl lg:text-4xl">{title}</h1>
        <p className="mt-2 text-sm md:text-base text-brand-gray">{subtitle}</p>
      </div>
    </section>
  );
}
