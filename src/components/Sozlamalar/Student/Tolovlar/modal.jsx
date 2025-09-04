import Title from "../../../Generics/Title/index.jsx";
import GenericInput from "../../../Generics/Input/index.jsx";
import GenericModal from "../../../Generics/Modal/index.jsx";

const TolovlarModal = (props) => {
    const {data} = props


    return (
        <GenericModal {...props}>
            <Title type={"bold"} $font_size={18}>Bonus qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Bonus
                turi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Bonus
                miqdori</Title>
            <GenericInput $fontSize={16} defaultValue={data?.name}/>

        </GenericModal>
    );
}
export default TolovlarModal;