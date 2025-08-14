import {createPortal} from "react-dom";
import {Container, Footer, Wrapper} from "./style.js";
import GenericButton from "../Button/index.jsx";

const GenericModal = (props) => {
    return props?.open ? (
        createPortal(
            <Container>
                <Wrapper>
                    {props?.children}
                    <Footer>
                        <GenericButton type={"delete"} onClick={props?.onClose}>O'chirish</GenericButton>
                        <GenericButton type={"save"} onClick={props?.onSave}>Saqlash</GenericButton>
                    </Footer>
                </Wrapper>
            </Container>,
            document.body
        )
    ) : null
}
export default GenericModal;