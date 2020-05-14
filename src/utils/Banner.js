import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  text-align: center;
  .title {
    color: ${styles.colors.White};
    font-size: 3rem;
    font-family: ${styles.fonts.mainFont};
    text-transform: uppercase;
    letter-spacing: 0.75rem;
  }
  .subtitle {
    color: ${styles.colors.Orange};
    ${styles.letterSpacing({ spacing: "0.15rem" })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
export default Banner
