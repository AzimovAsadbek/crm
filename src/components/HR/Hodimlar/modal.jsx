import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {Section, SelectWrapper} from "./style.js";

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
            <Title type={"bold"} $font_size={18}>Hodim qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Ismi</Title>
            <GenericInput placeholder={"name"} $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Familiya</Title>
            <GenericInput placeholder={"surname"} $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Telefon
                raqami</Title>
            <GenericInput placeholder={"phone number"} $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Jinsi</Title>
            <GenericSelect/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Tug'ilgan
                sana</Title>
            <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                <DatePicker
                    defaultValue={moment()}
                    sx={{width: "100%"}}
                    slotProps={{textField: {size: "small"}}}
                />
            </LocalizationProvider>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Vazifasi</Title>
            <GenericSelect/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Foiz</Title>
            <GenericSelect/>
            <Section>
                <div style={{flex: 1}}>
                    <Title $font_size={16} $line_height={24} color={"var(--secondaryColor)"}
                    >Filiallar</Title>
                    <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                           $mt={16}>- Chilonzor</Title>
                    <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                           $mt={24}>- Namangan</Title>
                    <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                           $mt={24}>- Ko’kcha</Title>
                    <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                           $mt={24}>- Ko’kcha</Title>
                </div>
                <div style={{flex: 1}}>
                    <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"}
                    >Ro'llar</Title>

                    <SelectWrapper>
                        <GenericSelect value={data?.group} data={yonlaishlar}/>
                        <GenericSelect value={data?.group} data={yonlaishlar}/>
                        <GenericSelect value={data?.group} data={yonlaishlar}/>
                        <GenericSelect value={data?.group} data={yonlaishlar}/>
                    </SelectWrapper>

                </div>
            </Section>

        </GenericModal>
    );
}
export default AllLidsModal;