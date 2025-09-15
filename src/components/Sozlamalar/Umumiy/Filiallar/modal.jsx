import GenericModal from "../../../Generics/Modal/index.jsx";
import Title from "../../../Generics/Title/index.jsx";
import GenericInput from "../../../Generics/Input/index.jsx";

const FilialModal = (props) => {
    const {data} = props

    return (
        <GenericModal {...props}>
            <Title type={"bold"} $font_size={18}>Filial qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Nomi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Manzil</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Guruhlar
                sig'imi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Talabalar
                sig'imi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>

        </GenericModal>
    );
}
export default FilialModal;