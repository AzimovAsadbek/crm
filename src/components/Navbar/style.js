import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  align-items: center;
  height: 60px;
  background-color: white;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

// Time
const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Time = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ $status }) =>
    $status ? "var(--secondaryColor)" : "var(--primaryColor)"};
`;

export { Container, RightWrapper, TimeWrapper, Time };
