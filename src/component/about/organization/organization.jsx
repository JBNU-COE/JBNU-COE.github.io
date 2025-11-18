import React from 'react';
import './organization.css';

const ORG = {
  leaders: [
    { role: '회장', name: '류이노' },
    { role: '부회장', name: '김범준' },
  ],
  chair: { title: '집행위원장', name: '전기섭' },
  depts: [
    { name: '기획국', head: '이동훈', vice: '정현지', members: ['김준서','윤현석','조혜선','김태연','박예빈','이정빈'] },
    { name: '대외협력국', head: '한지훈', vice: '정진아', members: ['송민우','김진혁','백지민','이찬우','곽서희','박채윤','유세동'] },
    { name: '문화예술국', head: '전재영', vice: '김다연', members: ['한시우','김수경','이여원','박주찬','오윤진','마음','김서연','김현명'] },
    { name: '사무국', head: '노진환', vice: '이아인', members: ['이민혁','장건희','이민경','김나윤','남은서'] },
    { name: '운영지원국', head: '이준영', vice: '왕희', members: ['임예진','이송원','백지영','장유진','정승민'] },
    { name: '취업학습국', head: '이진웅', vice: '민경재', members: ['고진서','정하린','송재협','최혜림','장수빈'] },
    { name: '학생복지국', head: '권주민', vice: '강혜령', members: ['김수아','문길환','이예나','서배광','이준석'] },
    { name: '홍보국', head: '백승민', vice: '박하영', members: ['강성민','김예인','박준혁','황민경','김윤서'] },
  ]
};

export default function Organization() {
  return (
    <div className="org-page">
      {/* TOP: 회장/부회장 */}
      <div className="org-top">
        <div className="org-leaders">
          {ORG.leaders.map((l, idx) => (
            <div key={idx} className="org-leader-card">
              <div className="org-leader-role">{l.role}</div>
              <div className="org-leader-name">{l.name}</div>
            </div>
          ))}
          {/* rail 제거 */}
        </div>
        {/* rail 제거 */}
        <div className="org-chair">
          <div className="org-chair-title">{ORG.chair.title}</div>
          <div className="org-chair-name">{ORG.chair.name}</div>
        </div>
      </div>

      {/* DEPARTMENTS */}
      <div className="org-depts">
        <div className="org-grid">
          {ORG.depts.map((d, idx) => (
            <section key={idx} className="org-dept">
              {/* rail 제거 */}
              <h3 className="org-dept-title">{d.name}</h3>
              <div className="org-dept-roles">
                <div className="org-role">
                  <div className="org-role-title">국장</div>
                  <div className="org-role-name">{d.head}</div>
                </div>
                <div className="org-role">
                  <div className="org-role-title">부국장</div>
                  <div className="org-role-name">{d.vice}</div>
                </div>
              </div>
              <div className="org-divider" />
              <div className="org-members">
                <div className="org-members-title">국원</div>
                <ul className="org-member-list">
                  {d.members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}


