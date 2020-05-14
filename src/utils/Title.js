import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const Title = ({ title, message }) => {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defaultProps = {
  message: "our message",
  title: "our title",
}

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    font-size: 2rem;
    color: ${styles.colors.Orange};
  }
  .title {
    font-family: ${styles.fonts.secondaryFont};
    font-size: 2rem;
    text-transform: uppercase;
    color: ${styles.colors.Green};
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.Orange};
    margin: 0.5rem auto;
  }
`

export default Title
