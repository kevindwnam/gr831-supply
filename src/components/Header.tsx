import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-brand-border">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 py-5 lg:py-6 text-center">
        <Link href="/" className="inline-block">
          <h1 className="font-serif-kr text-3xl lg:text-4xl tracking-tight">
            <span className="text-brand-navy font-black">GR831</span>
          </h1>
        </Link>
        <p className="mt-2 text-xs lg:text-sm text-brand-gray">약술형논술 콘텐츠 공급 가맹</p>
      </div>
    </header>
  );
}
