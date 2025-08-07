import { Container, Input, InputWrapper, RightWrapper } from "./style"
import Icon from "../../assets/icons/search.svg?react"
import Timer from "./Timer"
import GenericSelect from "./GenericSelect"
import DatePicker from "./DatePicker"

const Navbar = () => {
    return (
        <Container>
            <InputWrapper>
                <Icon />
                <Input placeholder="Search" />
            </InputWrapper>
            <RightWrapper>
                <Timer />
                <GenericSelect />
                <DatePicker />
            </RightWrapper>
        </Container>
    )
}

export default Navbar
