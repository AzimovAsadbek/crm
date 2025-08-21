import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {ModalInput, Section, SelectWrapper, Wrap} from "./style.js";
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
            {/*<Title type={"bold"} $font_size={18}>Kurs qo'shish</Title>*/}
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Kursning
                yo'nalishi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Kursning
                nomi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>


            <Section>
                <SelectWrapper>

                    <Title style={{flex: 1}} $font_size={16} $line_height={24} color={"var(--secondaryColor)"}
                    >Filiallar</Title>
                    <Title style={{flex: 1}} $font_size={16} $line_height={24} color={"var(--secondaryColor)"}
                    >Narxi</Title>
                </SelectWrapper>
                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

            </Section>

        </GenericModal>
    );
}
export default AllLidsModal;