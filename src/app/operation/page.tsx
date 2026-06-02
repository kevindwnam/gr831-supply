import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "운영 방식 | GR831 콘텐츠 공급 가맹",
  description:
    "전국 통일 회차 운영, 본사 직접 채점, 시험 다음 주 금요일 성적표 자동 발송. 가맹 학원은 QR 출석과 답안지 스캔 전송만 담당.",
};

export default function OperationPage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="OPERATIONS"
        title="운영 방식"
        subtitle="콘텐츠 공급 · 채점 · 성적표 발송"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">콘텐츠는 본사, 수업은 학원</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            본사는 콘텐츠 제작 · 인쇄 · 배송 · 채점 · 분석표 발송 · 매일국어 발송 등 학사 운영의 핵심을 담당하고, 가맹 학원은 학생 모집 · <strong>수업 진행</strong> · 현장 관리 · 학부모 응대를 담당합니다.
          </p>
        </div>
      </section>

      {/* 통일 회차 운영 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="통일 회차 운영" rightLabel="전국 가맹 학원 동일 회차" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <h3 className="font-serif-kr font-bold text-lg lg:text-xl">매주 1개 회차, 전국 GR831 가맹 학원이 함께 진행합니다</h3>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            GR831은 매주 본사가 지정한 <strong>1개의 회차</strong>를 전국 가맹 학원이 동일하게 진행합니다. 학원 자체 판단으로 다른 회차를 별도 운영하는 것은 어려우며, 매주 제공되는 회차로 운영해주시기 바랍니다.
          </p>

          {/* 이유 강조 박스 */}
          <div className="mt-5 p-4 bg-brand-bg rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">📊</span>
              <div>
                <div className="font-bold text-sm lg:text-base">왜 통일 회차 운영인가</div>
                <div className="text-xs lg:text-sm text-brand-gray mt-1 leading-relaxed">
                  매주 발송되는 성적표 분석에는 <strong className="text-brand-navy">전국 GR831 수강생 전체 평균 데이터</strong>가 포함됩니다. 학생이 같은 회차를 응시한 전국 수강생 안에서 본인의 위치를 정확히 비교할 수 있도록, 통일 회차 운영이 필요합니다.
                </div>
              </div>
            </div>
          </div>

          {/* 운영 룰 */}
          <div className="mt-5">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">주간 진행 룰</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand-navy font-bold shrink-0">✓</span>
                <span>매주 본사가 제공하는 그 주의 1개 회차로 수업 진행</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-navy font-bold shrink-0">✓</span>
                <span>수업 요일은 학원이 자율로 결정 (월·화·수·목·금·토 어느 요일이든 가능)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-navy font-bold shrink-0">✓</span>
                <span><strong>당주 일요일 자정 전까지</strong> 수업 완료 + 답안지 스캔본 본사 전송 마감</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-navy font-bold shrink-0">✓</span>
                <span>마감 시간 초과 시 해당 주 성적표 발송이 지연될 수 있음</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 주간 운영 흐름 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="주간 운영 흐름" rightLabel="요일별 프로세스" />
        <div className="bg-white rounded-2xl border border-brand-border overflow-hidden divide-y divide-brand-border">

          <div className="p-5 lg:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center font-serif-kr font-bold shrink-0">월</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base">수강 인원 전달</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">가맹 학원 → 본사 (카카오톡 채널로 엑셀 파일 전송)</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center font-serif-kr font-bold shrink-0">화</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base">콘텐츠 인쇄 &amp; 일괄 배송</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">📦 지류 배송: 문제지·워크북·답안지 + 💻 학습웹: 해설지·강의노트·모범답안·해설영상·개념영상</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center font-serif-kr font-bold shrink-0 text-xs">월~금</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base">매일국어 1컷 발송</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">매일 아침 8시 카카오톡으로 9단계 카드뉴스 자동 발송 (15분 분량)</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 flex items-center gap-4 bg-brand-bg">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-serif-kr font-bold shrink-0 text-[10px] leading-tight text-center">수업<br />일</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base text-brand-navy">학원 자체 수업 진행</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">학원이 정한 요일에 자체 강사가 모의고사 응시 감독 + 해설강의 진행 (수업 요일은 학원 자율)</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center font-serif-kr font-bold shrink-0">일</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base">답안지 회송</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">가맹 학원이 답안지 PDF 스캔해 카카오톡 소통방으로 전달 (<strong>당주 일요일 자정 전까지 필수</strong>)</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center font-serif-kr font-bold shrink-0 text-[10px] leading-tight text-center">다음<br />주 금</div>
            <div className="flex-1">
              <div className="font-bold text-sm lg:text-base">채점지 &amp; 분석표 발송</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-0.5">본사가 <strong>시험 다음 주 금요일 저녁 7시</strong> 학생/학부모에게 직접 발송</div>
            </div>
          </div>

        </div>
      </section>

      {/* 역할 분담 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="역할 분담" rightLabel="본사 vs 가맹 학원" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">본사 담당</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 콘텐츠 제작 (지류 + 학습웹 자료 일체)</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 📦 지류 인쇄 &amp; 배송 (문제지·워크북·답안지)</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 💻 학습웹 제공 (해설지·강의노트·모범답안·해설영상·개념영상)</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 매일국어 1컷 자동 발송 (월~금 아침 8시)</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 답안 채점 &amp; 분석표 제작</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 성적표 등 학생/학부모 정기 발송</li>
              <li className="flex items-start gap-2"><span className="text-brand-navy font-bold">·</span> 학원 관리자 페이지 운영</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
            <div className="text-xs font-bold text-brand-gray tracking-widest mb-3">가맹 학원 담당</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-brand-gray font-bold">·</span> <strong>현장 QR 출석</strong> 체크</li>
              <li className="flex items-start gap-2"><span className="text-brand-gray font-bold">·</span> 답안지 스캔 &amp; 본사 전송 (당주 일요일 자정 전까지)</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-brand-dark text-white rounded-xl text-center text-sm lg:text-base">
          ⚠️ <strong>수업은 가맹 학원이 직접 진행합니다.</strong> 본사는 콘텐츠 공급과 채점·분석에 집중합니다.
        </div>
      </section>

      {/* 매주 채점 사이클 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <SectionHeader title="매주 채점 사이클" rightLabel="본사가 직접" />
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            {[
              { step: "STEP 1 · 수업일", title: "학원 자체 수업", desc: "모의고사 응시 + 해설강의" },
              { step: "STEP 2 · 일요일", title: "답안지 스캔 전송", desc: "학원 → 본사 (자정 전까지)" },
              { step: "STEP 3 · 다음 주 평일", title: "본사 직접 채점", desc: "손으로 정밀 분석" },
              { step: "STEP 4 · 다음 주 금 7PM", title: "성적표 자동 발송", desc: "학생·학부모 알림톡" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-brand-bg rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">{step}</div>
                <div className="font-bold text-sm">{title}</div>
                <div className="text-xs text-brand-gray mt-2">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
