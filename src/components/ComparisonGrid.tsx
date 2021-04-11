
import styled from "styled-components"

export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  gap: 20px;
  pointer-events: auto;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  }
`;

export const ComparisonGridCol = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ComparisonGridColHeading = styled.span`
  font-size: 1.4rem;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ComparisonsLi = styled.li`
  margin: 10px 0;
`;

export const BadLi = styled(ComparisonsLi)`
  color: red;
`;

export const MedLi = styled(ComparisonsLi)`
  color: #d18102;
`;

export const GoodLi = styled(ComparisonsLi)`
  color: green;
`;