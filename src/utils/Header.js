import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HomeHeader = ({ image, styleClass, children }) => {
  return (
    <IndexHeader fluid={image} className={styleClass}>
      {children}
    </IndexHeader>
  )
}

HomeHeader.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

const IndexHeader = styled(BackgroundImage)`
  background-color: rgba(0, 0, 0, 0.5) !important;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: "no-repeat";
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 74px);
  @media (min-width: 768px) {
    min-height: calc(100vh - 103px);
  }
`

export { HomeHeader }
