import { Container, RightWrapper } from "./style";
import Icon from "../../assets/icons/search.svg?react";
import Timer from "./Timer";
import GenericSelect from "./GenericSelect";
import DatePicker from "./DatePicker";
import GenericInput from "../Generics/Input";

const Navbar = () => {
  return (
    <Container>
      <GenericInput
        $left_icon={Icon}
        $height={40}
        $width={500}
        placeholder="Search"
      />
      <RightWrapper>
        <Timer />
        <GenericSelect />
        <DatePicker />
      </RightWrapper>
    </Container>
  );
};

export default Navbar;
