import styled from "styled-components";
import arrowUp from "../../assets/icons/arrowUp.svg?react";

const getColor = (title) => {
  switch (title) {
    case "Talabalar":
      return { primary: "#52C41A", secondary: "#B7EB8F", ternary: "#F6FFED" };
    case "Mentorlar":
      return { primary: "#FADB14", secondary: "#FFE58F", ternary: "#FFFBE6" };
    case "Filiallar":
      return { primary: "#1890FF", secondary: "#91D5FF", ternary: "#E6F7FF" };
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: white;
  padding: 0 24px;
  border-radius: 8px;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  padding-bottom: 0;
  border-radius: 8px;
  flex: 1;
  background-color: ${({ title }) => getColor(title)?.ternary};

  .icon {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${({ title }) => getColor(title)?.primary};
    margin-right: 16px;
  }

  .subIcon {
    margin-right: 24px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Plus = styled.div`
  &::before {
    content: "+";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ title }) => getColor(title)?.secondary};
    color: white;
  }
  &:active {
    transform: scale(0.97);
  }
  cursor: pointer;
`;

const ArrowIcon = styled(arrowUp)`
  width: 24px;
  height: 24px;
  margin-right: ${({ child }) => (child ? "8px" : "16px")};
`;

const SubCard = styled(Card)`
  padding-bottom: 24px;
  border: 1px solid #f0f0f0;
`;

const Footer = styled.div`
  display: flex;
  /* flex: 1; */
  gap: 17px;
`;

const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ title }) => (title ? "2" : "1")};
  gap: 16px;
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 12px;
  background-color: #1890ff;
  color: white;
  margin-left: 8px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export {
  Container,
  Wrapper,
  Card,
  Section,
  Plus,
  ArrowIcon,
  SubCard,
  Footer,
  Fragment,
  Count,
};
