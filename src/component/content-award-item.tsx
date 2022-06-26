import { useFade } from '../styles/fade-anmation'
import { Row, TextDiv } from '../styles/global'

export const AwardItem = () => {
  const fadeAnimation = useFade({ delay: 300 })
  return (
    <Row {...fadeAnimation} className="award-item">
      <Row className="award-item-play-logo">
        <TextDiv className="award-item-font">
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </TextDiv>
      </Row>
      <Row className="award-item-app-logo">
        <TextDiv className="award-item-font">
          2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
        </TextDiv>
      </Row>
    </Row>
  )
}
