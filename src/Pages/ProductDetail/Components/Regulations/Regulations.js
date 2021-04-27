import React, { Component } from 'react';
import '../Regulations/Regulations.scss';

export class Regulations extends Component {
  render() {
    return (
      <div className="regulations">
        <div class="innerWrap">
          <b>사용 방법</b>
          <ul>
            <li>문자로 수신되는 MMS 모바일 쿠폰을 사용해주세요.</li>
            <li>
              타 할인 및 쿠폰, 현장이벤트와 중복 할인은 불가합니다. 부가세가
              포함된 가격입니다.
            </li>
            <li> 매수 제한없이 사용가능 합니다.</li>
            <li>반드시 사전 예약 후 이용가능 합니다.</li>
            <li>
              기계식 주차시설로 대형 SUV, 엔진 3000cc이상 차량은 호텔 주차타워
              주차가 불가합니다
            </li>
          </ul>
          <p>
            <ul>
              <li>구매 후 90일 이내 취소 요청 시, 100% 환불 됩니다. </li>구매 후
              90일 이내 취소 요청 시, 100% 환불 됩니다. <br />
              <li>
                구매 후 90일 이후 취소 요청 시, 구매 금액의 90%가 환불 됩니다.
              </li>
              <li>
                최초 유효기간이 만료된 경우 유효기간 연장을 신청하실 수
                있습니다.
                <br /> 단, 현재 같은 가격과 구성으로 동일한 상품이 판매되고 있는
                경우에만 가능 합니다.
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Regulations;
