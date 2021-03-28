// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ReactContent = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    let check = false;
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    setIsMobileDevice(check);
  }, []);

  return (
    <Container isMobileDevice={isMobileDevice}>
      <TransparentSection>
        <Heading>TrueSight</Heading>
        <Subheading>
          Transparent content moderation powered by Chainlink and IPFS
        </Subheading>
      </TransparentSection>
      <WhiteSection>
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
        <ContentSectionHeading>
          Content moderation should be focused on protecting the safety of young
          or otherwise vulnerable users
        </ContentSectionHeading>
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
          Our hackathon project, TrueSight, includes a simplified demonstration
          of how this can be achieved through combining Chainlink and IPFS with
          image classification algorithms. Both the user-uploaded images and the
          calculated moderation labels are stored on IPFS and our demo Chainlink
          node is utilising Amazon Rekognition (a cloud-based image
          classification service) via an external adapter.
        </p>
        <CtaButtonContainer>
          <a href="https://truesite.link">
            <CtaButton>See the demo!</CtaButton>
          </a>
        </CtaButtonContainer>
        <VideoPlaceholder>Video placeholder</VideoPlaceholder>
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
      <MobileIndicator />
    </Container>
  );
};

const MobileIndicator = styled.div`
  background-color: ${props => props.isMobileDevice ? "red" : "blue"};
  position: absolute;
  height: 10px;
  width: 10px;
  top: 0;
  right: 0;
`

const Container = styled.div`
  margin-top: 500px;
  min-height: calc(100vh - 500px);
  pointer-events: ${props => props.isMobileDevice ? "auto" : "none"};
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
