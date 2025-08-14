import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";

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
            <Title type={"bold"} $font_size={18}>Lid qo'shish</Title>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Studentni
                ismi</Title>
            <GenericInput placeholder={"Your name"} $width={500} $fontSize={16} defaultValue={data?.name}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Yonalishni
                tanlang</Title>
            <GenericSelect value={data?.group} data={yonlaishlar}/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Darajangizni
                tanlang</Title>
            <GenericSelect/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Kun
                tanlang</Title>
            <GenericSelect/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Boshlanish
                sanasini tanlang</Title>
            <GenericSelect/>
            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Izoh</Title>
            <GenericInput placeholder={"Izoh"} $width={500} $fontSize={16}/>
        </GenericModal>
    );
}
export default AllLidsModal;