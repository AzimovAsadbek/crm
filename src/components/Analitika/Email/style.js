import styled from "styled-components";
import TitleCon from "../../Generics/Title";
import getValue from "../../../hooks/getValue";

const Container = styled.div`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  justify-content: space-between;
  border-radius: 8px;
  transition: all 0.1s;
  &:hover {
    background-color: #f0f5ff;
  }
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  background-color: inherit;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 18px;
`;

const Title = styled(TitleCon)`
  font-size: ${({ $font_size }) => getValue($font_size, "16px")};
  line-height: 20px;
  white-space: nowrap;
  max-width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: inherit;
`;

export { Container, Info, Section, Img, Title };
