import React from "react";
import styled from "styled-components";

import HeroImage from "./Imgs/Lego.png";
import Wave from "./Imgs/wave.svg";

const Div = styled.div`
  background-color: var(--primary-color);
`;

const Container = styled.div`
  padding: 100px 50px 75px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;

const IMG = styled.img`
  margin-top: -135px;
`;

const HeroIMG = styled.img`
  width: 40vw;
`;

const TextContainer = styled.div`
  margin-right: 20px;
  width: 40vw;
  max-width: 480px;
  padding-top: 10px;
`;

const H1 = styled.h1`
  font-family: "IBM Plex Mono", monospaced;
  font-size: 36px;
  font-weight: bold;
  color: var(--white);
  margin: 10px 0;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: var(--white);
  margin: 10px 0;
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: #4b1b98;
  border-radius: 50px;
  color: var(--white);
  padding: 10px 20px;
  margin: 30px 0 0 0;
  width: 100px;
`;

function App() {
  return (
    <>
      <Div>
        <Container>
          <TextContainer>
            <H1>CodifyHub</H1>
            <H2>
              The fun way to learn  block-based coding for kids and
              develop critical thinking skills! Ages 11+
              <br/>
              <br/>
              Course structure and content has been developed by a team of IIT and NIT graduates
            </H2>
            <a href="mailto:info@codifyhub.com">
              <Button>Contact Us</Button>
            </a>
          </TextContainer>
          <HeroIMG src={HeroImage} alt="Background" />
        </Container>
      </Div>
      <IMG src={Wave} alt="Wave bottom" width="1%" />
    </>
  );
}

export default App;
