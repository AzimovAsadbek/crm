import styled from "styled-components";
import getValue from "../../../hooks/getValue";

const Container = styled.div`
  display: inherit;
  align-items: inherit;
  line-height: ${({ $line_height }) => getValue($line_height, "28px")};
  font-weight: ${({ type }) => (type ? 600 : 500)};
  font-size: ${({ $font_size }) => getValue($font_size, "16px")};

  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  margin-top: ${({ $mt }) => getValue($mt)};
  margin-bottom: ${({ $mb }) => getValue($mb)};
  margin-left: ${({ $ml }) => getValue($ml)};
  margin-right: ${({ $mr }) => getValue($mr)};

  padding-top: ${({ $pt }) => getValue($pt)};
  padding-bottom: ${({ $pb }) => getValue($pb)};
  padding-left: ${({ $pl }) => getValue($pl)};
  padding-right: ${({ $pr }) => getValue($pr)};
`;

export { Container };
