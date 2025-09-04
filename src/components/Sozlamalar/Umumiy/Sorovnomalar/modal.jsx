import GenericModal from "../../../Generics/Modal/index.jsx";
import Title from "../../../Generics/Title/index.jsx";
import GenericInput from "../../../Generics/Input/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";


const SorovnomaModal = (props) => {
    const {data} = props


    return (
        <GenericModal {...props}>
            <Title type={"bold"} $font_size={18}>So'rovnoma qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Yo'naltiruvchi
                nomi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Reklama url
                manzili</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Sana</Title>
            <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                <DatePicker
                    defaultValue={moment()}
                    sx={{width: "100%"}}
                    slotProps={{textField: {size: "small"}}}
                />
            </LocalizationProvider>
        </GenericModal>
    );
}
export default SorovnomaModal;