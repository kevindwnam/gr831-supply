import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "GR831 소개 | GR831 콘텐츠 공급 가맹",
  description:
    "가천대 약술형논술 자문위원 출신 연구진. 3개년 누적 353명 합격. 약술형논술 단일 분야 6년차 전문 기관.",
};

export default function AboutPage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="ABOUT GR831"
        title="GR831 소개"
        subtitle="약술형논술 전문 6년 · 검증된 콘텐츠"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">가천대 약술형논술 자문위원 출신 연구진</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            GR831약술형논술연구소는 가천대학교 약술형논술 자문위원 출신 연구원들로 구성된 6년차 전문 기관입니다.
            출제 의도를 가장 잘 아는 팀이 직접 콘텐츠를 제작하고, 매주 학생 답안을 채점합니다.{" "}
            <strong>약술형논술 전형 단일 콘텐츠로 6년간 누적 353명 합격</strong>을 만들어낸 검증된 자료를 가맹 학원에 그대로 공급합니다.
          </p>
        </div>
      </section>

      {/* 3개년 누적 합격 실적 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="3개년 누적 합격 실적" rightLabel="가천대학교" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-10">
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            <div className="text-center">
              <div className="text-xs lg:text-sm text-brand-gray">24학년도</div>
              <div className="font-serif-kr font-black text-3xl lg:text-5xl mt-2">98<span className="text-base lg:text-2xl">명</span></div>
            </div>
            <div className="text-center border-x border-brand-border">
              <div className="text-xs lg:text-sm text-brand-gray">25학년도</div>
              <div className="font-serif-kr font-black text-3xl lg:text-5xl mt-2">120<span className="text-base lg:text-2xl">명</span></div>
            </div>
            <div className="text-center">
              <div className="text-xs lg:text-sm text-brand-navy font-bold">26학년도</div>
              <div className="font-serif-kr font-black text-3xl lg:text-5xl mt-2 text-brand-navy">135<span className="text-base lg:text-2xl">명</span></div>
            </div>
          </div>
          <p className="text-center text-xs lg:text-sm text-brand-gray mt-6 leading-relaxed">
            가천대학교 약술형논술 전형 합격생 <strong className="text-brand-black">전국 최다 배출</strong><br />
            매년 합격생 수가 증가하는 검증된 콘텐츠 · 강사진 · 시스템
          </p>
        </div>
      </section>

      {/* 본사의 역할 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="본사의 역할" rightLabel="콘텐츠 + 시스템" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">

          {/* 카드 1: 콘텐츠 제작 & 공급 */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
              <div className="flex-1">
                <div className="font-bold text-base">콘텐츠 제작 &amp; 공급</div>
                <div className="text-sm text-brand-gray mt-2 leading-relaxed">47회 자체 제작 모의고사를 두 가지 방식으로 매주 공급합니다.</div>
                <div className="mt-3 space-y-2 text-xs lg:text-sm">
                  <div className="flex items-start gap-2 p-2 bg-brand-bg rounded-lg">
                    <span className="shrink-0">📦</span>
                    <div><strong>지류 배송 (3종)</strong> · 문제지 · 워크북 · 답안지</div>
                  </div>
                  <div className="flex items-start gap-2 p-2 bg-brand-bg rounded-lg">
                    <span className="shrink-0">💻</span>
                    <div><strong>학습웹 제공 (5종)</strong> · 해설지 · 강의노트 · 모범답안 · 해설영상 · 개념영상</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 카드 2: 매일국어 1컷 */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <div className="font-bold text-base">매일국어 1컷 자동 발송</div>
                <div className="text-sm text-brand-gray mt-1 leading-relaxed">매일 아침 8시 학생 카카오톡으로 9단계 카드뉴스 자동 발송 · 월~금 5~10월</div>
              </div>
            </div>
          </div>

          {/* 카드 3: 답안 채점 & 분석표 */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <div className="font-bold text-base">답안 채점 &amp; 분석표 제작</div>
                <div className="text-sm text-brand-gray mt-1 leading-relaxed">학원이 스캔해 보낸 답안을 <strong>본사가 직접 채점</strong>, 매주 <strong>금요일 저녁 7시</strong> 학생/학부모에게 자동 발송</div>
              </div>
            </div>
          </div>

          {/* 카드 4: 학습웹 + 관리자 */}
          <div className="bg-white rounded-2xl border border-brand-border p-5 lg:p-6">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <div className="font-bold text-base">학습웹 + 학원 관리자 페이지</div>
                <div className="text-sm text-brand-gray mt-1 leading-relaxed">QR 출석 시 학생 개인별 학습 콘텐츠 자동 오픈 + 학원 전용 관리자 페이지 제공</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 신뢰도 다크 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <div className="bg-brand-dark text-white rounded-2xl p-8 lg:p-12 text-center">
          <div className="text-xs font-bold text-brand-blue tracking-widest mb-3">CREDENTIALS</div>
          <h3 className="font-serif-kr font-black text-2xl lg:text-3xl">6년의 공력 · 검증된 시스템</h3>
          <p className="text-sm lg:text-base text-gray-300 mt-4 leading-relaxed">
            가천대학교 약술형논술 자문위원 출신 연구진이 6년간 약술형논술 하나에만 집중해온 결과입니다.<br className="hidden lg:block" />
            출제 의도를 가장 잘 아는 팀이 만든 콘텐츠가 가맹 학원으로 그대로 전달됩니다.
          </p>
        </div>
      </section>

    </main>
  );
}
