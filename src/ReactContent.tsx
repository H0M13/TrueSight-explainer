import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ReactContent = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (typeof window.orientation !== "undefined") setIsMobileDevice(true);
  }, []);

  return (
    <Container isMobileDevice={isMobileDevice}>
      <TransparentSection>
        <Heading>TrueSight</Heading>
        <Subheading>
          Decentralised content moderation powered by Chainlink and IPFS
        </Subheading>
      </TransparentSection>
      <WhiteSection>
        <ContentSectionHeading>
          Censorship resistance is great, but we need to protect the safety of
          users
        </ContentSectionHeading>
        <p>
          Growing a community around any public and open social application is
          difficult. Despite the benefits decentralised applications offer
          users, many will not be willing to sacrifice the quality of their user
          experience for ideological reasons like decentralisation. The more
          user-friendly and familiar we can make decentralised applications the
          better our chances of them going mainstream.
        </p>
        <p>
          Many users view content moderation as an integral part of modern
          social media. Moving to a system where there is no platform level
          content moderation may at best shock some users and at worst{" "}
          <b>cause harm to young or otherwise vulnerable users</b>.
        </p>
        <p>
          Our hackathon project, TrueSight, is a prototype for a new type of
          oracle network built to provide content moderation data for content
          hosted on IPFS. Our project also includes a simple demonstration of
          this prototype through an application where users can upload images
          which are displayed in a public-facing gallery.
        </p>
        <CtaButtonContainer>
          <a href="https://truesite.link">
            <CtaButton>See the demo!</CtaButton>
          </a>
        </CtaButtonContainer>
        <VideoPlaceholder>Video placeholder</VideoPlaceholder>
        <ContentSectionHeading>
          Chainlink and IPFS enable us to do something not before possible
        </ContentSectionHeading>
        <p>
          IPFS uses content addressing to identify content by what it contains
          rather than the location. Using IPFS as a decentralised content
          storage solution fits blockchain applications perfectly. Only the IPFS
          content hash need be stored on-chain and due to the immutable nature
          of content addressing we can be sure of the data we are referencing.
        </p>
        <p>
          An independent network of Chainlink oracles providing image
          classification services can be leveraged by social networks to provide{" "}
          <b>transparent</b> and <b>trust-minimised</b> content moderation for
          their users.
        </p>
        <p>
          TrueSight is a demonstration of how a decentralised content moderation
          network could be achieved through combining Chainlink and IPFS with
          image classification algorithms. Both the user-uploaded images and the
          calculated moderation labels are stored on IPFS and our demo Chainlink
          node is utilising Amazon Rekognition (a cloud-based image
          classification service) via an external adapter.
        </p>

        <ContentSectionHeading>A first line of defence</ContentSectionHeading>
        <p>
          While AI/machine learning solutions are constantly getting better at
          classification, it is extremely difficult for code to make accurate
          judgement about what is deemed acceptable to the majority of people.
        </p>
        <p>
          It may therefore be beneficial for consuming applications to treat the
          moderation labels from the TrueSight network as a first line of
          defence while still allowing users the ability to manually flag
          content.
        </p>
        <p>
          Allowing users to provide feedback on classification results also
          opens up the possibility of incentivising feedback loops to better
          train the classification algorithms powering the TrueSight network.
        </p>
        <ContentSectionHeading>
          Today users have two choices when it comes to social media...
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
              <GoodLi>
                <b>Мainstream adoption</b>
              </GoodLi>
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
              <BadLi>
                <b>Lack of mainstream adoption</b>
              </BadLi>
            </ul>
          </ComparisonGridCol>
        </ComparisonGrid>
        <p>
          It is clear that decentralised social media platforms have huge
          benefits over centralised ones. Users no longer have to trust a
          centralised intermediary who may not have their best interests at
          heart.
        </p>
        <p>
          However, if we want to see mainstream adoption of a decentralised
          social media platform it is highly likely that some form of automated
          content moderation will be required to protect its users.
        </p>
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
        <ContentSectionHeading>Beyond social media</ContentSectionHeading>
        <p>
          There are many cases for content moderation outside of social media
          platforms too. One blockchain-based gaming example we have witnessed
          ourselves has been during the recent launch of Aavegotchis which are
          ghost themed tamagotchi style NFTs which are planned to be used in
          virtual meet-ups and mini-games. Players are able to name their
          Aavegotchis anything they wish and the names are shown publicly. Some
          Aavegotchis were given offensive names and some members of the
          Aavegotchi DAO saw this as problematic and raised concern that lack of
          censorship here could have have a negative impact on the growth of the
          game.
        </p>
        <p>
          While this has been managed so far by censoring offensive names in the
          UI layer it may have been beneficial to disallow players from setting
          offensive names for their Aavegotchis on the smart contract layer.
          This would both standardise content moderation across front-end
          clients displaying Aavegotchis and also take the onus of content
          moderation off them.
        </p>
        <ContentSectionHeading>Taking it further...</ContentSectionHeading>
        <p>
          To better decentralise the TrueSight network a result aggregation
          mechanism could be implemented to allow several independent Chainlink
          nodes to perform their own image classification algorithms before
          coming to consensus about the most correct answer.
        </p>
        <p>
          Most image classification services will return results in completely
          different formats to one another. Aggregation on results of varying
          formats could be very difficult. It may therefore be beneficial to
          have an agreed upon results format which all nodes in the network must
          map results to before aggregation begins.
        </p>
      </WhiteSection>
    </Container>
  );
};

const Container = styled.div<{ isMobileDevice: boolean }>`
  margin-top: 500px;
  min-height: calc(100vh - 500px);
  pointer-events: ${props => (props.isMobileDevice ? "auto" : "none")};
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

const CtaButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CtaButton = styled.button`
  font-size: 2rem;
  color: white;
  background-color: #6c02c9;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  pointer-events: auto;
  cursor: pointer;
  font-family: "Montserrat";

  &:hover {
    opacity: 0.8;
  }
`;
