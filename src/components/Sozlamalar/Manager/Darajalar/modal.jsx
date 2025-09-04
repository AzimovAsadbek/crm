import Title from "../../../Generics/Title/index.jsx";
import GenericInput from "../../../Generics/Input/index.jsx";
import GenericModal from "../../../Generics/Modal/index.jsx";
import {Wrapper} from "./style.js";

const DarajalarModal = (props) => {
    const {data} = props


    return (
        <GenericModal {...props}>
            <Title type={"bold"} $font_size={18}>Daraja qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Lavozim</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Wrapper>
                <div>

                    <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"}
                           $mt={16}>Bir stavka</Title>
                    <GenericInput $width={238} $fontSize={16} defaultValue={data?.name}/>
                </div>
                <div>

                    <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Yarim
                        stavka</Title>
                    <GenericInput $width={238} $fontSize={16} defaultValue={data?.name}/>
                </div>
            </Wrapper>

        </GenericModal>
    );
}
export default DarajalarModal;