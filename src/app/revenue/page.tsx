import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

export default function RevenuePage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="REVENUE"
        title="수익 구조"
        subtitle="콘텐츠 정산 · 손익 시뮬레이션"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">콘텐츠 공급 정산 안내</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            본사는 콘텐츠와 시스템을 공급하고, 가맹 학원이 본사에 정산하는 금액만 명확히 제시합니다.{" "}
            <strong>학생 수강료와 교재비는 가맹 학원이 자율적으로 책정</strong>합니다.
          </p>
          <div className="mt-4 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm">
            📌 본 페이지의 모든 수치는 학생 1명 기준입니다. <strong>비과세 사업</strong>으로 부가세는 별도 발생하지 않습니다.
          </div>
        </div>
      </section>

      {/* 본사 정산 금액 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="본사 정산 금액" rightLabel="학생 1명 · 회당" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

          {/* 정규 모의고사 (강조) */}
          <div className="bg-white rounded-2xl border-2 border-brand-navy p-6 lg:p-8">
            <div className="text-xs font-bold text-brand-navy tracking-widest">REGULAR · 정규 모의고사</div>
            <div className="mt-3">
              <div className="font-serif-kr font-black text-4xl lg:text-5xl text-brand-navy">
                19,400<span className="text-lg lg:text-2xl">원</span>
              </div>
              <div className="text-xs lg:text-sm text-brand-gray mt-1">학생 1명 / 회당</div>
            </div>
            <div className="mt-4 pt-4 border-t border-brand-border text-xs lg:text-sm text-brand-gray space-y-1">
              <div>· 5월~10월, 매주 1회 · 총 27회</div>
              <div>· 5대 학습 자료 + 매일국어 + 학습웹 포함</div>
              <div>· 본사 채점 + 성적표 자동 발송 포함</div>
            </div>
          </div>

          {/* 파이널 특강 */}
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <div className="text-xs font-bold text-brand-navy tracking-widest">FINAL · 파이널 특강</div>
            <div className="mt-3">
              <div className="font-serif-kr font-black text-4xl lg:text-5xl">
                30,000<span className="text-lg lg:text-2xl">원</span>
              </div>
              <div className="text-xs lg:text-sm text-brand-gray mt-1">학생 1명 / 회당</div>
            </div>
            <div className="mt-4 pt-4 border-t border-brand-border text-xs lg:text-sm text-brand-gray space-y-1">
              <div>· 11월 10일간 · 매일 2회차 · 총 20회</div>
              <div>· 신청한 회차 수만큼 정산</div>
              <div>· 학생 1명 전 회차 수강 시 총 정산 600,000원</div>
            </div>
            <div className="mt-3 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm leading-relaxed">
              ⚠️ 파이널 특강은{" "}
              <strong className="text-brand-navy">콘텐츠 공급만 진행되며, 본사 채점 및 성적표 발송 서비스는 제공되지 않습니다.</strong>
            </div>
          </div>

        </div>
      </section>

      {/* 학생 수별 월 정산 시뮬레이션 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="학생 수별 월 정산 시뮬레이션" rightLabel="정규반 · 회당 19,400원 · 월 4회 기준" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="bg-white rounded-2xl border border-brand-border p-4 lg:p-5 text-center">
            <div className="text-xs text-brand-gray">학생 5명</div>
            <div className="font-serif-kr font-black text-xl lg:text-2xl mt-1 text-brand-navy">39<span className="text-xs">만원</span></div>
            <div className="text-[10px] text-brand-gray mt-1">월 정산</div>
          </div>
          <div className="bg-white rounded-2xl border border-brand-border p-4 lg:p-5 text-center">
            <div className="text-xs text-brand-gray">학생 10명</div>
            <div className="font-serif-kr font-black text-xl lg:text-2xl mt-1 text-brand-navy">78<span className="text-xs">만원</span></div>
            <div className="text-[10px] text-brand-gray mt-1">월 정산</div>
          </div>
          <div className="bg-white rounded-2xl border border-brand-border p-4 lg:p-5 text-center">
            <div className="text-xs text-brand-gray">학생 20명</div>
            <div className="font-serif-kr font-black text-xl lg:text-2xl mt-1 text-brand-navy">155<span className="text-xs">만원</span></div>
            <div className="text-[10px] text-brand-gray mt-1">월 정산</div>
          </div>
          <div className="bg-white rounded-2xl border-2 border-brand-navy p-4 lg:p-5 text-center">
            <div className="text-xs text-brand-navy font-bold">학생 30명</div>
            <div className="font-serif-kr font-black text-xl lg:text-2xl mt-1 text-brand-navy">233<span className="text-xs">만원</span></div>
            <div className="text-[10px] text-brand-gray mt-1">월 정산</div>
          </div>
          <div className="bg-brand-dark text-white rounded-2xl p-4 lg:p-5 text-center col-span-2 lg:col-span-1">
            <div className="text-xs text-brand-blue font-bold">학생 50명</div>
            <div className="font-serif-kr font-black text-xl lg:text-2xl mt-1">388<span className="text-xs">만원</span></div>
            <div className="text-[10px] text-gray-400 mt-1">월 정산</div>
          </div>
        </div>
        <p className="text-xs text-brand-gray mt-3 text-center leading-relaxed">
          💡 가맹 학원이 본사에 매월 정산할 금액 (정규반 · 월 4회 · 비과세).<br />
          학생 수강료는 학원이 자율 책정하며, 학원 수익은 학원 매출에서 위 정산 금액을 차감한 금액입니다.
        </p>
      </section>

      {/* 포함 콘텐츠 안내 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <h3 className="font-serif-kr font-bold text-base lg:text-lg">정산 금액에 포함된 모든 콘텐츠</h3>
          <p className="mt-2 text-sm lg:text-base text-brand-gray leading-relaxed">
            별도 사용료 없음. 모든 콘텐츠가 회당 정산 금액에 포함되어 있습니다.
          </p>

          <div className="mt-5">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">📦 실물 배송</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-brand-bg rounded-lg p-3 text-center">📄 문제지</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📘 워크북</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📝 답안지</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">💻 온라인 학습웹 제공</div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              <div className="bg-brand-bg rounded-lg p-3 text-center">📝 시험지</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📑 강의노트</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📖 해설지</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">✏️ 모범답안</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">🎬 해설영상</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📱 매일국어 1컷</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">🎯 서비스</div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              <div className="bg-brand-bg rounded-lg p-3 text-center">📊 본사 직접 채점</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📩 매주 성적표 발송</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">🔐 학원 관리자 페이지</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
