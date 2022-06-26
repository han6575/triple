import { MutableRefObject, useRef } from 'react'

import { useFade } from '../styles/fade-anmation'
import { Column, TextDiv } from '../styles/global'
import { IncreaseCount } from '../styles/increase-count-animation'

import { AwardItem } from './content-award-item'

export const AwardSection = () => {
  const fadeAnimation = useFade({ delay: 200 })
  const userCountRef = useRef() as MutableRefObject<HTMLSpanElement>
  const reviewCountRef = useRef() as MutableRefObject<HTMLSpanElement>
  const planCountRef = useRef() as MutableRefObject<HTMLSpanElement>

  return (
    <div {...fadeAnimation}>
      <Column className="award-gap">
        <TextDiv className="award-font">
          <span
            ref={IncreaseCount(userCountRef)}
            data-count="700"
            inner-content="만 명"
          />
          의 사용자
        </TextDiv>
        <TextDiv className="award-font">
          <span
            ref={IncreaseCount(reviewCountRef)}
            data-count="100"
            inner-content="만 개"
          />
          의 여행 리뷰
        </TextDiv>
        <TextDiv data-count="470" className="award-font">
          <span
            ref={IncreaseCount(planCountRef)}
            data-count="470"
            inner-content="만 개"
          />
          의 여행 일정
        </TextDiv>
      </Column>
      <AwardItem />
    </div>
  )
}
