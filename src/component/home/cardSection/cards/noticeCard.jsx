import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cards.css'; // 공통 스타일을 공유해도 좋음
import { FaRegFileAlt } from 'react-icons/fa';

function NoticeCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/notice/announcement');
  };

  return (
    <div className="card notice-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <FaRegFileAlt size={40} />
      <h2>공지사항</h2>
      <p className='NoticeCard-text'>공과대학 학생만을 위한 <br/> 행사 및 혜택을 확인해보세요!</p>
    </div>
  );
}

export default NoticeCard; 