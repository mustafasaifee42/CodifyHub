import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 20px 20px 100px 20px;
  background-color: var(--white);
  margin-top: 20px;
`;

const Container = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: auto;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 30px;
  border-radius: 2px;
`;

const H1 = styled.h1`
  font-family: "IBM Plex Mono", monospaced;
  font-size: 24px;
  font-weight: bold;
  color: var(--secondary-color);
  max-width: 720px;
  margin: 0;
`;

const Title = styled.div`
  font-size: 36px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italics = styled.span`
  font-style: italic;
`;

const UL = styled.ul`
  margin: 0;
  padding-left: 14px;
`;

const SubNote = styled.span`
  color: #666666;
  font-size: 14px;
`;

const PriceDiv = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const TitleDiv = styled.span`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  margin-bottom: 10px;
`;

const StrikeThrough = styled.span`
  text-decoration: line-through;
  color: var(--dark-gray);
  font-weight: normal;
`;

const HeaderDiv = styled.div`
  max-width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px auto;
`;

const NavButtonsContainer = styled.div`
  display: flex;
`;

const NavButtons = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${(props) =>
    props.selected ? "var(--secondary-color)" : "var(--light-gray)"};
  color: ${(props) => (props.selected ? "var(--white)" : "var(--black)")};
  border-width: ${(props) => props.borderWidth};
  border-style: solid;
  border-color: var(--white);
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
`;

function App() {
  const [courseNo, setCourseNo] = useState(1);
  return (
    <>
      <Div>
        <HeaderDiv>
          <Title>Course Details</Title>
          <NavButtonsContainer>
            <NavButtons
              selected={courseNo === 1 ? true : false}
              borderWidth={"1px"}
              borderRadius={"30px 0 0 30px"}
              onClick={() => {
                setCourseNo(1);
              }}
            >
              Game Development
            </NavButtons>
            <NavButtons
              selected={courseNo === 2 ? true : false}
              borderWidth={"1px 0px 1px 0px"}
              borderRadius={"0 0 0 0"}
              onClick={() => {
                setCourseNo(2);
              }}
            >
              Mobile App Development
            </NavButtons>
            <NavButtons
              selected={courseNo === 3 ? true : false}
              borderWidth={"1px"}
              borderRadius={"0 30px 30px 0"}
              onClick={() => {
                setCourseNo(3);
              }}
            >
              Web Development
            </NavButtons>
          </NavButtonsContainer>
        </HeaderDiv>
        {courseNo === 1 ? (
          <Container>
            <TitleDiv>
              <H1>Game Development</H1>
              <PriceDiv>Rs. 4500</PriceDiv>
            </TitleDiv>
            <Italics>
              Introduce core coding components like variables, events, loops etc
              in simplistic and enjoyable ways.
            </Italics>
            <br />
            <br />
            Scratch is designed by MIT Labs especially for ages 8 to 16, but is
            used by people of all ages. Scratch helps kids to learn to think
            creatively, reason systematically, and work collaboratively —
            essential skills for todays day and age. With Scratch, children can
            program interactive stories, games, and animations.{" "}
            <Italics>
              Classes will be conducted online using zoom application
            </Italics>
            <br />
            <br /> Course outline: <br />
            <UL>
              <li>Introduce block base coding technique in a fun filled way</li>
              <li>Create animation videos and stories</li>
              <li>Create simple computer games</li>
              <li>Use Video sensing (Gesture)</li>
              <li>Create art and music</li>
            </UL>
            <br />
            <SubNote>
              Recommended age: <Bold>11+</Bold> • Number of classes:{" "}
              <Bold>15</Bold> • Batch Size: <Bold>6</Bold> • Dates:{" "}
              <Bold>Starting on 18th August 2020</Bold>
            </SubNote>
          </Container>
        ) : courseNo === 2 ? (
          <Container>
            <TitleDiv>
              <H1>Mobile App Development</H1>
              <PriceDiv>
                <StrikeThrough>Rs. 5400</StrikeThrough> {"  "}Rs. 3000
              </PriceDiv>
            </TitleDiv>
            <Italics>
              Perfect match for middle school students. Doesn’t require any
              prior coding knowledge or skills.
            </Italics>
            <br />
            <br />
            Students will start will learning visual block-based programming and
            gradually transition to text based programming - This sets the
            foundation for future advanced programming using Python, Java, etc.
            Mobile app development course has been carefully designed by IIT
            graduates. It is a good choice for students in early teens as it
            doesn’t require prior coding knowledge and skills. Students will use
            visual, blocks-based programming in this course, setting the
            foundation for any type of coding they do in the future (JavaScript,
            Java, Python, etc).{" "}
            <Italics>
              Classes will be conducted online using zoom application
            </Italics>
            <br />
            <br /> Course outline: <br />
            <UL>
              <li>Introduce JavaScript through block based programming</li>
              <li>
                Transition to text based coding technique in a fun filled way
              </li>
              <li>Introduce event-driven programming</li>
              <li>
                Create UI elements such as images, text labels and buttons, many
                more options for styling these elements with colors, font sizes
                and so on.
              </li>
              <li>
                Design the user interface for an Mobile app using a
                drag-and-drop editor makes designing a stylish product much
                faster and easier.
              </li>
              <li>
                Introducing core coding concepts like variables, conditional
                statements, looping, strings and arrays, functions etc in
                simplistic way.
              </li>
            </UL>
            <br />
            <SubNote>
              Recommended age: <Bold>13+</Bold> • Number of classes:{" "}
              <Bold>18</Bold> • Batch Size: <Bold>6</Bold> • Dates:{" "}
              <Bold>Starting on 1st October 2020</Bold>
            </SubNote>
          </Container>
        ) : (
          <Container>
            <TitleDiv>
              <H1>Web Development</H1>
              <PriceDiv>
                <StrikeThrough>Rs. 5400</StrikeThrough> {"  "}Rs. 3000
              </PriceDiv>
            </TitleDiv>
            Digitization has moved everything online. Today all major businesses
            are running online like amazon, flipkart, etc. Every website has a
            purpose for which it was created and a reason why we all use it.
            This course will encourage students to think websites as a means of
            personal expression and develop a list of topics and interests that
            they would want to include on a personal website. This course will
            cover the fundamentals of HTML and CSS. We’ll also do ample design
            practice to give you a feel for what UI/UX designers do to come up
            with modern, minimalistic web designs. They will also practice
            valuable programming skills such as debugging and commenting. By the
            end of the unit, they will have a personal website that they can
            publish to the Internet.{" "}
            <Italics>
              Classes will be conducted online using zoom application
            </Italics>
            <br />
            <br /> Course outline: <br />
            <UL>
              <li>Exploring common tags in HTML</li>
              <li>Building a multi-page website</li>
              <li>Adding multimedia</li>
              <li>Styling and positioning elements with CSS</li>
              <li>Code-CleanUp and Debugging.</li>
            </UL>
            <br />
            <SubNote>
              Recommended age: <Bold>13+</Bold> • Number of classes:{" "}
              <Bold>18</Bold> • Batch Size: <Bold>6</Bold> • Dates:{" "}
              <Bold>Starting on 15th September 2020</Bold>
            </SubNote>
          </Container>
        )}
      </Div>
    </>
  );
}

export default App;
