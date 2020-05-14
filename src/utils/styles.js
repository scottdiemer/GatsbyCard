export const colors = {
  GreenYellow: "#92CD00",
  Orange: "#FFCF79",
  Yellow: "#E5E4D7",
  Green: "#2C6700",
  White: "white",
  Black: "black",
}

export const fonts = {
  mainFont: "Open Sans",
  secondaryFont: "Oswald",
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing: ${spacing}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border: ${width} ${type} ${color}`
}
