import { useFade } from '../styles/fade-anmation'
import { Column, TextDiv } from '../styles/global'

export const LogoSection = () => {
  const fadeAnimation = useFade({ delay: 100 })
  return (
    <Column {...fadeAnimation} className="content-logo">
      <TextDiv className="content-font">2019년 02월 기준</TextDiv>
    </Column>
  )
}
