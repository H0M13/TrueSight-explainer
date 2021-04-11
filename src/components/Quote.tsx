import styled from "styled-components";

export const Quote = styled.div`
  font-style: italic;
  background-color: #a4eafc;
  color: #003f9e;
  font-size: 1.2rem;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  pointer-events: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuoteLink = styled.a`
  pointer-events: auto;
  color: #003f9e;
`;

export const QuoteSource = styled(QuoteLink)`
  font-style: initial;
  font-size: 0.8rem;
  color: #003f9e;
`;
