import React from 'react';
import { motion } from 'framer-motion';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaBullhorn, FaEnvelope } from 'react-icons/fa';
import './BoardInquiry.css';

const BoardInquiry = () => {
  const kakaoUrl = 'https://open.kakao.com/o/s1TJTDYh'; // 실제 오픈 카카오톡 URL로 변경 필요
  const email = 'kjm010622@naver.com';

  const handleKakaoClick = () => {
    window.open(kakaoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.div
      className="board-inquiry-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="board-inquiry-header">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FaBullhorn className="board-inquiry-main-icon" />
        </motion.div>
        <h1>게시판 이용 문의</h1>
        <p>홍보 및 게시판 이용이 필요한 인원을 위한 안내 페이지입니다</p>
      </div>

      <motion.div
        className="board-inquiry-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="board-inquiry-info-box">
          <h2>📢 게시판 이용 안내</h2>
          <p className="info-description">
            공과대학 학생회 게시판을 통한 홍보나 공지사항 게시를 원하시는 경우, 
            아래 연락처를 통해 문의해주시기 바랍니다.
          </p>
          <ul className="board-inquiry-info-list">
            <li>학생회 게시판을 통한 홍보 및 공지사항 게시가 가능합니다.</li>
            <li>게시판 이용을 원하시는 경우 사전에 문의해주시기 바랍니다.</li>
            <li>카카오톡 오픈채팅방 또는 이메일을 통해 편리하게 문의하실 수 있습니다.</li>
            <li>문의하신 내용은 확인 후 빠른 시일 내에 답변드리겠습니다.</li>
          </ul>
        </div>

        <div className="contact-methods">
          <motion.div
            className="contact-kakao-section"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="kakao-info">
              <RiKakaoTalkFill className="kakao-icon" />
              <div className="kakao-text">
                <h3>카카오톡 오픈채팅</h3>
                <p>아래 버튼을 클릭하여 카카오톡 오픈채팅방으로 이동하세요</p>
              </div>
            </div>
            
            <motion.button
              className="kakao-button"
              onClick={handleKakaoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RiKakaoTalkFill className="button-icon" />
              카카오톡 채팅방 입장하기
            </motion.button>
          </motion.div>

          <motion.div
            className="contact-email-section"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="email-info">
              <FaEnvelope className="email-icon" />
              <div className="email-text">
                <h3>이메일 문의</h3>
                <p>이메일을 통해 게시판 이용 문의를 보내주세요</p>
              </div>
            </div>
            
            <motion.button
              className="email-button"
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="button-icon" />
              {email}
            </motion.button>
          </motion.div>
        </div>

        <div className="board-inquiry-notice">
          <h3>⚠️ 유의사항</h3>
          <ul>
            <li>게시판 이용은 학생회의 승인 후 가능합니다.</li>
            <li>홍보 내용은 학생회 정책에 따라 검토 후 게시됩니다.</li>
            <li>부적절한 내용이나 상업적 목적의 게시는 제한될 수 있습니다.</li>
            <li>문의 시 구체적인 내용과 목적을 명시해주시면 더 빠른 처리가 가능합니다.</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BoardInquiry;

