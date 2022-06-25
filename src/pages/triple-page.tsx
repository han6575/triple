import { AwardSection } from '../component/content-award'
import { LogoSection } from '../component/content-logo-section'
import { Layout, SectionContainer } from '../styles/global'

const TriplePage = () => {
  return (
    <Layout>
      <SectionContainer>
        <LogoSection />
        <AwardSection />
      </SectionContainer>
    </Layout>
  )
}
export default TriplePage
