import styled from 'styled-components'

import contentLogo from '../assets/content-logo.png'
import awardPlaystore from '../assets/awarditem-playstore.png'
import awardAppstore from '../assets/awarditem-appstore.png'

export const Layout = styled.div`
  position: relative;
  background-position: center center;
  min-width: 1200px;
  min-heigth: 1200px;
`

export const SectionContainer = styled.section`
  display: flex;
  width: 1040px;
  heigth: 1040px;
  margin: 0 auto;
  justify-content: center;
  padding: 150px 0;
  gap: 200px;
`

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &.content-logo {
    background-image: url(${contentLogo});
    background-size: contain;
    background-repeat: no-repeat;
    backgroundposition: top center;
    width: 400px;
    height: 330px;
    text-align: center;
  }
  &.award-gap {
    gap: 10px;
  }
`
export const TextDiv = styled.div`
  &.content-font {
    text-align: center;
    width: 100%;
    color: rgba(58, 58, 58, 0.7);
    position: absolute;
    bottom: 40px;
  }
  &.award-font {
    font-size: 36px;
    letter-spacing: 1px;
    gap: 10px;
  }
  &.award-item-font {
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
  }
`

export const Row = styled.div`
  position: relative;
  display: flex;
  &.award-item {
    width: 400px;
    height: 108px;
    margin-top: 50px;
  }
  &.award-item-play-logo {
    background-image: url(${awardPlaystore});
    background-size: 54px 54px;
    background-repeat: no-repeat;
    backgroundposition: left center;
    text-align: start;
    width: 100%;
    height: 54px;
    margin-right: 50px;
    white-space: nowrap;
    color: rgba(58, 58, 58, 0.8);
    padding: 5px 0 5px 64px;
  }
  &.award-item-app-logo {
    background-image: url(${awardAppstore});
    background-size: 54px 54px;
    background-repeat: no-repeat;
    backgroundposition: left center;
    text-align: start;
    width: 100%;
    height: 54px;
    white-space: nowrap;
    padding: 5px 0 5px 64px;
    color: rgba(58, 58, 58, 0.8);
  }
`
