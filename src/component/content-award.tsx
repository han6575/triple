import { Column, TextDiv } from '../styles/global'

import { AwardItem } from './content-award-item'

export const AwardSection = () => {
  return (
    <div>
      <Column className="award-gap">
        <TextDiv className="award-font">
          <span>
            <strong>700만명</strong>
          </span>
          의 여행자
        </TextDiv>
        <TextDiv className="award-font">
          <span>
            <strong>100만 개</strong>
          </span>
          의 여행 리뷰
        </TextDiv>
        <TextDiv className="award-font">
          <span>
            <strong>470만 개</strong>
          </span>
          의 여행 일정
        </TextDiv>
      </Column>
      <AwardItem />
    </div>
  )
}
