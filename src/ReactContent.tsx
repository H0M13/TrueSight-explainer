import React from "react";
import styled from "styled-components";

export const ReactContent = () => {
  return (
    <Container>
      <TransparentSection>
        <Heading>TrueSight</Heading>
        <Subheading>Transparent content moderation powered by Chainlink</Subheading>
      </TransparentSection>
      <WhiteSection>
        <ContentSectionHeading>
          Content moderation should be focused on protecting the safety of young
          or otherwise vulnerable users
        </ContentSectionHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ContentSectionHeading>
          Today users have two choices when it comes to social networks...
        </ContentSectionHeading>
        <ComparisonGrid>
          <ComparisonGridCol>
            <ComparisonGridColHeading>
              Typical centralised
            </ComparisonGridColHeading>
            <ul>
              <BadLi>
                <b>Users are the product - </b>User data may be unknowingly sold
                to advertisers for profit.
              </BadLi>
              <BadLi>
                <b>Risk of bias - </b>Application has complete control over what
                content users are shown.
              </BadLi>
              <MedLi>
                <b>Opaque content moderation - </b>Vulnerable users are for the
                most part protected from malicious content, but any user
                generated content may be removed with no explanation. Platform
                bias may influence moderation.
              </MedLi>
            </ul>
          </ComparisonGridCol>
          <ComparisonGridCol>
            <ComparisonGridColHeading>
              Typical decentralised
            </ComparisonGridColHeading>
            <ul>
              <GoodLi>
                <b>Users control their own data</b>
              </GoodLi>
              <MedLi>
                <b>No platform-level content moderation - </b>Onus of content
                moderation is placed solely on the users. This eliminates any
                platform bias but introduces a high risk of vulnerable users
                being exposed to malicious content before other users have
                chance to flag it.
              </MedLi>
            </ul>
          </ComparisonGridCol>
        </ComparisonGrid>
        <Quote>
          I think the issue of moderation is extremely difficult, and you’re
          seeing a lot of centralized companies today struggle with that.
          There’s massive overhead in hiring people, and those people often get
          PTSD [post traumatic stress disorder] because they’re looking at a lot
          of the same graphic things over and over and over again. - Eric Yang,
          founder and executive director of{" "}
          <QuoteLink href="https://junto.foundation/">Junto</QuoteLink> -{" "}
          <QuoteSource href="https://cointelegraph.com/news/social-media-problems-and-solutions-centralization-is-not-sustainable">
            Source
          </QuoteSource>
        </Quote>
        <ContentSectionHeading>The Chainlink network can provide a better way</ContentSectionHeading>
        <p>
          An independent network of Chainlink oracles providing image
          classification services can be leveraged by social networks to provide{" "}
          <b>transparent</b> and <b>impartial</b> content moderation for their
          users.

          Our hackathon project, TrueSight, is a demonstration of how this can be achieved.
        </p>
        <VideoPlaceholder>Video placeholder</VideoPlaceholder>
      </WhiteSection>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 500px;
  min-height: calc(100vh - 500px);
  pointer-events: none;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
`;

const TransparentSection = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const WhiteSection = styled.div`
  padding: 50px 100px;
  position: relative;
  max-width: 800px;
  min-height: calc(100vh - 500px);
  background-color: white;
  color: black;
  border-radius: 4px;

  @media (max-width: 1024px) {
    padding: 50px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Subheading = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentSectionHeading = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: #6c02c9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

const ComparisonGridCol = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ComparisonGridColHeading = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Quote = styled.div`
  font-style: italic;
  background-color: #a4eafc;
  color: #003f9e;
  font-size: 1.2rem;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
`;

const QuoteLink = styled.a`
  pointer-events: auto;
  color: #003f9e;
`;

const QuoteSource = styled(QuoteLink)`
  font-style: initial;
  font-size: 0.8rem;
  color: #003f9e;
`;

const ComparisonsLi = styled.li`
  margin: 10px 0;
`;

const BadLi = styled(ComparisonsLi)`
  color: red;
`;

const MedLi = styled(ComparisonsLi)`
  color: #d18102;
`;

const GoodLi = styled(ComparisonsLi)`
  color: green;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  background-color: red;
  margin: 20px 0;
`;
