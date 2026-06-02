import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";

export default function ContractPage() {
  return (
    <main className="py-6 lg:py-10">

      {/* PageHeader */}
      <PageHeader
        label="CONTRACT"
        title="계약 조건"
        subtitle="계약 기간 · 환불 · 위약"
      />

      {/* 인트로 박스 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-8">
        <div className="bg-white rounded-2xl border-t-4 border-brand-navy shadow-sm p-6 lg:p-8">
          <h2 className="font-serif-kr font-bold text-lg lg:text-2xl">투명한 계약, 명확한 권리/의무</h2>
          <p className="mt-3 text-sm lg:text-base leading-relaxed">
            가입비·계약금 없이 시작하며, 모든 계약 조건은 사전에 공개됩니다.
          </p>
        </div>
      </section>

      {/* 계약 기간 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="계약 기간" rightLabel="제5조" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <div className="text-xs text-brand-gray mb-1">계약 유효기간</div>
          <div className="font-serif-kr font-black text-2xl lg:text-3xl">계약 체결일 ~ 당해년도 12월 31일</div>
          <div className="mt-4 p-3 bg-brand-bg rounded-lg text-xs lg:text-sm leading-relaxed">
            📌 계약 만료 1개월 전 (11월 30일까지) 양 당사자 간 합의가 없는 경우 자동 종료. 이후 재계약 여부는 상호 협의합니다.
          </div>
        </div>
      </section>

      {/* 환불 규정 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="환불 규정" rightLabel="제6조" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <div className="flex items-start gap-3">
            <span className="text-brand-navy font-bold text-lg shrink-0">💡</span>
            <div className="flex-1">
              <div className="font-bold text-base lg:text-lg">신청 인원 미수강 시</div>
              <div className="text-sm lg:text-base text-brand-gray mt-2 leading-relaxed">
                신청한 학생이 실제로 수강하지 않은 경우, 콘텐츠 정산 금액은 면제되며 이미 인쇄·배송된 자료에 대한{" "}
                <strong className="text-brand-navy">인쇄 발송비 명당 3,000원</strong>만 청구합니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 위약 조항 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="위약 조항" rightLabel="제4조 · 콘텐츠 보호" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <p className="text-xs lg:text-sm text-brand-gray leading-relaxed mb-4">
            ⚠️ 모든 가맹 학원의 콘텐츠 자산 가치를 보호하기 위해 다음 위약 조항을 운영합니다.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "교재 무단 복제",
                desc: <>건당 <strong className="text-brand-navy">1,000,000원</strong> 위약금</>,
              },
              {
                title: "콘텐츠 공유 · 재판매",
                desc: <>자료 1건당 <strong className="text-brand-navy">10,000,000원</strong> 위약금 + 법적 조치</>,
              },
              {
                title: "교재 단독 판매",
                desc: <>가맹 시스템 없이 본사 콘텐츠만 별도 판매 시 <strong className="text-brand-navy">즉시 해지 + 5,000,000원</strong></>,
              },
              {
                title: "타 브랜드 유사 콘텐츠 사용",
                desc: <>본사 사전 협의 후 사용 가능 · 협의 없이 운영 시 <strong className="text-brand-navy">즉시 해지 + 5,000,000원</strong></>,
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-brand-bg rounded-xl p-4 flex items-start gap-3">
                <span className="text-brand-navy font-bold text-lg shrink-0">!</span>
                <div className="flex-1">
                  <div className="font-bold text-sm">{title}</div>
                  <div className="text-xs text-brand-gray mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 가맹 학원 주요 의무 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="가맹 학원 주요 의무" rightLabel="제6조" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <ul className="space-y-2 text-sm">
            {[
              <>학원 자체 강사를 통한 수업 진행</>,
              <><strong>매주 본사 제공 회차로 수업 운영 (전국 통일 회차)</strong></>,
              <>당주 일요일 자정 전까지 수업 완료 + 답안지 스캔 본사 전송</>,
              <>본사 콘텐츠를 승인된 목적 외 사용 금지</>,
              <>본사 운영 정책, 콘텐츠 사용 가이드 성실 준수</>,
              <>관계 법령 준수 및 학생/학부모 개인정보 보호</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-navy font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DB 관리 정책 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10">
        <SectionHeader title="DB 관리 정책" rightLabel="제7조" />
        <div className="bg-white rounded-2xl border border-brand-border p-6 lg:p-8">
          <ul className="space-y-2 text-sm">
            {[
              <>학생 개인정보는 본사와 공유 (수업·채점·발송 운영 목적)</>,
              <><strong>합격자 명단은 다음해 가맹 연장 시 가맹 학원에 제공</strong></>,
              <><strong>가맹 해지 시에는 본인 가맹 학원 합격생 외 합격자 명단을 사용할 수 없습니다</strong></>,
              <>제3자 제공 · 외부 유출 · 복제 · 재판매 금지</>,
              <>계약 종료 시 본사 제공 DB 지체 없이 파기/반환</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brand-gray font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 계약서 전문 토글 */}
      <section className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-5 pt-10 pb-12">
        <SectionHeader title="계약서 전문 보기" rightLabel="클릭하여 펼치기" />
        <details className="group bg-white rounded-2xl border border-brand-border overflow-hidden">
          <summary className="cursor-pointer p-5 lg:p-6 flex items-center justify-between list-none hover:bg-brand-bg transition">
            <div>
              <div className="font-bold text-base lg:text-lg">『GR831약술형논술연구소 콘텐츠 공급 가맹 계약서』</div>
              <div className="text-xs lg:text-sm text-brand-gray mt-1">전문 9개 조항 · 부칙 포함</div>
            </div>
            <svg className="w-5 h-5 text-brand-gray group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="p-5 lg:p-8 border-t border-brand-border text-sm lg:text-base leading-relaxed space-y-5 max-h-[600px] overflow-y-auto">

            <p className="text-brand-gray">
              본 계약은 GR831약술형논술연구소(이하 &quot;본사&quot;)와 가맹 학원(이하 &quot;가맹점&quot;) 간 약술형논술 콘텐츠 공급 및 채점 서비스에 관한 사항을 정함을 목적으로 한다.
            </p>

            <div>
              <div className="font-bold text-brand-navy">제1조 (계약 목적)</div>
              <p className="mt-2">본 계약은 본사가 자체 제작한 약술형논술 학습 콘텐츠와 채점·분석 시스템을 가맹점에 공급하고, 가맹점이 학원 자체 강사진을 통해 학생 수업을 진행하는 콘텐츠 공급 가맹 사업에 관한 권리·의무를 정한다.</p>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제2조 (제공 서비스)</div>
              <p className="mt-2">본사는 가맹점에 다음 콘텐츠와 서비스를 제공한다.</p>
              <ol className="ml-4 mt-2 space-y-1 list-decimal">
                <li>정규 모의고사 27회(5월~10월) 및 파이널 모의고사 20회(11월) 자체 제작 콘텐츠 일체</li>
                <li><strong>지류 인쇄·배송 (3종)</strong>: 문제지, 워크북, 답안지 — 매주 일괄 배송</li>
                <li><strong>학습웹 제공 (5종)</strong>: 해설지, 강의노트, 모범답안, 해설영상, 개념영상 — QR 출석 시 학생 개인별 자동 오픈</li>
                <li>매일국어 1컷: 월~금 아침 8시 카카오톡 자동 발송 (5월~10월)</li>
                <li>답안 채점 서비스: 본사가 매주 가맹점으로부터 회수한 학생 답안을 직접 채점한다 <strong>(정규 모의고사 한정)</strong>.</li>
                <li>매주 성적표 자동 발송: 시험 다음 주 금요일 저녁 7시 학생·학부모에게 정밀 분석표를 알림톡으로 발송한다 <strong>(정규 모의고사 한정)</strong>.</li>
                <li>가맹 학원 전용 관리자 페이지: 학생 출석·학습 현황·성적 데이터 실시간 확인</li>
              </ol>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제3조 (가맹점의 역할)</div>
              <p className="mt-2">가맹점은 다음 업무를 성실히 수행한다.</p>
              <ol className="ml-4 mt-2 space-y-1 list-decimal">
                <li><strong>QR 출석 체크 성실 수행</strong>: 매 수업 시 시험지 두 번째 페이지의 QR 코드를 통해 학생 출석을 정확히 체크하여 학생 개인별 학습 콘텐츠가 적시에 자동 오픈될 수 있도록 한다. 학생 휴대폰을 통한 직접 체크 또는 학원 자체 수기 체크 모두 가능하다.</li>
                <li><strong>통일 회차 운영</strong>: 매주 본사가 지정한 회차로 수업을 진행한다. 전국 GR831 가맹 학원이 동일 회차를 진행하며, 분석 성적표에 전국 수강생 평균 데이터가 포함되어 학생의 상대적 위치 비교가 가능하다. 학원 자체 판단으로 별도 회차를 운영하는 것은 권장하지 않는다.</li>
                <li>수업 요일은 학원이 자율로 결정한다. 단, <strong>당주 일요일 자정 전까지</strong> 수업을 완료하고 학생 답안지를 PDF로 스캔해 본사 카카오톡 채널로 전송해야 한다. 마감 시간 초과 시 해당 주차 성적표 발송이 지연될 수 있다.</li>
              </ol>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제4조 (정산 기준)</div>
              <ol className="ml-4 mt-2 space-y-2 list-decimal">
                <li>
                  <strong>콘텐츠 정산 금액</strong>
                  <ul className="ml-4 mt-1 space-y-0.5">
                    <li>· <strong>정규 모의고사</strong>: 수강생 1인 기준 회당 19,400원 (5월~10월 매주 1회, 총 27회)</li>
                    <li>· <strong>파이널 특강</strong>: 수강생 1인 기준 회당 30,000원 (11월 10일간 매일 2회, 총 20회). 가맹점은 학생 신청 회차 수만큼 정산한다. <strong>파이널 특강은 콘텐츠 공급만 진행되며, 채점 및 성적표 발송 서비스는 제공되지 않는다.</strong></li>
                  </ul>
                </li>
                <li><strong>비과세 사업</strong>: 본사는 비과세 사업자로 부가가치세는 별도 발생하지 않는다.</li>
                <li><strong>가입비 및 계약금</strong>: 본 계약은 가입비, 계약금, 보증금 등 일체의 사전 비용 없이 체결된다.</li>
                <li><strong>학생 수강료</strong>: 가맹점이 학생에게 청구하는 수강료는 가맹점이 자율적으로 책정한다. 본사는 학생 수강료에 대한 권리·관여를 갖지 않는다.</li>
                <li><strong>정산 주기</strong>: 매월 말일 기준 가맹점은 익월 10일까지 본사에 콘텐츠 정산 금액을 지급한다.</li>
              </ol>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제5조 (계약 기간)</div>
              <p className="mt-2">본 계약은 체결일로부터 당해년도 12월 31일까지 유효하다. 계약 만료 1개월 전(11월 30일까지) 양 당사자 간 연장 합의가 없는 경우 자동 종료한다. 재계약 여부 및 조건은 상호 협의로 결정한다.</p>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제6조 (미수강 처리 및 환불 규정)</div>
              <p className="mt-2">1. <strong>신청 인원이 실제로 수강하지 않은 경우</strong>: 콘텐츠 정산 금액 전액은 면제되며, 이미 인쇄·배송된 자료에 대한 <strong>인쇄 발송비 명당 3,000원</strong>만 청구한다.</p>
              <p className="mt-3">2. 환불 요청은 서면으로 제출하며, 본사 검토 후 14일 이내 처리한다.</p>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제7조 (위약금 및 콘텐츠 보호)</div>
              <ol className="ml-4 mt-2 space-y-2 list-decimal">
                <li>
                  <strong>교재 무단 복제 시</strong>:
                  <ul className="ml-4 mt-1 space-y-0.5">
                    <li>· 건당 위약금 1,000,000원(일백만원) 부과</li>
                  </ul>
                </li>
                <li>
                  <strong>콘텐츠 공유 · 재판매 시</strong>:
                  <ul className="ml-4 mt-1 space-y-0.5">
                    <li>· 자료 1건당 위약금 10,000,000원(일천만원) 부과</li>
                    <li>· 별도 법적 조치 진행</li>
                  </ul>
                </li>
                <li>
                  <strong>교재 단독 판매 시</strong>:
                  <ul className="ml-4 mt-1 space-y-0.5">
                    <li>· 가맹점이 본사가 제공하는 콘텐츠(문제지·워크북·답안지·해설지·강의노트·모범답안·해설영상·개념영상 등)를 가맹 시스템(채점·성적표 발송·학습웹·관리자 페이지)과 분리하여 학생에게 단독 판매하는 행위를 금지한다.</li>
                    <li>· 적발 시 계약 즉시 해지</li>
                    <li>· 위약금 5,000,000원(오백만원) 부과</li>
                  </ul>
                </li>
                <li>
                  <strong>타 브랜드 유사 콘텐츠 사용 시</strong>:
                  <ul className="ml-4 mt-1 space-y-0.5">
                    <li>· 본사와 사전 협의 후 사용 가능</li>
                    <li>· 본사 협의 없이 운영 시 계약 즉시 해지</li>
                    <li>· 위약금 5,000,000원(오백만원) 부과</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제8조 (가맹점의 의무)</div>
              <ol className="ml-4 mt-2 space-y-1 list-decimal">
                <li>학원 자체 강사를 통한 성실한 수업 진행</li>
                <li>본사 콘텐츠를 승인된 목적 외 사용 금지</li>
                <li>매주 답안지 스캔 및 본사 전송 기한 준수 (당주 일요일 자정 전까지)</li>
                <li>본사 운영 정책, 콘텐츠 사용 가이드 성실 준수</li>
                <li>본사·수강생 간 소통 창구(카톡·학습웹) 적극 활용</li>
                <li>관계 법령 준수 및 학생/학부모 개인정보 보호</li>
              </ol>
            </div>

            <div>
              <div className="font-bold text-brand-navy">제9조 (DB 관리)</div>
              <ol className="ml-4 mt-2 space-y-1 list-decimal">
                <li>학생 개인정보는 콘텐츠 공급 · 채점 · 성적표 발송 운영 목적으로 본사와 공유한다.</li>
                <li>본사는 학생 개인정보를 운영 목적 외 사용하지 않는다.</li>
                <li><strong>합격자 명단은 다음해 가맹 연장 시 가맹점에 제공</strong>되어 계약 기간 내 마케팅에 활용할 수 있다.</li>
                <li><strong>가맹 해지 시에는 본인 가맹점 합격생 외 합격자 명단을 사용할 수 없다.</strong></li>
                <li>가맹점은 본사 제공 DB를 제3자에게 제공·외부 유출·복제·재판매할 수 없다.</li>
                <li>계약 종료 시 본사 제공 DB는 지체 없이 파기 또는 반환한다.</li>
              </ol>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <div className="font-bold text-brand-navy">부칙</div>
              <p className="mt-2">본 계약서에 명시되지 않은 사항은 관계 법령 및 일반 상관례에 따른다. 본 계약은 양 당사자가 서명·날인한 날로부터 효력을 발생한다.</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-brand-gray">본사</div>
                  <div className="mt-1">GR831약술형논술연구소</div>
                  <div className="mt-1 text-brand-gray">(서명/날인)</div>
                </div>
                <div>
                  <div className="text-brand-gray">가맹점</div>
                  <div className="mt-1">_________________________</div>
                  <div className="mt-1 text-brand-gray">(서명/날인)</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-brand-gray pt-4 border-t border-brand-border">
              ※ 본 계약서는 표준 양식이며, 실제 계약 시 일부 조항이 가맹점 상황에 따라 조정될 수 있습니다. 계약 체결 전 본사 상담을 통해 상세 안내를 받으실 수 있습니다.
            </p>

          </div>
        </details>
      </section>

    </main>
  );
}
