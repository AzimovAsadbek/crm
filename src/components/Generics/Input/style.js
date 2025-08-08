import styled from "styled-components";
import getValue from "../../../utils/getValue";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 16px;
  padding-right: 2px;
  flex: 1;
  border: 1px solid var(--secondaryColor);
  width: ${({ $width }) => getValue($width)};
  max-width: ${({ $width }) => getValue($width, "100%")};
  height: ${({ $height }) => getValue($height, "40px")};
  border-radius: ${({ $border_radius }) => getValue($border_radius, "8px")};
  /* max-width: 500px; */
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: ${({ $height }) => $height && getValue($height - 2, "38px")};
  border-radius: ${({ $border_radius }) => getValue($border_radius, "8px")};

  font-weight: ${({ $font_weight }) => getValue($font_weight, "")};
  font-size: ${({ $fontSize }) => getValue($fontSize, "14px")};
  line-height: ${({ $lineHeight }) => getValue($lineHeight, "20px")};

  color: ${({ $color }) => getValue($color, "var(--primaryColor)")};

  &::placeholder {
    font-weight: ${({ $placeholder_list }) =>
      getValue($placeholder_list?.fontWeight, "500")};
    font-size: ${({ $placeholder_list }) =>
      getValue($placeholder_list?.fontSize, "14px")};
    line-height: ${({ $placeholder_list }) =>
      getValue($placeholder_list?.lineHeight, "20px")};

    color: ${({ $placeholder_list }) =>
      getValue($placeholder_list?.color, "#bbc3cd")};
  }
`;
export { Container, Input };
