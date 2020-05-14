import styled from "styled-components"
import { styles, transitions } from "../utils"

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.White};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.White}` })};
  margin-bottom: 1rem;
  ${transitions.defaultTransition};
  &:hover {
    background: ${styles.colors.White};
    color: ${styles.colors.Black};
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.Black};
  ${styles.border({ color: `${styles.colors.Black}` })};
  &:hover {
    background: ${styles.colors.Black};
    color: ${styles.colors.Orange};
  }
`

export { BannerButton, SectionButton }
