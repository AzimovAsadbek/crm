import styled from "styled-components";
import arrow from "../../../assets/icons/arrow.svg?react"
import title from "../../Generics/Title/index.jsx";


const getColor = ({title}) => {
    switch (title) {
        case "Lidlar":
            return "#F0F5FF"
        case "Moliya":
            return "#FFF2E8"
        case "Kurslar":
            return "#E6FFFB"
        case "HR":
            return "#FFF0F6"
        case "Guruhlar":
            return "#FCFFE6"
        case "Sozlamalar":
            return "#FFF2E8"
        case "Talabalar":
            return "#F9F0FF"
    }
}

const Conatiner = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: ${getColor};
    padding: 24px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-bottom: 24px;
`
const Arrow = styled(arrow)`
`
export {Conatiner, Arrow}