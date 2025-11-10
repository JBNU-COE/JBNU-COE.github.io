import React from 'react';
import './PledgeList.css';

function PledgeList({ pledges }) {
  return (
    <div className="pledge-list">
      <h4>주요 공약</h4>
      <ul>
        {pledges.map((pledge, index) => (
          <li key={index} className="pledge-item">
            <span className="pledge-bullet">-</span>
            <span className="pledge-text">{pledge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PledgeList;
