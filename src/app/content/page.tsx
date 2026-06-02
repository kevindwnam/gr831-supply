import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "공급 콘텐츠 | GR831 콘텐츠 공급 가맹",
  description:
    "47회 모의고사 + 5대 자료 + 매일국어 1컷 + 학습웹. 지류 3종(문제지·워크북·답안지) + 학습웹 5종(해설지·강의노트·모범답안·해설영상·개념영상). 출제 적중률 수학 90% / 국어 80%.",
};

export default function ContentPage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="CONTENTS"
        title="공급 콘텐츠"
        subtitle="47회 모의고사 · 5대 자료 · 매일국어 · 학습웹"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">한 해 47회 모의고사 + 풍부한 학습 자료</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            한 해 47회 모의고사를 중심으로, 정밀하게 설계된 5대 학습 자료, 매일국어 1컷, QR 출석으로 자동 오픈되는 스마트 학습웹, 그리고 매주 발송되는 정밀 성적 분석표까지 — GR831이 가맹 학원에 공급하는 모든 학습 콘텐츠를 안내합니다.
          </p>
        </div>
      </section>

      {/* 47회 모의고사 시스템 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="47회 모의고사 시스템" rightLabel="연간 콘텐츠" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <p className="text-sm lg:text-base leading-relaxed">
            한 해 47회의 자체 제작 모의고사로 약술형논술을 완성합니다. <strong>정규 27회 + 파이널 20회</strong>로 시기별 목표에 맞춰 단계적 학습이 진행됩니다.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="bg-brand-bg rounded-xl p-4 lg:p-5 text-center">
              <div className="text-xs font-bold text-brand-navy tracking-widest">REGULAR</div>
              <div className="font-serif-kr font-black text-3xl lg:text-4xl mt-2">27<span className="text-base lg:text-xl">회</span></div>
              <div className="text-xs lg:text-sm text-brand-gray mt-2">정규 모의고사</div>
              <div className="text-[10px] lg:text-xs text-brand-gray mt-1">5월~10월 · 매주 1회</div>
            </div>
            <div className="bg-brand-bg rounded-xl p-4 lg:p-5 text-center">
              <div className="text-xs font-bold text-brand-navy tracking-widest">FINAL</div>
              <div className="font-serif-kr font-black text-3xl lg:text-4xl mt-2">20<span className="text-base lg:text-xl">회</span></div>
              <div className="text-xs lg:text-sm text-brand-gray mt-2">파이널 모의고사</div>
              <div className="text-[10px] lg:text-xs text-brand-gray mt-1">11월. 10일간 매일 2회</div>
              <div className="text-[10px] lg:text-xs text-brand-navy mt-2 pt-2 border-t border-brand-border">콘텐츠만 공급 · 채점 미포함</div>
            </div>
          </div>

          {/* 시기별 학습 단계 */}
          <div className="mt-6">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">시기별 학습 단계 · 정규반</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {[
                { code: "S1", month: "5월 · 기본 확립", desc: "감점 없는 답안 습관" },
                { code: "S2", month: "6월 · 연계 학습", desc: "수능특강 유형 정복" },
                { code: "S3", month: "7월 · 심화 학습", desc: "수능완성 복합 유형" },
                { code: "S4", month: "8월 · 실전 강화", desc: "시간 실수 관리" },
                { code: "S5", month: "9월 · 전략 수립", desc: "학생별 맞춤 전략" },
                { code: "S6", month: "10월 · 파이널 전략", desc: "실전 환경 연습" },
              ].map(({ code, month, desc }) => (
                <div key={code} className="bg-brand-bg rounded-lg p-3 flex gap-3 items-start">
                  <span className="font-bold text-brand-navy shrink-0">{code}</span>
                  <div>
                    <div className="text-sm font-bold">{month}</div>
                    <div className="text-xs text-brand-gray mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 출제 적중률 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="출제 적중률" rightLabel="26학년도 가천대" />
        <div className="bg-brand-dark text-white rounded-2xl p-6 lg:p-10">
          <p className="text-sm lg:text-base text-gray-300 text-center mb-6">
            26학년도 가천대 시험 ↔ GR831 파이널 모의고사 <strong className="text-white">실제 출제 문항 매핑 분석</strong>
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <div className="text-center border-r border-gray-700">
              <div className="text-xs text-brand-blue font-bold tracking-widest mb-2">MATH</div>
              <div className="font-serif-kr font-black text-5xl lg:text-7xl text-white">90<span className="text-2xl lg:text-4xl">%</span></div>
              <div className="text-xs lg:text-sm text-gray-300 mt-3">수학 과목 적중</div>
              <div className="text-[10px] lg:text-xs text-gray-400 mt-1">EBS 기반 유형·변형 적중</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-brand-blue font-bold tracking-widest mb-2">KOREAN</div>
              <div className="font-serif-kr font-black text-5xl lg:text-7xl text-white">80<span className="text-2xl lg:text-4xl">%</span></div>
              <div className="text-xs lg:text-sm text-gray-300 mt-3">국어 과목 적중</div>
              <div className="text-[10px] lg:text-xs text-gray-400 mt-1">지문 형태·요소 적중</div>
            </div>
          </div>
          <p className="text-xs lg:text-sm text-gray-400 text-center mt-6 leading-relaxed">
            * 지문 자체는 EBS 연계 출제 특성상 자동 100% 적중되며,<br className="hidden lg:block" />
            위 수치는 <strong className="text-white">실제 시험 출제 문항 기준</strong>의 적중률입니다.
          </p>
        </div>
      </section>

      {/* 학습 자료 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="학습 자료" rightLabel="지류 3종 + 학습웹 5종" />

        {/* 지류 배송 그룹 */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📦</span>
            <div>
              <div className="font-bold text-base lg:text-lg">지류 인쇄 &amp; 배송 (3종)</div>
              <div className="text-xs text-brand-gray">매주 화요일 일괄 배송</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {[
              { icon: "📄", title: "문제지", desc: "자체 제작 시험지 · 매주 1회" },
              { icon: "📘", title: "워크북", desc: "매주 2배수 복습 문제" },
              { icon: "📝", title: "답안지", desc: "가천대 OMR 양식 동일" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-brand-bg rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <div className="font-bold text-sm">{title}</div>
                    <div className="text-xs text-brand-gray mt-1">{desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 학습웹 제공 그룹 */}
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8 mt-3">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💻</span>
            <div>
              <div className="font-bold text-base lg:text-lg">학습웹 제공 (5종)</div>
              <div className="text-xs text-brand-gray">QR 출석 시 학생 개인별 자동 오픈</div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[
              { icon: "📖", title: "해설지", desc: "상세 풀이 과정 + 출제 의도" },
              { icon: "📑", title: "강의노트", desc: "개념 정리 + 시즌별 압축 가이드" },
              { icon: "✏️", title: "모범답안", desc: "채점 기준 + 부분점수 명시" },
              { icon: "🎬", title: "해설영상 32개", desc: "국어·수학 단계별 풀이 강의" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-brand-bg rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <span className="text-xl shrink-0">{icon}</span>
                  <div>
                    <div className="font-bold text-sm">{title}</div>
                    <div className="text-xs text-brand-gray mt-1">{desc}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-brand-bg rounded-xl p-4 lg:col-span-2">
              <div className="flex items-start gap-2">
                <span className="text-xl shrink-0">💡</span>
                <div>
                  <div className="font-bold text-sm">개념영상</div>
                  <div className="text-xs text-brand-gray mt-1">기초 개념 보강 영상 · 학생 자율 학습용</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 매일국어 1컷 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="매일국어 1컷" rightLabel="매일 아침 8시" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <h3 className="font-serif-kr font-bold text-lg lg:text-xl">매일 아침 8시, 15분의 약속</h3>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            학원에 다니는 모든 학생에게 매일 아침 <strong>8시 카카오톡</strong>으로 도착하는 <strong>9단계 카드뉴스</strong>. 15분이면 완주하는 분산학습으로 핵심 지문이 머리에 자연스럽게 자리잡습니다.
          </p>

          <div className="mt-5">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">9단계 학습 사이클</div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "정독", step: "4단계" },
                { label: "재이해", step: "1단계" },
                { label: "정리", step: "2단계" },
                { label: "적용", step: "1단계" },
              ].map(({ label, step }) => (
                <div key={label} className="bg-brand-bg rounded-lg p-3 text-center">
                  <div className="text-xs font-bold">{label}</div>
                  <div className="text-[10px] text-brand-gray mt-1">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 bg-brand-bg rounded-xl p-4 text-center">
            <div className="text-xs text-brand-gray">월~금 · 5~10월 누적</div>
            <div className="mt-1 text-base font-bold">핵심 지문 <span className="font-serif-kr text-3xl text-brand-navy">130편</span> 정복</div>
          </div>
        </div>
      </section>

      {/* 스마트 학습웹 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="스마트 학습웹" rightLabel="QR 출석 → 자동 오픈" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <h3 className="font-serif-kr font-bold text-lg lg:text-xl">
            QR 출석 한 번으로,<br />
            학생 개인 학습 콘텐츠가 자동으로 열립니다
          </h3>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            시험지 <strong>두 번째 페이지의 QR 코드</strong>로 출석 체크 한 번이면, 수업이 끝나는 동시에 학생 개인 학습 콘텐츠가 자동으로 열립니다. <strong>시간 제약 없이 무한 반복 학습</strong>이 가능합니다.
          </p>

          {/* 3단계 흐름 */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="bg-brand-bg rounded-xl p-4">
              <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">STEP 1</div>
              <div className="font-bold text-base">QR 출석 체크</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">시험지 <strong>두 번째 페이지의 QR 코드</strong>로 출석 체크</div>
              <div className="mt-3 pt-3 border-t border-brand-border text-xs text-brand-gray space-y-1">
                <div>→ 학생 휴대폰으로 직접 체크</div>
                <div>→ 또는 학원에서 수기 체크</div>
              </div>
            </div>
            <div className="bg-brand-bg rounded-xl p-4">
              <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">STEP 2</div>
              <div className="font-bold text-base">학습 콘텐츠 자동 오픈</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">수업 종료와 동시에 학생 개인별로 GR831 자체 학습웹에서 자동 활성화</div>
            </div>
            <div className="bg-brand-bg rounded-xl p-4">
              <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">STEP 3</div>
              <div className="font-bold text-base">무한 반복 학습</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-2 leading-relaxed">시간·횟수 제약 없이 원하는 만큼 반복 학습</div>
            </div>
          </div>

          {/* 5종 콘텐츠 */}
          <div className="mt-6">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">자동 오픈되는 학습 콘텐츠</div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-xs">
              <div className="bg-brand-bg rounded-lg p-3 text-center">📖 해설지</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">✏️ 모범답안</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">📑 강의노트</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center">🎬 해설영상 32개</div>
              <div className="bg-brand-bg rounded-lg p-3 text-center col-span-2 lg:col-span-1">💡 개념영상</div>
            </div>
          </div>
        </div>
      </section>

      {/* 학원 관리자 페이지 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="학원 관리자 페이지" rightLabel="가맹 학원 전용" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <p className="text-sm lg:text-base leading-relaxed">
            가맹 학원 전용 <strong>관리자 페이지</strong>에서 학생들의 학습 현황과 출석을 실시간으로 확인할 수 있습니다. 데이터 기반으로 학부모 상담과 학생 케어를 효과적으로 진행하세요.
          </p>

          <div className="mt-5 p-4 bg-brand-bg rounded-lg border border-brand-navy">
            <div className="flex items-center gap-2">
              <span className="text-lg">🔐</span>
              <div className="flex-1">
                <div className="text-xs font-bold text-brand-navy">학원 전용 관리자 페이지 + 아이디 제공</div>
                <div className="text-[10px] text-brand-gray mt-0.5">학원별 독립 계정으로 24시간 접속 가능</div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-brand-border">
            <div className="text-xs font-bold text-brand-navy tracking-widest mb-3">확인 가능한 데이터</div>
            <ul className="text-xs lg:text-sm space-y-1.5 text-brand-gray">
              <li>· QR 출석 체크 기록</li>
              <li>· 매주 모의고사 성적표</li>
              <li>· 매일 학습 완료 / 미완료 현황</li>
              <li>· 학습 진도 추적</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 매주 성적표 발송 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <SectionHeader title="매주 성적표 발송" rightLabel="정규 모의고사 한정" />
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h3 className="font-serif-kr font-bold text-lg lg:text-xl">본사 직접 채점 · 시험 다음 주 금요일 자동 발송</h3>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            가맹 학원이 <strong>당주 일요일 자정 전까지</strong> 답안지 스캔본을 보내주시면, <strong>본사가 직접 손으로 채점</strong>한 채점지와 분석 성적표를 <strong>시험 다음 주 금요일 저녁 7시</strong> 학생·학부모에게 알림톡으로 자동 발송합니다.
          </p>

          {/* 전국 평균 데이터 강조 */}
          <div className="mt-5 p-4 bg-brand-bg rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">📊</span>
              <div>
                <div className="font-bold text-sm lg:text-base">전국 GR831 수강생 평균 데이터 포함</div>
                <div className="text-xs lg:text-sm text-brand-gray mt-1 leading-relaxed">
                  같은 회차를 응시한 <strong className="text-brand-navy">전국 GR831 수강생 전체 평균</strong>이 분석표에 포함되어, 학생이 자신의 위치를 정확히 비교할 수 있습니다.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
            {[
              { label: "ALIMTALK", title: "자동 알림톡", desc: "학생·학부모 동시 전송" },
              { label: "REPORT", title: "정밀 분석표", desc: "개인별 학습 완성 현황" },
              { label: "HAND GRADED", title: "손으로 채점", desc: "정성스러운 분석 코멘트" },
            ].map(({ label, title, desc }) => (
              <div key={label} className="bg-brand-bg rounded-xl p-4 text-center">
                <div className="text-xs font-bold text-brand-navy tracking-widest mb-2">{label}</div>
                <div className="font-bold text-sm">{title}</div>
                <div className="text-xs text-brand-gray mt-1">{desc}</div>
              </div>
            ))}
          </div>

          {/* 파이널 미제공 안내 */}
          <div className="mt-5 p-4 bg-brand-bg rounded-xl text-xs lg:text-sm leading-relaxed">
            ⚠️ <strong>파이널 특강(11월, 매일 2회차)</strong>은 매일 진행되는 단기 집중 과정 특성상 채점 사이클 운영이 어려워, <strong className="text-brand-navy">채점 및 성적표 발송 서비스는 제공되지 않습니다.</strong> 콘텐츠(문제지·해설지·강의노트·모범답안·해설영상 등)만 공급됩니다.
          </div>
        </div>
      </section>

    </main>
  );
}
