import React from "react"
import styled from "styled-components"

const Cards = () => {
  return (
    <div className="centered">
      <StyledCards className="cards">
        <article className="card">
          <img
            src="https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="horses"
          />
          <div className="card-body">
            <h5 className="card-title">Horse Feed &amp; Supplies</h5>
            <p className="card-text">
              Elit numquam inventore incidunt ex dolore cum adipisci. Porro
              sapiente maiores voluptatem aliquam alias Ducimus aut dicta illum
              molestiae corporis.
            </p>
          </div>
        </article>
        <article className="card">
          <img
            src="https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="horses"
          />
          <div className="card-body">
            <h5 className="card-title">Horse Feed &amp; Supplies</h5>
            <p className="card-text">
              Elit numquam inventore incidunt ex dolore cum adipisci. Porro
              sapiente maiores voluptatem aliquam alias Ducimus aut dicta illum
              molestiae corporis.
            </p>
          </div>
        </article>
        <article className="card">
          <img
            src="https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="horses"
          />
          <div className="card-body">
            <h5 className="card-title">Horse Feed &amp; Supplies</h5>
            <p className="card-text">
              Elit numquam inventore incidunt ex dolore cum adipisci. Porro
              sapiente maiores voluptatem aliquam alias Ducimus aut dicta illum
              molestiae corporis.
            </p>
          </div>
        </article>
        <article className="card">
          <img
            src="https://images.unsplash.com/photo-1553284966-19b8815c7817?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="horses"
          />
          <div className="card-body">
            <h5 className="card-title">Horse Feed &amp; Supplies</h5>
            <p className="card-text">
              Elit numquam inventore incidunt ex dolore cum adipisci. Porro
              sapiente maiores voluptatem aliquam alias Ducimus aut dicta illum
              molestiae corporis.
            </p>
          </div>
        </article>
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
