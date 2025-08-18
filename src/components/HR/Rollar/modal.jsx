import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import {Item, Section, Wrapper} from "./style.js";
import roles from "../../../mock/roles.js";
import Checkbox from "@mui/material/Checkbox";

const AllLidsModal = (props) => {
    const {data} = props

    const yonlaishlar = data && [
        {
            title: "FrontEnd", value: "FrontEnd",
        },
        {
            title: "BackEnd", value: "BackEnd",
        },
        {
            title: "Mobile", value: "Mobile",
        }
    ]
    return (
        <GenericModal {...props}>
            <Title type={"bold"} $font_size={18}>Ro'l qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Daraja</Title>
            <GenericInput placeholder={"daraja"} $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Daraja
                izohi</Title>
            <GenericInput placeholder={"daraja izohi"} $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Wrapper>
                {
                    roles.map(([title, role]) => {
                        return <Section key={title}>
                            <Title $font_size={16} $line_height={24} $mt={16}
                                   color={"var(--secondaryColor)"}>{title}</Title>
                            <Section>
                                {role.map(({status, title}) => {
                                    return <Item key={title}>
                                        <Checkbox defaultChecked={status}/>
                                        <Title $font_size={16}>{title}</Title>
                                    </Item>
                                })}
                            </Section>
                        </Section>
                    })
                }
            </Wrapper>
        </GenericModal>
    );
}
export default AllLidsModal;