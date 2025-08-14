import {Container, RightWrapper} from "./style";
import Icon from "../../assets/icons/search.svg?react";
import Timer from "./Timer";
import GenericSelect from "../Generics/GenericSelect/GenericSelect.jsx";
import DatePicker from "./DatePicker";
import GenericInput from "../Generics/Input";

const Navbar = () => {
    const data = [
        {value: "uzbek", title: "Uzbek"},
        {value: "russian", title: "English"},
        {value: "english", title: "Russian"},
    ]
    return (
        <Container>
            <GenericInput
                $left_icon={Icon}
                $height={40}
                $width={500}
                placeholder="Search"
            />
            <RightWrapper>
                <Timer/>
                <DatePicker/>
                <GenericSelect data={data} value={"uzbek"} width={147}/>
            </RightWrapper>
        </Container>
    );
};

export default Navbar;
