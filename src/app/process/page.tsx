import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    num: 1,
    title: "카카오톡 상담 신청",
    desc: "카카오톡 채널로 가맹 문의 및 기본 정보 전달",
    highlight: false,
  },
  {
    num: 2,
    title: "사업 설명",
    desc: "본사가 보내드리는 가맹 정보 웹페이지 참고 · 추가 문의는 본사 상담자와 온라인으로 진행",
    highlight: false,
  },
  {
    num: 3,
    title: "콘텐츠 샘플 검토",
    desc: "실제 모의고사·해설지·모범답안 샘플 자료 제공 · 학원 자체 강사진과 함께 검토",
    highlight: false,
  },
  {
    num: 4,
    title: "계약 체결",
    desc: "정식 가맹 계약서 작성 · 가입비/계약금 없음",
    highlight: false,
  },
  {
    num: 5,
    title: "시스템 세팅",
    desc: "학원 관리자 페이지 발급 · 학생 명단 등록 · 학습웹 연동",
    highlight: false,
  },
  {
    num: 6,
    title: "콘텐츠 공급 개시 🎉",
    desc: "매주 콘텐츠 배송 시작 → 학원 자체 수업 진행 → 본사 채점 → 성적표 발송 사이클 시작",
    highlight: true,
  },
];

export default function ProcessPage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="PROCESS"
        title="진행 절차"
        subtitle="문의부터 개시까지 6단계"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">상담부터 개시까지</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            가입비·계약금 없이 시작 가능합니다. 문의 후 빠르면 1~2주 안에 콘텐츠 공급이 시작됩니다.
          </p>
        </div>
      </section>

      {/* 6단계 진행 절차 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <SectionHeader title="6단계 진행 절차" rightLabel="예상 1~2주" />
        <div className="space-y-3">
          {steps.map(({ num, title, desc, highlight }) => (
            <div
              key={num}
              className={`bg-white rounded-2xl p-5 lg:p-6 flex items-center gap-4 ${
                highlight ? "border-2 border-brand-navy" : "border border-brand-border"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-brand-navy text-white font-serif-kr font-black text-lg flex items-center justify-center shrink-0">
                {num}
              </div>
              <div className="flex-1">
                <div className={`font-bold text-base${highlight ? " text-brand-navy" : ""}`}>
                  {title}
                </div>
                <div className="text-xs lg:text-sm text-brand-gray mt-1">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
