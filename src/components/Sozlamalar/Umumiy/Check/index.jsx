import {Container, DownloadInput, DownloadWrapper} from "./style.js";
import Title from "../../../Generics/Title/index.jsx";
import {useState} from "react";
import GenericInput from "../../../Generics/Input/index.jsx";
import {Select} from "@mui/material";
import GenericSelect from "../../../Generics/GenericSelect/GenericSelect.jsx";
import GenericButton from "../../../Generics/Button/index.jsx";

const Check = () => {
    const [url, setUrl] = useState("");

    const onUpload = (e) => {
        let [file] = e.target.files;
        file = URL.createObjectURL(file);
        setUrl(file);
    }
    return (
        <Container>
            <div>
                <Title color={"var(--secondaryColor)"} $font_size={16} $line_height={24} $mb={8}>Logo</Title>
                <DownloadWrapper $url={url}>
                    <DownloadInput type={"file"} onChange={onUpload}/>
                </DownloadWrapper>
            </div>
            <div>
                <Title color={"var(--secondaryColor)"} $font_size={16} $line_height={24} $mb={8}>Sarlavha</Title>
                <GenericInput $width={500}/>
            </div>
            <div>
                <Title color={"var(--secondaryColor)"} $font_size={16} $line_height={24} $mb={8}>Chek tag yozuvi</Title>
                <GenericInput $width={500}/>
            </div>
            <div>
                <Title color={"var(--secondaryColor)"} $font_size={16} $line_height={24} $mb={8}>Chet tili</Title>
                <GenericSelect width={500}/>
            </div>
            <GenericButton type={"save"} $width={88} $ml={"auto"} $mr={28} $mb={25}>Saqlash</GenericButton>
        </Container>
    );
}
export default Check;