import React from 'react';
import '../styles/_Member.scss';

const Member = () => {
  return (
    <section className="Member__Container">
      <div className="Member__Container-Query">
        <div className="Member__Image-Container">
          <img
            src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
            className="Member__Image"
          />
        </div>
        <div className="Member__Text-Container">
          <p className="Member__Role">프론트엔드</p>
          <p className="Member__Name">김진경</p>

          <p className="Member__Introduction">
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
            무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.
          </p>
          <div className="Member__Tag-Container ">
            <button className="Member__Tag">
              <span>#플래닛</span>
            </button>
            <button className="Member__Tag">
              <span>#플래닛</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// MemberList로 바꾸기

export default Member;
