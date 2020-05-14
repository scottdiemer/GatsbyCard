import React from "react"
import styled from "styled-components"
import MyImg from "../components/myimg"
import YAMLData from "../data/cards.yml"

const Cards = () => {
  return (
    <div className="centered">
      <StyledCards className="cards">
        {YAMLData.map((card, index) => {
          return (
            <article key={index} className="card">
              <MyImg src={card.image} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </article>
          )
        })}
      </StyledCards>
    </div>
  )
}

const StyledCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    background: white;
    margin-bottom: 2em;
  }

  .card-body {
    padding: 1.4em;
  }

  @media screen and (min-width: 40em) {
    .card {
      flex: 0 1 calc(50% - 1em);
    }
  }

  @media screen and (min-width: 60em) {
    .card {
      flex: 0 1 calc(33.3% - 1em);
    }
  }
`

export default Cards
