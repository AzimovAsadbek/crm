import GenericModal from "../../../Generics/Modal/index.jsx";
import Title from "../../../Generics/Title/index.jsx";
import GenericInput from "../../../Generics/Input/index.jsx";
import MultipleSelect from "./MultiSelect.jsx";
import {days} from "../../../../hooks/useDate.js";

const CourseAddModal = (props) => {
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
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Darajalar</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Hafta
                kunlari</Title>
            <MultipleSelect data={days}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Boshlanish
                vaqti</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Tugash
                vaqti</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Ustozlar</Title>
            <MultipleSelect data={days}/>
        </GenericModal>
    );
}
export default CourseAddModal;