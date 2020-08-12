import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import HeroBanner from "./HeroBanner";
import WhySection from "./WhySection";
import Courses from "./Courses";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #2c2c2c;
    --dark-gray: #999999;
    --primary-color: #52c5fb;
    --primary-color-hover: #3919C9;
    --very-light-gray: #f5f5f5;
    --light-gray: #e5e5e5;
    --gray: #aaaaaa;
    --bg-color: #faf5eb;
    --secondary-color: #4b1b98;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: var(--bg-color);
    font-size: 16px;
    line-height: 1.5;
    color: var(--black);
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  background-color: var(--secondary-color);
  padding: 20px;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--white);
  font-family: "IBM Plex Mono", monospaced;
`;

const Button = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  background-color: var(--white);
  border-radius: 50px;
  color: var(--secondary-color);
  padding: 10px 20px;
  width: 100px;
`;

const Footer = styled.div`
  background-color: #003562;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  color: var(--white);
  align-items: center;
`;

const FooterTitle = styled.span`
  font-size: 24px;
  font-family: "IBM Plex Mono", monospaced;
  font-weight: bold;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>CodifyHub</Logo>
        <p>Phone/Whatsapp : +919686915788</p>
      </Header>
      <HeroBanner />
      <WhySection />
      <Courses />
      <Footer>
        <div>
          <FooterTitle>DON’T MISS OUT</FooterTitle>
          <br />
          CodifyHub offers online courses for children to learn coding at home.
          Contact us to know more.
        </div>
        <div>
          <a href="mailto:info@codifyhub.com">
            <Button>Contact Us</Button>
          </a>
        </div>
      </Footer>
    </>
  );
}

export default App;
