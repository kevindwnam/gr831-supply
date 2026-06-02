import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import MenuCard from "@/components/MenuCard";

export default function Home() {
  return (
    <main className="py-6 lg:py-10">

      {/* Hero 카드 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-5">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-10">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8">

            {/* 좌측: 텍스트 */}
            <div className="lg:col-span-3">
              <div className="text-xs font-bold text-brand-navy tracking-widest">FOR ACADEMY OWNERS</div>
              <h2 className="mt-4 font-serif-kr font-black text-2xl md:text-3xl lg:text-4xl leading-tight">
                검증된 약술형논술 콘텐츠,<br />
                <span className="text-brand-navy">학원에 그대로 공급합니다</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-brand-gray leading-relaxed">
                2026학년도 가천대 135명 합격을 만든 GR831약술형논술연구소의 콘텐츠와 시스템을 학원에 공급합니다.{" "}
                <strong>수업은 학원에서, 콘텐츠와 채점은 본사가</strong> 책임집니다.
              </p>
              <div className="mt-5 space-y-2.5">
                <div className="flex items-start gap-3">
                  <span className="text-brand-navy font-bold shrink-0">✓</span>
                  <span className="text-sm md:text-base">강사진은 있지만 콘텐츠 제작이 어려운 학원에 검증된 자료 그대로</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-navy font-bold shrink-0">✓</span>
                  <span className="text-sm md:text-base">자체 제작 47회 모의고사 + 5대 자료 + 매일국어 1컷</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-navy font-bold shrink-0">✓</span>
                  <span className="text-sm md:text-base">본사 직접 채점 + 매주 금요일 성적표 자동 발송</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-navy font-bold shrink-0">✓</span>
                  <span className="text-sm md:text-base">데이터로 입증된 적중률 · 수학 90% / 국어 80%</span>
                </div>
              </div>
            </div>

            {/* 우측: 합격 실적 박스 */}
            <div className="lg:col-span-2 mt-6 lg:mt-0">
              <div className="bg-brand-bg rounded-xl p-5 lg:p-6">
                <div className="text-xs text-brand-gray tracking-widest text-center mb-3">가천대학교 합격생 추이</div>
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-0">
                  <div className="lg:flex lg:items-center lg:justify-between lg:py-2 lg:border-b lg:border-brand-border text-center lg:text-left">
                    <div className="text-xs text-brand-gray">24학년도</div>
                    <div className="font-serif-kr font-black text-2xl lg:text-3xl">98<span className="text-xs lg:text-base">명</span></div>
                  </div>
                  <div className="lg:flex lg:items-center lg:justify-between lg:py-2 lg:border-b lg:border-brand-border text-center lg:text-left">
                    <div className="text-xs text-brand-gray">25학년도</div>
                    <div className="font-serif-kr font-black text-2xl lg:text-3xl">120<span className="text-xs lg:text-base">명</span></div>
                  </div>
                  <div className="lg:flex lg:items-center lg:justify-between lg:py-2 text-center lg:text-left">
                    <div className="text-xs lg:text-sm text-brand-navy font-bold">26학년도</div>
                    <div className="font-serif-kr font-black text-3xl lg:text-5xl text-brand-navy">135<span className="text-sm lg:text-xl">명</span></div>
                  </div>
                </div>
                <div className="text-center text-[10px] md:text-xs text-brand-gray mt-3">
                  GR831약술형논술연구소 · 전국 최다 합격률
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 섹션 1: 콘텐츠 공급 가맹이란? */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="콘텐츠 공급 가맹이란?" rightLabel="사업 개요" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <MenuCard icon="🏛️" title="GR831 소개" description="3개년 합격 실적 · 본사 소개" href="/about" layout="vertical" />
          <MenuCard icon="📚" title="공급 콘텐츠" description="47회 모의고사 · 5대 자료 · 학습웹" href="/content" layout="vertical" />
          <MenuCard icon="⚙️" title="운영 방식" description="주간 흐름 · 채점/배송 · 역할 분담" href="/operation" layout="vertical" />
        </div>
      </section>

      {/* 섹션 2: 가맹 상세 정보 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <SectionHeader title="가맹 상세 정보" rightLabel="수익 · 절차 · 계약" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <MenuCard icon="💰" title="수익 구조" description="콘텐츠 정산 · 손익 시뮬레이션" href="/revenue" layout="horizontal" />
          <MenuCard icon="📋" title="진행 절차" description="문의부터 개시까지" href="/process" layout="horizontal" />
          <MenuCard icon="📜" title="계약 조건" description="계약 기간 · 환불 · 위약" href="/contract" layout="horizontal" />
        </div>
      </section>

      {/* 하단 메인 CTA */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <div className="bg-brand-dark text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-serif-kr font-black text-2xl lg:text-3xl">콘텐츠 공급 가맹 상담</h3>
          <p className="text-sm lg:text-base text-gray-300 mt-3">
            카카오톡 채널로 문의주시면 콘텐츠 샘플과 계약 정보를 안내드립니다.
          </p>
          <Link
            href="http://pf.kakao.com/_gchYG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-brand-blue text-white rounded-full py-3 px-8 font-bold hover:opacity-90 transition"
          >
            카카오톡 상담하기 →
          </Link>
        </div>
      </section>

    </main>
  );
}
