import React, { Component } from 'react';
import '../OptionDetails/OptionDetails.scss';
import Night from '../../Img/nightview.jpg';
import Buffet from '../../Img/buffet.jpg';
class OptionDetails extends Component {
  render() {
    return (
      <div className="optionDetails">
        <div class="innerWrap">
          <b>옵션 설명 </b>
          <p>
            부산에서 요즘 가장 힙한 여행지로 손꼽히는 켄트호텔 by 켄싱턴
            스카이라운지에서 소중한 사람과 시간을 보내세요. 세계 3대 스파클링
            와인인 "프로세코" 와 함께 하는 "광안" 을 만나 보세요. 특급호텔
            쉐프가 정성스럽게 준비한 이탈리아의 맛을 켄트호텔 스카이라운지에서
            만나 보실 수 있답니다.
          </p>
          <img src={Night} alt="night view" />
          <p> 해운대 야경을 볼수 있는 라운지에서 연인과의 데이트를 즐기세요</p>
          <img src={Buffet} alt="buffet" />
          <p>신선한 재료와 다양한 맛 초이스 </p>
        </div>
      </div>
    );
  }
}

export default OptionDetails;
