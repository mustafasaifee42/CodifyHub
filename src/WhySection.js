import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 50px 20px;
`;

const H1 = styled.h1`
  font-family: "IBM Plex Mono", monospaced;
  font-size: 24px;
  font-weight: bold;
  color: var(--secondary-color);
  margin: 10px auto;
  max-width: 720px;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 10px auto 50px auto;
  max-width: 720px;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Cards = styled.div`
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 30px;
  border-radius: 2px;
  width: 320px;
  margin: 20px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

function App() {
  const cardContent = [
    "Enhances problem-solving skills",
    "Facilitates creativity",
    "Develops analytical and logical thinking",
    "Enhances structural and algorithmic thinking",
    "Prepares kids for skills that are necessary in the future",
    "Encourages kids to think outside of the box",
  ];

  const cards = cardContent.map((d, i) => <Cards key={i}>{d}</Cards>);

  return (
    <>
      <Div>
        <H1>
          Why teaching Computer coding to kids is essential in todays day and
          age?
        </H1>
        <H2>
          The ability to code computer programs is an important part of literacy
          in today’s society. Computer coding helps kids in following ways:
        </H2>
        <CardsContainer>{cards}</CardsContainer>
      </Div>
    </>
  );
}

export default App;
